<?php

namespace App\Domains\AppCore\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;
use Insane\Journal\Models\Core\Account;

class FinanceAccountPolicy
{
    public function show(User $user, Account $account) {
        return $user->current_team_id === $account->team_id 
        ? Response::allow()
        : Response::deny('You do not own this post.');
    }

    public function delete(User $user, Account $account) {

        return $user->id == $account->user_id;
    }
}