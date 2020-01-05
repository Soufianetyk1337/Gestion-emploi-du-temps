<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormEvents extends Model
{
    protected $fillable = ['seance', 'professeur','dateSeance','debutSeance','finSeance'];
}
