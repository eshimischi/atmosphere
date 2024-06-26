<?php

namespace App\Domains\Transaction\Traits;

use Illuminate\Support\Facades\DB;
use Insane\Journal\Models\Core\Transaction;
use App\Domains\Budget\Data\BudgetReservedNames;

trait TransactionLineTrait
{
    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeVerified($query)
    {
        return $query->where('transactions.status', 'verified')
            ->join('transactions', 'transaction_lines.transaction_id', '=', 'transactions.id');
    }

    public function scopeByTeam($query, $teamId)
    {
        return $query->where('transaction_lines.team_id', $teamId);
    }

    public function scopePlanned($query, $isAutomatic = false)
    {
        return $query->where('transactions.status', 'planned')
            ->whereHas('schedule', function ($query) use ($isAutomatic) {
                $query->where('automatic', $isAutomatic);
            });
    }

    public function scopeInDateFrame($query, $startDate = null, $endDate = null, $orderByDate = true)
    {
        return $query
            ->when($startDate && ! $endDate, function ($query) use ($startDate) {
                $query->where('transaction_lines.date', '=', $startDate);
            })
            ->when($startDate && $endDate, function ($query) use ($startDate, $endDate) {
                $query->where('transaction_lines.date', '>=', $startDate);
                $query->where('transaction_lines.date', '<=', $endDate);
            })
            ->when($orderByDate, function ($query) {
                $query->orderBy('transaction_lines.date', 'desc');
            });
    }

    public function scopeExpenses($query)
    {
        return $query->where([
            'transactions.direction' => Transaction::DIRECTION_CREDIT,
            'transactions.status' => 'verified',
        ])
            ->whereNotNull('transaction_lines.category_id');
    }

    public function scopeBalance($query)
    {
        $transactionsTotalSum = 'ABS(sum(transaction_lines.amount * transaction_lines.type)) as total_amount, group_concat(distinct(categories.name)) as cat_name';

        return $query->where([
            'transactions.status' => 'verified',
        ])
            ->whereNotNull('transaction_lines.category_id')
            ->selectRaw($transactionsTotalSum);
    }

    public function scopeForAccount($query, $accountId)
    {
        return $query->where(DB::raw("(account_id = $accountId)"));
    }

    public function scopeCategories($query, array $categories)
    {
        return $query->whereIn('transaction_lines.category_id', $categories)
            ->join('categories', 'transaction_lines.category_id', '=', 'categories.id')
            ->when($categories, fn ($query) => $query->whereIn('transaction_lines.category_id', $categories));
    }

    public function scopeExpenseCategories($query, array $categories = null)
    {
        $query->whereNot('categories.name', BudgetReservedNames::READY_TO_ASSIGN->value)
            ->join('categories', 'transaction_lines.category_id', '=', 'categories.id');

        $categories = collect($categories);
        $excluded = $categories->filter( fn ($id) => $id < 0)->all();
        $included = $categories->filter( fn ($id) => $id > 0)->all();

        if (count($excluded)) {
            $query->whereNotIn('transaction_lines.category_id', $excluded);
        }
        if (count($included)) {
            $query->whereIn('transaction_lines.category_id', $included);
        }

        return $query;
    }

    public function scopeAllCategories($query, array $categories = null)
    {
        $query
            ->whereNot('categories.name', BudgetReservedNames::READY_TO_ASSIGN->value)
            ->join('categories', 'transaction_lines.category_id', '=', 'categories.id');

        $categories = collect($categories);
        $excluded = $categories->filter( fn ($id) => $id < 0)->all();
        $included = $categories->filter( fn ($id) => $id > 0)->all();

        if (count($excluded)) {
            $query->whereNotIn('transaction_lines.category_id', $excluded);
        }
        if (count($included)) {
            $query->whereIn('transaction_lines.category_id', $included);
        }

        return $query;
    }

    public function scopeIncomePayees($query, array $payees = null)
    {
        $query->where('categories.name', BudgetReservedNames::READY_TO_ASSIGN->value)
            ->join('categories', 'transaction_lines.category_id', '=', 'categories.id')
            ->join('payees', 'transaction_lines.payee_id', '=', 'payees.id');

        if ($payees) {
            $query->whereIn('transaction_lines.payee_id', $payees);
        }

        return $query;
    }

    public function scopePayees($query, array $payees)
    {
        return $query->whereIn('transaction_lines.payee_id', $payees)
        ->join('categories', 'transaction_lines.category_id', '=', 'categories.id');
    }
}
