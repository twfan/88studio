<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    if (Auth::check()) {
        return Inertia::render('Homepage', [
            'user' => Auth::user()
        ]);
    } else {
        return Inertia::render('Homepage',[
            'user' => null
        ]);
    }
});

Route::prefix('member')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Member');
    })->name('member.login');

    Route::get('/register', function () {
        return Inertia::render('Member/Register');
    })->name('member.register');


    Route::group(['middleware' => 'role:user'], function(){
        Route::middleware('member.auth')->group(function () {
            Route::get('/dashboard', function () {
                return Inertia::render('Members/Dashboard');
            })->name('member.dashboard');
        });
    });

});

Route::group(['middleware' => 'role:user'], function(){
    Route::middleware('member.auth')->group(function () {
        Route::get('/ych-comission', function () {
            $user = Auth::user();
            $product = Product::where('category_id', 5)->with('category')->get();
            return Inertia::render('Ych-comission',[
                'user' => $user,
                'products' => $product
            ]);
        })->name('ych-comission');
    });
});




Route::group(['middleware' => 'role:super_admin,admin'], function(){
    
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


        Route::get('/products' , [ProductController::class, 'index'])->name('products');
        Route::get('/products/create' , [ProductController::class, 'create'])->name('products.create');
        Route::post('/products' , [ProductController::class, 'store'])->name('products.store');
        Route::get('/products/{product}/edit' , [ProductController::class, 'edit'])->name('products.edit');
        Route::delete('/products/{product}' , [ProductController::class, 'destroy'])->name('products.destroy');

        Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
        Route::get('/categories/create', [CategoryController::class, 'create'])->name('categories.create');
        Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');
        Route::get('/categories/{category}/edit', [CategoryController::class, 'edit'])->name('categories.edit');
        Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');
    });

});

require __DIR__.'/auth.php';
