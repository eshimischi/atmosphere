<?php

namespace App\Domains\Housing\Http\Controllers;

use App\Domains\Housing\Actions\RegisterOccurrence;
use App\Domains\Housing\Exports\OccurrenceExport;
use App\Domains\Housing\Models\OccurrenceCheck;
use App\Domains\Transaction\Actions\SearchTransactions;
use App\Jobs\RunTeamChecks;
use Freesgen\Atmosphere\Http\InertiaController;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon as SupportCarbon;
use Maatwebsite\Excel\Facades\Excel;

class OccurrenceController extends InertiaController
{
    public function __construct(OccurrenceCheck $occurrence)
    {
        $this->model = $occurrence;
        $this->templates = [
            'index' => 'Housing/Occurrence',
        ];
        $this->searchable = ["id", "name"];
        $this->includes = [];
        $this->appends = [];
        $this->resourceName = 'occurrence';
        $this->authorizedTeam = true;
    }

    protected function getIndexProps(Request $request, $resources = null): array
    {
        return [
            'linkedTypes' => OccurrenceCheck::getLinkedModels()
        ];
    }

    public function addInstance(OccurrenceCheck $occurrence, RegisterOccurrence $registerOccurrence) {
        $registerOccurrence->add(
            $occurrence->team_id,
            $occurrence->name,
            SupportCarbon::now()->format('Y-m-d')
        );

        return redirect()->back();
    }

    public function removeLastInstance(OccurrenceCheck $occurrence, RegisterOccurrence $registerOccurrence) {
        $registerOccurrence->remove(
            $occurrence->id,
        );

        return redirect()->back();
    }

    public function automationPreview(OccurrenceCheck $occurrence, SearchTransactions $search) {
        return $search->handle($occurrence->conditions);
    }

    public function automationLoad(OccurrenceCheck $occurrence, RegisterOccurrence $registerer) {
        return $registerer->load($occurrence);
    }

    public function sync(OccurrenceCheck $occurrence, RegisterOccurrence $registerer) {
        return $registerer->sync($occurrence);
    }

    public function syncAll() {
        RunTeamChecks::dispatch(auth()->user()->current_team_id);
    }

    public function export() {
        $dataToExport = new OccurrenceExport(OccurrenceCheck::where('team_id', request()->user()->current_team_id)->get()->toArray());
        return Excel::download($dataToExport, 'occurrences.xlsx');
    }
}