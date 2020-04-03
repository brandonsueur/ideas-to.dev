<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = DB::table('categories');

        if($table->get()->count() === 0){
            $table->insert([
                'icon' => 'mobile.png',
                'name' => 'appmobile',
                'color' => '#F7F5FF',
            ]);

            $table->insert([
                'icon' => 'gear.png',
                'name' => 'back-end',
                'color' => '#FFF5F5',
            ]);

            $table->insert([
                'icon' => 'package.png',
                'name' => 'package',
                'color' => '#F5FFFE',
            ]);

            $table->insert([
                'icon' => 'palette.png',
                'name' => 'front-end',
                'color' => '#FAFFF5',
            ]);
        }
    }
}
