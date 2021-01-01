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
            $table->string('name');
            $table->string('explain')->nullable()->comment('自己紹介');
            $table->string('social_token')->nullable()->comment('ソーシャルのトークン');
            $table->string('drive_token')->nullable()->comment('Googleドライブ系');

            $table->dateTime('drive_backup_date')->nullable()->comment('Googleドライブバックアップ日');
            $table->dateTime('imported_date')->nullable()->comment('インポート日');
            $table->dateTime('exported_date')->nullable()->comment('エクスポート日');

            $table->string('email')->nullable()->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();

            $table->string('profile_photo_path')->nullable()->comment('ソーシャルアイコンのURL');
            $table->string('original_profile_photo_path')->nullable()->comment('オリジナルアイコン用のパス置き場');

            $table->unsignedInteger('set1')->nullable()->comment('設定1');
            $table->unsignedInteger('set2')->nullable()->comment('設定1');
            
            $table->unsignedInteger('premium')->nullable()->comment('プレミアム会員かどうか');
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
