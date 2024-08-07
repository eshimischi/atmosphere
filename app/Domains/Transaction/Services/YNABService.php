<?php

namespace App\Domains\Transaction\Services;

use App\Domains\Transaction\Models\Transaction;

class YNABService
{
    const CODES = [
        'RD' => 'DOP',
        'USD' => 'USD',
        'DOP' => 'DOP',
    ];

    public static function extractMoneyCurrency($amountWithCurrency, $symbol = '$')
    {
        $amount = explode($symbol, $amountWithCurrency);

        return (object) [
            'amount' => isset($amount[1]) ? (float) str_replace(',', '', $amount[1]) : 0,
            'currencyCode' => self::CODES[$amount[0]] ?? 'USD',
        ];

    }

    public static function getMoney(array $row)
    {

        $inflow = self::extractMoneyCurrency($row['inflow']);
        $outflow = self::extractMoneyCurrency($row['outflow']);
        $amounts = (object) [
            'inflow' => (float) $inflow->amount,
            'outflow' => (float) $outflow->amount,
            'currency_code' => $inflow->currencyCode,
        ];

        $direction = $amounts->inflow > $amounts->outflow ? 'inflow' : 'outflow';

        return (object) [
            'currencyCode' => $amounts->currency_code,
            'direction' => $direction == 'inflow' ? Transaction::DIRECTION_DEBIT : Transaction::DIRECTION_CREDIT,
            'amount' => $amounts->$direction,
        ];
    }

    public static function fixTransfer(int $accountId, $counterAccountId, string $direction)
    {
        if ($direction == Transaction::DIRECTION_CREDIT) {
            return [$accountId, $counterAccountId, $direction];
        }

        return [$counterAccountId, $accountId, Transaction::DIRECTION_CREDIT];
    }
}
