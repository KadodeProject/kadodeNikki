<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diaries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id')->comment('ユーザID');
            $table->string('title')->nullable()->comment('日記タイトル');
            $table->date('diary_date')->nullable()->comment('日記日付');
            $table->text('diary')->comment('日記本文');
            $table->integer('feel')->comment('気持ち');
            $table->string('tweet')->comment('今日イチのTwitter');
            $table->string('youtube')->comment('今日イチのYouTube');
       
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
        Schema::dropIfExists('diaries');
    }
}