<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use LaravelDaily\Invoices\Invoice;
use LaravelDaily\Invoices\Classes\Party;
use LaravelDaily\Invoices\Classes\InvoiceItem;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $transactions = Transaction::where('user_id', $user->id)->orderBy('id','desc')->paginate(10);
        return Inertia::render('Members/Transaction',[
            'user' => $user,
            'transactions' => $transactions
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
        //
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
    public function destroy(string $id)
    {
        //
    }

    public function paymentConfirmation(String $id)
    {
        $transaction = Transaction::find($id);
        $user =Auth::user();
        return Inertia::render('Members/PaymentConfirmation',[
            'user' => $user,
            'transaction' => $transaction
        ]);

    }
    
    public function requestConfirmation(Request $request, String $id) 
    {
        $transaction = Transaction::find($id);
        $pathImage = Storage::put('public/transactions/payment-confirmation/'. $transaction->id, $request->file('image'), 'public');
        $imageUrl = asset(Storage::url($pathImage));
        $transaction->payment_url = $imageUrl;
        $transaction->status = 'payment_confirmation';
        $transaction->save();
        
        return Inertia::location(route('member.transactions'));
    }

    public function invoice(String $id) 
    {
        $transaction = Transaction::where('id', $id)->with(['transactionDetails', 'transactionDetails.product', 'transactionDetails.product.category'])->first();
        $user = Auth::user();
        $client = new Party([
            'name'          => '88 Design Studio',
            'phone'         => '(520) 318-9486',
        ]);
        
        $customer = new Party([
            'name'          => $user->name,
            'custom_fields' => [
                'Email'          => $user->email,
                'Transaction id' => '#' . $transaction->id,
            ],
        ]);

        $statusTransaction = "";
        if ($transaction->status == 'payment_pending') {
            $statusTransaction = 'Pending Payment';
        }

        foreach($transaction->transactionDetails as $transactionDetail) {
            $items[] = InvoiceItem::make($transactionDetail['product']['category']['name'])
                ->pricePerUnit($transactionDetail->price);
        }
        
        $notes = [
            'you need to make a payment using paypal before the due date',
            'link for the paypal is paypal.me/eightyeightstudio',
            'after the payment is made, u need to click on payment confirmation button in the website',
            'do take a screenshot of the receipt for payment confirmation',
        ];
        $notes = implode("<br>", $notes);
        
        $invoice = Invoice::make('receipt')
            ->series('BIG')
            // ability to include translated invoice status
            // in case it was paid
            ->status($statusTransaction)
            ->sequence(667)
            ->serialNumberFormat('{SEQUENCE}/{SERIES}')
            ->seller($client)
            ->buyer($customer)
            ->date(now())
            ->dateFormat('m/d/Y')
            ->payUntilDays(1)
            ->currencySymbol('$')
            ->currencyCode('USD')
            ->currencyFormat('{SYMBOL}{VALUE}')
            ->currencyThousandsSeparator('.')
            ->currencyDecimalPoint(',')
            ->filename('Invoice-88studio' . '-' . $customer->name)
            ->addItems($items)
            ->notes($notes)
            ->logo(public_path('logo.png'))
            // You can additionally save generated invoice to configured disk
            ->save('public');
        
        $link = $invoice->url();
        // Then send email to party with link
        
        // And return invoice itself to browser or have a different view
        return $invoice->download();
    }
}
