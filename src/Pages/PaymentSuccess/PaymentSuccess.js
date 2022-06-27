import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SuccessfulImage from "../../assets/images/successful.png";
import ShareImage from "../../assets/images/share.png";
import { Wrapper } from "./style";
import { numberToWords } from "../Payment/constants";
import { useNavigate } from "react-router-dom";
export default function PaymentSuccess() {
  const paymentObject = useSelector((state) => state?.payment);
  const navigate = useNavigate();
  useEffect(() => {

    setTimeout(() => {
      navigate("/payment-error");
    }, "3000")
    return () => {
      console.log("ddddd");
    // window.location = "https://malipohuduma.com/payment/status/inrpay/fraudmanage.xyz?status='failed'";
    
    
       // window.onpopstate = () => {
      //   console.log("ddddd");
      //   navigate(
      //     "https://malipohuduma.com/payment/status/inrpay/fraudmanage.xyz?status='failed'"
      //   );
      //   window.location =
      //     "https://malipohuduma.com/payment/status/inrpay/fraudmanage.xyz?status='failed'";
      // };
    };
  }, []);

  return (
    <>
      <Wrapper className="overflow-y-auto relative w-full inset-0 h-modal justify-center flex p-20">
        <div className="payment-success relative w-full max-w-[445px] h-[650px] bg-white rounded-lg drop-shadow-2xl border-t-4 border-t-red border-solid">
          <div className="payment-success-inner relative px-10 h-full pt-52">
            <div className="relative flex justify-center mt-2 mb-8">
              <img src={SuccessfulImage} alt="Social Group" className="mr-2" />
            </div>
            <div className="relative  text-20 font-semibold text-center mb-8">
              Payment Successful
            </div>
            <div className="relative  text-[30px] font-semibold text-center mb-2">
              &#8377;{" "}
              {paymentObject?.totalAmount
                ? parseInt(paymentObject?.totalAmount).toFixed(2)
                : "-"}
            </div>
            <div className="relative  text-15 text-center mb-8">
              {paymentObject?.totalAmount
                ? numberToWords(parseInt(paymentObject?.totalAmount))
                : "-"}
            </div>
            <div className="relative flex justify-center">
              <button class="bg-bodyBg  text-15 font-bold w-full max-w-[14rem] border-none rounded-xl flex justify-center items-center h-[40px]">
                <img src={ShareImage} alt="Social Group" className="mr-3" />{" "}
                SHARE
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
