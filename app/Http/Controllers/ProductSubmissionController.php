<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Collection;

use App\Models\customerList;
use App\Models\ProductSubmission;

class ProductSubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show', 'store']);
    }

    public function index(Request $request)
    {
        $search = $request->query('search');
        $typeProduct = $request->query('typeProduct');
        $status = $request->query('status') ?? 'on_submit';

        $productSubmission = ProductSubmission::query();
        $productSubmission->select(
            'product_submission.id',
            'product_submission.name',
            'product_submission.identity_number',
            'product_submission.phone_number',
            'product_submission.type_product',
            'product.name AS product_name',
            'product_submission.submission_status',
            'product_submission.created_at'
        );

        if ($search) {
            $productSubmission->where(function ($query) use ($search) {
                return $query
                    ->where('product_submission.name', 'like', '%' . $search . '%')
                    ->orWhere('product_submission.identity_number', 'like', '%' . $search . '%')
                    ->orWhere('product_submission.phone_number', 'like', '%' . $search . '%');
            });
        }

        if ($typeProduct) {
            $productSubmission->where('product_submission.type_product', '=', $typeProduct);
        }

        $productSubmission->join('product', 'product_submission.type_product', '=',  'product.id');
        $productSubmission->where('product_submission.submission_status', '=', $status);

        return new Collection(
            $productSubmission->simplePaginate(10)
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'gender' => Rule::in(['male', 'female']),
            'cityOfBirth' => 'required|string',
            'dateOfBirth' => 'required|date',
            'maritalStatus' => Rule::in(['single', 'married', 'divorced']),
            'motherMaidenName' => 'required|string',
            'dependent' => 'required|integer',
            'identityNumber' => 'required|string',
            'phoneNumber' => 'required|string',
            'address' => 'required|string',
            'lengthOfStay' => 'required|integer',
            'homeType' => Rule::in(['privacy', 'family', 'rent', 'service', 'others']),
            'work' => 'required|string',
            'workPosition' => 'required|string',
            'workAddress' => 'required|string',
            'requestedAmount' => 'required|integer',
            'requestedAmountUse' => 'required|string',
            'termOfPayment' => 'required|integer',
            'profitSharing' => 'required|string',
            'submissionType' => Rule::in(['new', 'enhancement', 'take_over']),
            'partnerName' => 'nullable|string',
            'partnerCityOfBirth' => 'nullable|string',
            'partnerDateOfBirth' => 'nullable|date',
            'partnerWork' => 'nullable|string',
            'partnerWorkAddress' => 'nullable|string',
            'income' => 'required|integer',
            'costLiving' => 'required|integer',
            'partnerIncome' => 'nullable|integer',
            'otherLoanInstallment' => 'required|integer',
            'extraIncome' => 'required|integer',
            'residualIncome' => 'required|integer',
            'anfaDepositType' => 'nullable|string',
            'anfaOnBehalfOf' => 'nullable|string',
            'anfaAccountNumber' => 'nullable|string',
            'anfaCurrentBalance' => 'nullable|integer',
            'otherDepositType' => 'nullable|string',
            'otherOnBehalfOf' => 'nullable|string',
            'otherAccountNumber' => 'nullable|string',
            'otherCurrentBalance' => 'nullable|integer',
            'guarantee' => Rule::in(['bpkb', 'sertifikat']),
            'guaranteeValue' => 'required|integer',
            'guaranteeNameOwner' => 'required|string',
            'identityPhoto' => 'required|string',
            'idProduct' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $submission = new ProductSubmission();

        $submission->name = $request->name;
        $submission->gender = $request->gender;
        $submission->city_of_birth = $request->cityOfBirth;
        $submission->date_of_birth = $request->dateOfBirth;
        $submission->status = $request->maritalStatus;
        $submission->mother_maiden_name = $request->motherMaidenName;
        $submission->dependent = $request->dependent;
        $submission->identity_number = $request->identityNumber;
        $submission->phone_number = $request->phoneNumber;
        $submission->home_address = $request->address;
        $submission->length_of_stay = $request->lengthOfStay;
        $submission->home_type = $request->homeType;
        $submission->work = $request->work;
        $submission->work_position = $request->workPosition;
        $submission->work_address = $request->workAddress;
        $submission->requested_amount = $request->requestedAmount;
        $submission->requested_amount_use = $request->requestedAmountUse;
        $submission->term_of_payment = $request->termOfPayment;
        $submission->profit_sharing = $request->profitSharing;
        $submission->submission_type = $request->submissionType;
        $submission->partner_name = $request->partnerName;
        $submission->partner_city_of_birth = $request->partnerCityOfBirth;
        $submission->partner_date_of_birth = $request->partnerDateOfBirth;
        $submission->partner_work = $request->partnerWork;
        $submission->partner_work_address = $request->partnerWorkAddress;
        $submission->applicant_income = $request->income;
        $submission->applicant_cost_living = $request->costLiving;
        $submission->partner_income = $request->partnerIncome;
        $submission->applicant_other_loan_installment = $request->otherLoanInstallment;
        $submission->applicant_extra_income = $request->extraIncome;
        $submission->applicant_residual_income = $request->residualIncome;
        $submission->anfa_deposit_type = $request->anfaDepositType;
        $submission->anfa_on_behalf_of = $request->anfaOnBehalfOf;
        $submission->anfa_account_number = $request->anfaAccountNumber;
        $submission->anfa_current_balance = $request->anfaCurrentBalance;
        $submission->other_deposit_type = $request->otherDepositType;
        $submission->other_on_behalf_of = $request->otherOnBehalfOf;
        $submission->other_account_number = $request->otherAccountNumber;
        $submission->other_current_balance = $request->otherCurrentBalance;
        $submission->guarantee = $request->guarantee;
        $submission->guarantee_value = $request->guaranteeValue;
        $submission->guarantee_name_owner = $request->guaranteeNameOwner;
        $submission->identity_photo = $request->identityPhoto;
        $submission->type_product = $request->idProduct;
        $submission->submission_status = 'on_submit';

        $submission->save();

        return response()->json([
            'data' => $submission
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $productSubmission = ProductSubmission::query();
        $productSubmission->select('product_submission.*', 'product.name AS product_name');
        $productSubmission->join('product', 'product_submission.type_product', '=',  'product.id');
        $productSubmission->where('product_submission.id', '=', $id);

        return new Collection(
            $productSubmission->first()
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'status' => Rule::in(['on_review', 'approved', 'rejected']),
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $status = $request->status;

        $productSubmission = ProductSubmission::findOrFail($id);

        $productSubmissionStatus = $productSubmission['submission_status'];
        $productSubmissionName = $productSubmission['name'];
        $productSubmissionGender = $productSubmission['gender'];
        $productSubmissionDateOfBirth = $productSubmission['date_of_birth'];
        $productSubmissionIdentityNumber = $productSubmission['identity_number'];
        $productSubmissionPhoneNumber = $productSubmission['phone_number'];

        if ($status == 'on_review') {
            if ($productSubmissionStatus != 'on_submit') {
                return response()->json([
                    'data' => 'failed update'
                ]);
            }
        }

        if ($status == 'rejected') {
            if ($productSubmissionStatus != 'on_submit') {
                return response()->json([
                    'data' => 'failed update'
                ]);
            }
        }

        if ($status == 'approved') {
            if ($productSubmissionStatus != 'on_review') {
                return response()->json([
                    'data' => 'failed update'
                ]);
            }

            $customerList = new customerList();
            $customerList->name = $productSubmissionName;
            $customerList->gender = $productSubmissionGender;
            $customerList->date_of_birth = $productSubmissionDateOfBirth;
            $customerList->identity_number = $productSubmissionIdentityNumber;
            $customerList->phone_number = $productSubmissionPhoneNumber;

            $customerList->save();
        }

        $productSubmission->submission_status = $status;
        $productSubmission->save();

        if ($productSubmission) {
            return response()->json([
                'data' => $productSubmission
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $productSubmission = ProductSubmission::findOrFail($id);

        if ($productSubmission->delete()) {
            return response()->json([
                'data' => 'success delete'
            ]);
        } else {
            return response()->json([
                'data' => 'failed delete'
            ]);
        }
    }
}
