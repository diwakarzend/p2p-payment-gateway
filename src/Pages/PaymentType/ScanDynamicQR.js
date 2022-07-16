import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getAllPtpsByMerchantId, getDynamicQRCodeRequest, getDynamicQRStatusRequest } from "../../utils/api";
import { isEmpty } from "../../utils/common";

export default function ScanDynamicQR({amount, orderId = "ORDER19239393"}) {
  const paymentAmount = useSelector((state) => state?.payment?.amount);
  const vendorDetails = useSelector((state) => state?.vendorDetails?.data);
  const navigate = useNavigate();
  const [base64, setBase64] = useState(null);

  console.log("vendorDetails = ", vendorDetails, paymentAmount);
  const checkStatus = () => {
    getDynamicQRStatusRequest(orderId).then(res => {
        if(res?.data?.data?.verified === "true") {
            navigate("/payment-success");
        }
    })
  }

  const changeQRCode = () => {
    if(orderId && amount > 0 && vendorDetails?.id) {
        getDynamicQRCodeRequest(amount, orderId, vendorDetails?.id).then(res => {
            console.log("getDynamicQRCodeRequest = ", res?.data?.data?.code)
            if(res?.data?.data?.code) {
                setBase64("data:image/png;base64," + res?.data?.data?.code);
            }
        })
    }
  }


  useEffect(() => {
    checkStatus();
    const interval = setInterval(() => checkStatus(), 10000);
    return () => {
        clearInterval(interval);
      }
  }, [])

  useEffect(() => {
    changeQRCode();
  }, [orderId, amount]);

  useEffect(() => {
    if(paymentAmount <= 0) {
        navigate("/payment-error");
    }
  }, [paymentAmount]);

// https://payment.digitpay.pro/payment-options?apiKey=3e5b6dbe4ce146559d599f6b2073528f&clientId=8cb076f0-1661-4994-8866-09927024c200&amount=100&orderId=107052334303643&hash=1468DCCDE1741704EB65DE8B27C6674F16597EE7BB9479D4B68C1D22F7D28A0E

  

  return (
    <>
      <div className="relative">
        <div className="group-wrap">
          <div className="py-5 mb-5 px-8 flex justify-center items-center">
            <button
                onClick={() => changeQRCode()}
                className="btn btn-primary bg-red rounded-lg text-white py-3 px-4 text-15 h-[50px] font-semibold"
            >
                CHANGE QR CODE
            </button>
          </div>
          <div className="scan-outer relative max-w-[300px] w-full mx-auto my-20 h-[300px] overflow-hidden">
            <div className="scan-inner relative w-full h-full flex items-center justify-center">
              <img src={base64} alt="Scanner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
