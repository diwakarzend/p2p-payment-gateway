import React from "react";
import ErrorImage from "../../assets/images/error.png";
import { Wrapper } from "./style";
export default function PaymentError() {
  return (
    <>
      <Wrapper className="overflow-y-auto relative w-full inset-0 h-modal justify-center flex p-20">
        <div className="payment-success relative w-full max-w-[445px] h-[650px] bg-white rounded-lg drop-shadow-2xl border-t-4 border-t-red border-solid">
          <div className="payment-success-inner relative px-10 h-full py-52 flex items-center justify-center flex-col">
            <div className="relative flex justify-center mt-2 mb-8">
              <img src={ErrorImage} alt="Social Group" className="mr-2" />
            </div>
            <div className="relative  text-20 font-semibold text-center mb-8">
              Payment Failed
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
