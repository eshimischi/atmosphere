<?php

namespace App\Http\Controllers;

use App\Helpers\BudgetHelper;
use App\Helpers\CategoryHelper;
use App\Models\Budget;
use App\Models\Planner;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController {
    public function index(Request $request) {
        $startDate = $request->query('startDate', Carbon::now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->query('endDate', Carbon::now()->endOfMonth()->format('Y-m-d'));
        $teamId = $request->user()->current_team_id;


        $budget = Budget::where([
            'team_id' => $teamId
        ])->with('account')->get();

        $transactions = Transaction::where([
            'team_id' => $teamId,
            'direction' => "WITHDRAW",
            'status' => 'verified'
        ])->getByMonth($startDate, $endDate)->get();


        return Inertia::render('Dashboard', [
            "strings" => __('dashboard'),
            "meals" => Planner::where([
                'team_id' => $teamId,
                'date' => date('Y-m-d')
            ])->with('dateable')->get(),
            "budgetTotal" => $budget->sum('amount'),
            "budget" => $budget->map(function ($budget) use($startDate, $endDate) {
               return Budget::dashboardParser($budget, $startDate, $endDate);
            }),
            "categories" => $teamId ? CategoryHelper::getSubcategories($teamId, ['expenses', 'incomes']) : null,
            "accounts" => $teamId ? CategoryHelper::getAccounts($teamId, ['cash_and_bank']) : null,
            "transactionTotal" => $transactions->sum('total'),
            "transactions" => $transactions->map(function ($transaction) {
                return Transaction::parser($transaction);
            }),
        ]);
    }

    public function finance(Request $request) {
        $startDate = $request->query('startDate', Carbon::now()->startOfMonth()->format('Y-m-d'));
        $endDate = $request->query('endDate', Carbon::now()->endOfMonth()->format('Y-m-d'));
        $lastMonthStartDate = $request->query('startDate', Carbon::now()->subMonth()->startOfMonth()->format('Y-m-d'));
        $lastMonthEndDate = $request->query('endDate', Carbon::now()->subMonth()->endOfMonth()->format('Y-m-d'));
        $teamId = $request->user()->current_team_id;


        $budget = Budget::where([
            'team_id' => $teamId
        ])->with('account')->get();


        $planned = BudgetHelper::getPlannedTransactions($teamId);
        $subscriptions = BudgetHelper::getPlannedTransactions($teamId, 1);

        $transactions = Transaction::where([
            'team_id' => $teamId,
            'direction' => "WITHDRAW",
            'status' => 'verified'
        ])->getByMonth($startDate, $endDate)->get();

        $incomes = Transaction::where([
            'team_id' => $teamId,
            'direction' => "DEPOSIT",
            'status' => 'verified'
        ])->getByMonth($startDate, $endDate)->sum('total');

        $lastMonthIncomes= Transaction::where([
            'team_id' => $teamId,
            'direction' => "DEPOSIT",
            'status' => 'verified'
        ])->getByMonth($lastMonthStartDate, $lastMonthEndDate)->sum('total');

        $lastMonthExpenses= Transaction::where([
            'team_id' => $teamId,
            'direction' => "WITHDRAW",
            'status' => 'verified'
        ])->getByMonth($lastMonthStartDate, $lastMonthEndDate)->sum('total');

        return Inertia::render('Finance', [
            "planned" => $planned,
            "subscriptions" => $subscriptions,
            "budgetTotal" => $budget->sum('amount'),
            "budget" => $budget->map(function ($budget) use($startDate, $endDate) {
               return Budget::dashboardParser($budget, $startDate, $endDate);
            }),
            "categories" => CategoryHelper::getSubcategories($teamId, ['expenses', 'incomes']),
            "accounts" => CategoryHelper::getAccounts($teamId, ['cash_and_bank']),
            "transactionTotal" => $transactions->sum('total'),
            "lastMonthExpenses" => $lastMonthExpenses,
            "income" => $incomes,
            "lastMonthIncome" => $lastMonthIncomes,
            "transactions" => $transactions->map(function ($transaction) {
                return Transaction::parser($transaction);
            })->take(4),
        ]);
    }
}