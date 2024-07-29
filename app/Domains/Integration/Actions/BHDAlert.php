<?php

namespace App\Domains\Integration\Actions;

use Exception;
use Symfony\Component\DomCrawler\Crawler;
use App\Domains\Automation\Models\Automation;
use App\Domains\Transaction\Services\YNABService;
use App\Domains\Integration\Concerns\MailToTransaction;
use App\Domains\Integration\Concerns\TransactionDataDTO;

class BHDAlert implements MailToTransaction
{
    use BHDAction;

    public function handle(Automation $automation, mixed $mail, int $index = 0): TransactionDataDTO
    {
        try {
            $body = new Crawler($mail['message']);
            $product = $body->filter('[class*=titleA] + p')->first()->text();
            $tdValues = $body->filter('[class*=table_trans] tbody td')->each(function (Crawler $node) {
                return $node->text();
            });

            $total = YNABService::extractMoneyCurrency($tdValues[2]);
            $type = BHD::parseTypes(strtolower($tdValues[5])) ?? 1;

            return new TransactionDataDTO([
                'id' => (int) $mail['id'],
                'date' => date('Y-m-d', strtotime($mail['date'])),
                'payee' => $tdValues[3],
                'category' => '',
                'categoryGroup' => '',
                'description' => $product,
                'amount' => $total->amount * $type,
                'currencyCode' => BHD::parseCurrency($tdValues[1]),
            ]);
        } catch (Exception $e) {
            throw $e;
        }
    }
}
