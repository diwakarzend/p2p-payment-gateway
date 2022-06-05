import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPaymentObject } from "../../store/actions/payment";
import { Wrapper } from "./style";

const classMap = {
  default:
    "bg-white w-40 hover:bg-gray-100 text-gray text-15 py-2 px-4 border border-grey rounded-lg shadow h-[50px]",
  active:
    "bg-blue w-40 hover:bg-gray-100 text-white text-15 py-2 px-4 border border-blue rounded-lg shadow h-[50px]",
};

export default function Payment() {
  const dispatch = useDispatch();
  const paymentObject = useSelector((state) => state?.payment);
  const [feeCharge, setFeeCharge] = useState(0);

  useEffect(() => {
    calculateFee();
  }, []);

  const inputChangeHandler = (value) => {
    const total = value + feeCharge;
    dispatch(
      setPaymentObject({ ...paymentObject, amount: value, totalAmount: total })
    );
  };

  const calculateFee = () => {
    let feeCharge = paymentObject?.fee || 0;
    if (paymentObject?.fee >= 1 && paymentObject?.amount >= 1) {
      feeCharge = (paymentObject?.amount * paymentObject?.fee) / 100;
    }
    setFeeCharge(feeCharge);
  };

  return (
    <>
      <Wrapper className="overflow-y-auto relative w-full inset-0 h-modal justify-center flex p-20">
        <div className="payment-page relative px-24 pt-20 pb-60 w-full max-w-4xl h-auto bg-white rounded-lg drop-shadow-2xl">
          <h3 class=" text-20  font-semibold mb-2">Make Payment</h3>
          <div className="mt-12 relative">
            <div className="form-group-wrap">
              <div class="form-group rounded-lg relative border border-grey border-solid shadow-sm">
                <input
                  id="mobileNumber"
                  type="number"
                  name="amount"
                  value={
                    paymentObject?.amount >= 1 ? paymentObject?.amount : ""
                  }
                  onChange={(e) => inputChangeHandler(e.target.value)}
                  class="block p-6 h-[50px] w-full text-25  appearance-none focus:outline-none bg-transparent relative z-10"
                />
                <label
                  for="mobileNumber"
                  class="absolute text-15 text-grey top-0 left-0 text-lg bg-white px-6 py-6 rounded-lg duration-300"
                >
                  Enter Amount
                </label>
              </div>
              {/* <div className="error-msg text-red text-left text-12 mt-2 flex">
                  Please enter Amount
                </div> */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => inputChangeHandler(1000)}
                  className={
                    paymentObject?.amount == 1000
                      ? classMap["active"]
                      : classMap["default"]
                  }
                >
                  &#8377; 1000
                </button>
                <button
                  onClick={() => inputChangeHandler(2000)}
                  className={
                    paymentObject?.amount == 2000
                      ? classMap["active"]
                      : classMap["default"]
                  }
                >
                  &#8377; 2000
                </button>
                <button
                  onClick={() => inputChangeHandler(3000)}
                  className={
                    paymentObject?.amount == 3000
                      ? classMap["active"]
                      : classMap["default"]
                  }
                >
                  &#8377; 3000
                </button>
                <button
                  onClick={() => inputChangeHandler(4000)}
                  className={
                    paymentObject?.amount == 4000
                      ? classMap["active"]
                      : classMap["default"]
                  }
                >
                  &#8377; 4000
                </button>
              </div>
              <div className="amount mt-14">
                <div className="border-b border-dotted border-grey flex justify-between pb-6 px-8">
                  <div className="title text-15 ">Amount</div>
                  <div className="value text-15  font-medium">
                    &#8377; {paymentObject?.amount || "-"}
                  </div>
                </div>
                <div className="border-b border-dotted border-grey flex justify-between py-6 px-8">
                  <div className="title text-15 ">
                    Fee ({paymentObject?.fee}%)
                  </div>
                  <div className="value text-15  font-medium">
                    &#8377; {feeCharge || "-"}
                  </div>
                </div>
                <div className="total-value flex justify-between py-6 px-8 bg-bodyBg">
                  <div className="title text-15  font-semibold">Total</div>
                  <div className="value text-15  font-medium">
                    &#8377; {paymentObject?.totalAmount || "-"}
                  </div>
                </div>
              </div>
            </div>
            <div className="action w-full left-0 flex mt-8">
              <Link
                to="/payment-options"
                className="btn btn-primary bg-red rounded-lg text-white py-3 px-4 text-15 h-[50px] font-semibold w-full flex justify-center items-center"
              >
                PAY NOW
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
