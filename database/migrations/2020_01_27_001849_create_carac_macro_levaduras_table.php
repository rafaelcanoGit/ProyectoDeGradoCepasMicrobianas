<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaracMacroLevadurasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carac_macro_levaduras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('levadura_id');
            $table->foreign('levadura_id')->references('id')->on('levaduras')->onDelete('cascade');
            $table->string('medio',50);
            $table->string('color',50);
            $table->string('textura',50);
            $table->string('topografia_superficie',50);
            $table->string('borde_colonia',50);
            $table->string('imagen')->nullable();
            $table->string('imagenPublica')->nullable();
            $table->longText('descripcion',100)->nullable();
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
        Schema::dropIfExists('carac_macro_levaduras');
    }
}
