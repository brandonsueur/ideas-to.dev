<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('github_id')->unique();

            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();

            $table->string('name')->nullable();
            $table->string('avatar')->nullable();
            $table->string('email')->unique();

            $table->string('job')->nullable();
            $table->string('location')->nullable();
            $table->string('profile')->nullable();
            $table->string('bio')->nullable();
            $table->string('website')->nullable();

            $table->string('password')->nullable();
            $table->string('address_ip')->nullable();

            $table->timestamp('email_verified_at')->nullable();

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
