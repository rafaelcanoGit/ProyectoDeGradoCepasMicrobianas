<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateTables([
            'grupo_microbianos','generos','especies','divisions','clases','ordens','familias',
            'phylums','reinos','tipo_users','users','forma_caract_macros','bordes','elevacions',
            'forma_caract_micros','detalle_opticos','superficies','consistencias','tipo_metodo_conservacion_bacterias',
            'tipo_metodo_conservacion_hongo_levaduras','color_hongos','textura_hongos','espora_asexual_hongos',
            'espora_sexual_hongos','conidioforo_hongos','cepas'
        ]);
        $this->call(TipoUserSeeder::class);
        $this->call(GruposMicrobianosSeeder::class);
        $this->call(EspeciesSeeder::class);
        $this->call(DivisionesSeeder::class);
        $this->call(ClasesSeeder::class);
        $this->call(OrdensSeeder::class);
        $this->call(FamiliasSeeder::class);
        $this->call(PhylumsSeeder::class);
        $this->call(ReinosSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(FormaCaractMacrosSeeder::class);
        $this->call(BordesSeeder::class);
        $this->call(ElevacionsSeeder::class);
        $this->call(SuperficiesSeeder::class);
        $this->call(ConsistenciasSeeder::class);
        $this->call(DetalleOpticosSeeder::class);
        $this->call(FormaCaractMicrosSeeder::class);
        $this->call(TiposMetodosConservacionBacteriasSeeder::class);
        $this->call(TiposMetodosConservacionHLSeeder::class);
        $this->call(ColoresHongosSeeder::class);
        $this->call(TexturasHongosSeeder::class);
        $this->call(EsporasAsexualesHongosSeeder::class);
        $this->call(EsporasSexualesHongosSeeder::class);
        $this->call(ConidioforosHongosSeeder::class);
        $this->call(GenerosSeeder::class);
        //$this->call(CepasSeeder::class);
        // $this->call(UsersTableSeeder::class);
    }

    protected function truncateTables(array $tablas){
        DB::statement('SET FOREIGN_KEY_CHECKS = 0;');
        foreach($tablas as $tabla){
            DB::table($tabla)->truncate();
        }
        DB::statement('SET FOREIGN_KEY_CHECKS = 1;');
    }
}
