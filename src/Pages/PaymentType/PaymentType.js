import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { numberToWords } from "../Payment/constants";
import videoImg from "../../assets/images/mobile-pay.jpeg";
import mobileBg from "../../assets/images/mobile-bg.png";
import ScanQr from "./ScanQr";
// import Phone from "./Phone";
// import VpaId from "./VpaId";
import { Wrapper } from "./style";

export default function PaymentType() {
  const paymentObject = useSelector((state) => state?.payment);
  const [activeTab, setActiveTab] = useState("tab1");
  const navigate = useNavigate();
  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      navigate("/payment-error");
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <>
      <Wrapper className="overflow-y-auto relative w-full inset-0 h-modal justify-center flex p-20">
        <div className="paymentType-page relative w-full max-w-[1200px] bg-white rounded-lg drop-shadow-2xl flex">
          <aside className="left w-full max-w-[235px] border-r border-grey/10">
            <h3 class="text-20  font-semibold mb-10 px-12 pt-10">
              Payment Option
            </h3>
            <ul className="nav">
              <li
                className={
                  activeTab === "tab1"
                    ? "active px-12 cursor-pointer  font-semibold text-15 bg-bodyBg py-5 border-r-8 border-blue"
                    : "px-12 py-5 cursor-pointer text-grey/80 text-15 border-r-8 border-grey/0"
                }
                onClick={handleTab1}
              >
                Scan QR Code
              </li>
              {/* <li
                  className={activeTab === "tab2" ? "active px-12 cursor-pointer  font-semibold text-15 bg-bodyBg py-5 border-r-8 border-blue" : "px-12 py-5 cursor-pointer text-grey/80 text-15 border-r-8 border-grey/0"}
                  onClick={handleTab2}
                  >
                  Phone
                  </li>
                  <li
                  className={activeTab === "tab3" ? "active px-12 cursor-pointer  font-semibold text-15 bg-bodyBg py-5 border-r-8 border-blue" : "px-12 py-5 cursor-pointer text-grey/80 text-15 border-r-8 border-grey/0"}
                  onClick={handleTab3}
                  >
                  VPA ID
                  </li> */}
            </ul>
          </aside>
          <div className="content w-full max-w-[573px] px-12 pt-10 pb-5">
            <div className="flex mb-4 justify-between items-center">
              <div className="left">
                <div className="title text-20  font-semibold">
                  &#8377;{" "}
                  {paymentObject?.totalAmount
                    ? parseInt(paymentObject?.totalAmount).toFixed(2)
                    : "-"}
                </div>
                <div className="text text-10 ">
                  {paymentObject?.totalAmount
                    ? numberToWords(parseInt(paymentObject?.totalAmount))
                    : "-"}
                </div>
              </div>
              <div className="right">
                <div className="timer text text-16 text-grey/80">
                  <Countdown date={Date.now() + 899000} renderer={renderer} />
                </div>
              </div>
            </div>
            <div className="innerContent">
              <ScanQr orderId={paymentObject?.orderId} />
              {/* {activeTab === "tab1" ? (
                <ScanQr />
              ) : activeTab === "tab2" ? (
                <Phone />
              ) : (
                <VpaId />
              )} */}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="mobile-pay relative max-w-[260px]">
              <img src={mobileBg} alt="" />
              <div className="pic absolute left-[10px] top-[14px] rounded-[25px]">
                <img src={videoImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
