<?php

use App\Http\Controllers\CartControllers;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Member\TransactionController as MemberTransactionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Models\Cart;
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
})->name('homepage');

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

            Route::post('/cart', [CartControllers::class, 'store'])->name('cart.store');
            Route::get('/cart', [CartControllers::class, 'index'])->name('cart.index');

            Route::post('/checkout', [CartControllers::class, 'checkout'])->name('cart.checkout');

            Route::get('/transactions', [MemberTransactionController::class, 'index'])->name('member.transactions');

            Route::get('/invoice', [MemberTransactionController::class, 'invoice'])->name('member.invoice');
        });

    });

});

Route::group(['middleware' => 'role:user'], function(){
    Route::middleware('member.auth')->group(function () {
        Route::get('/ych-comission', function () {

            $cart = Cart::where('user_id', Auth::user()->id);
            $cartContent = $cart->get();
            $productAdded = $cartContent->pluck('product_id')->toArray();
            $cartCount = $cart->count();
            $cartTotal = $cart->sum('price');
            $user = Auth::user();
            $product = Product::where('category_id', 5)->with('category')->get();
            
            return Inertia::render('Ych-comission',[
                'user' => $user,
                'products' => $product,
                'cart' => $cartCount,
                'productAdded' => $productAdded,
                'cartTotal' => $cartTotal
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

        Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');
    });

});

require __DIR__.'/auth.php';
