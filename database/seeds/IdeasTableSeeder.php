<?php

use Illuminate\Database\Seeder;

class IdeasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $table = DB::table('ideas');

        if($table->get()->count() === 0){
            $table->insert([
                'user_id' => 1,
                'category_id' => 4,
                'title' => 'Une association caritative',
                'slug' => 'une-association-caritative',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 2,
                'title' => 'Comparaisons et statistiques du gasoil',
                'slug' => 'comparaisons-et-statistiques-du-gasoil',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 4,
                'title' => 'Formulaire de contact',
                'slug' => 'formulaire-de-contact',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 4,
                'title' => 'Mario Bros',
                'slug' => 'mario-bros',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 1,
                'title' => 'ChuiBourré',
                'slug' => 'chuibourre',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 1,
                'title' => 'Une poupée',
                'slug' => 'une-poupee',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);

            $table->insert([
                'user_id' => 1,
                'category_id' => 1,
                'title' => 'Votre poids en photo',
                'slug' => 'votre-poids-en-photo',
                'content' => '...',
                'draft' => false,
                'display' => true,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        }
    }
}
