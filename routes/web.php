<?php

use App\Http\Controllers\ControllerChatting;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/chat', [ControllerChatting::class ,'index'])->middleware('auth');

Route::get('/chat/{id}', [ControllerChatting::class ,'ShowUser'])->middleware('auth');
Route::post('/chat/{id}', [ControllerChatting::class,'ChatForm'])->middleware('auth');
// Route::post('/chat/{id}', [ChatController::class ,'ChatForm'])->middleware('auth');

//chat.show/{id}/create
//Route::resource('chat.create/{id}',ChatController::class)->middleware('auth');

// Route::get('/chat/{user_id}', [ChatController::class,'data'])->middleware('auth');

//Route::get('/chat/index', [ChatController::class,'index'])->middleware('auth');

// Route::get('/chat/{user_id}', [ChatController::class,'chatform'])->middleware('auth');

// Route::post('/chat/{user_id}', [ChatController::class,'sendMessage'])->middleware('auth');

// Route::get('/chat/{user_id}', function () {
//     return Inertia::render('Chat/chat');
// })->middleware(['auth']);