<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Transaction;
use App\Models\TransactionDetails;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CartControllers extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cart = Cart::where('user_id', Auth::user()->id)->with('product');
        $user = Auth::user();
        $cartContent = $cart->get();
        $cartTotal = $cart->sum('price');
        
        return Inertia::render('Members/Cart',[
            'user' => $user,
            'cart' => $cartContent,
            'cartTotal' => $cartTotal
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $cart = Cart::where('user_id', $request->user['id'])->where('product_id', $request->product['id'])->first();
        
        if (!empty($cart)) {
            $this->destroy($cart->id);
        } else {
            $cart = new Cart;
            $cart->user_id = $request->user['id'];
            $cart->product_id = $request->product['id'];
            $cart->price = $request->product['price'];
            $cart->save();
        }
        return Inertia::location(route('ych-comission'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        $cart = Cart::find($id);
        $cart->delete();
    }

    public function checkout()
    {
        $user = Auth::user();
        $cart = Cart::where('user_id', $user->id)->with('product')->get();

        try {
            DB::beginTransaction();
            
            $transaction = new Transaction();
            $transaction->user_id = $user->id;
            $transaction->save();
            foreach($cart as $cartItem) {
                
                $transaction->sub_total += $cartItem->product->price;
                $transaction->grand_total += $cartItem->product->price;
                
                $transactionDetail = new TransactionDetails();
                $transactionDetail->transaction_id = $transaction->id;
                $transactionDetail->product_id = $cartItem->product->id;
                $transactionDetail->price = $cartItem->product->price;
                $transactionDetail->save();

                $this->destroy($cartItem->id);
            }
            $transaction->save();

            DB::commit();

            return Inertia::location(route('member.transactions'));

        } catch (Exception $e) {

            DB::rollBack();
        }
        
    }
}
