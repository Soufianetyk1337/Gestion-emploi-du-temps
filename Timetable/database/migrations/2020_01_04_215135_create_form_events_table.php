<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('seance');
            $table->string('professeur');
            $table->string('date_seance');
            $table->string('debut_seance');
            $table->string('fin_seance');
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
        Schema::dropIfExists('form_events');
    }
}
