<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetodoConserBacteria extends Model
{
    public function bacteria()
    {
        return $this->belongsTo(Bacteria::class);
    }

    public function tipoMetodo()
    {
        return $this->belongsTo(TipoMetodoConservacionBacteria::class);
    }
}
