<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TableController;
use App\Http\Controllers\ReservationController;

Route::get('/', function () {
    return view('welcome');
});





Route::get('/tables', [TableController::class, 'index']);
Route::post('/reservations', [ReservationController::class, 'store']);
Route::get('/reservations', [ReservationController::class, 'index']);
