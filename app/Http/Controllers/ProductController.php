<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::with('category')->get();
        return Inertia::render('Product/Index',[
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Product/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $pathImage = Storage::put('public/products', $request->file('image'), 'public');
        $product->category_id = $request->category['id'];
        $imageUrl = asset(Storage::url($pathImage));
        $product->image = $imageUrl;
        $product->price = $request->price;
        if (!empty($request->youtube)) {
            $pathBgVtuber = Storage::put('public/products', $request->file('transparentBg'), 'public');
            $fullPathBgVtuber = asset(Storage::url($pathBgVtuber));
            $product->youtube_url = $request->youtube;
            $product->transparent_background = $fullPathBgVtuber;
        }
        $product->save();
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
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
