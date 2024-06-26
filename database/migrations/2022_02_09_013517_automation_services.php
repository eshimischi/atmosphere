<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AutomationServices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('automation_services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('label');
            $table->string('type')->default('internal');
            $table->text('entity');
            $table->text('description');
            $table->text('logo');
            $table->json('fields')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('automation_services');
    }
}
