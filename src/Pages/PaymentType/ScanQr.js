import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getAllPtpsByMerchantId, verifyUtrRequest } from "../../utils/api";
import ScanImage from "../../assets/images/scan-image.png";
import SepratorImage from "../../assets/images/seprator.png";
import SocialGroupImage from "../../assets/images/icons-group.png";

export default function ScanQr() {
  const paymentObject = useSelector((state) => state?.payment);
  const navigate = useNavigate();
  const [utrId, setUtrId] = useState("");
  const [qrdata, setQrdata] = useState(null);
  const [error, setError] = useState("");

  const vendorDetails = useSelector((state) => state?.vendorDetails?.data);

  console.log("statessssss", paymentObject);

  //const orderId = useSelector((state) => orderId));

  // const clientId = vendorDetails?.clientId;
  // console.log("client id",clientId);

  // const orderId = vendorDetails?.orderId;
  //  console.log("orderId",orderId);

  useEffect(() => {
    //  const queryParams = getQueryParams(location?.search);
    const userUUID = "62a03898-1991-488c-bba1-711022d45ee4";
    getAllPtpsByMerchantId(userUUID).then((res) => {
      if (res?.data?.data) {
        const qrd = res?.data?.data.filter(
          (data) => data?.vendorId == vendorDetails?.id
        )[0];
        setQrdata(qrd);
      } else {
        // window.location =  "https://malipohuduma.com/payment/status/inrpay/fraudmanage.xyz?status='failed'";
      }
    });
  }, []);

  console.log("qrdata = ", qrdata);

  const getReturnUrl = () => {
    let url = "";
    if(paymentObject?.clientId == '8cb076f0-1661-4994-8866-09927024c200') {
      url = "https://malipohuduma.com/payment/status/inrpay/fraudmanage.xyz?status='failed'";
    }
    if(paymentObject?.clientId == '10a710c6-f90c-11ec-b939-0242ac120002') {
      url = "https://dpboss888.com/server/api/inrpay/failed.php";
    }
    return url;
  }

  if (!qrdata) {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        
        window.location = getReturnUrl();
      } else {
        //alert( "This page is not reloaded");
      }
    }
    // window.paymentObject?.backurl
  }

  const onVerifyUtr = () => {
    if (utrId) {
      verifyUtrRequest(
        utrId,
        "62a03898-1991-488c-bba1-711022d45ee4",
        paymentObject?.orderId
      ).then((res) => {
        console.log("logging here", res?.data.data.verified);
        if (res?.data?.data?.verified == "true") {
          navigate("/payment-success");
        } else {
          setError("Invalid UTR Number");
        }
      });
    }
  };

  return (
    <>
      <div className="relative">
        <div className="group-wrap">
          <div className="py-5 mb-5 px-8 bg-bodyBg rounded-lg flex justify-between items-center">
            <div className="title text-15 text-grey/80">UPI ID</div>
            <CopyToClipboard
              text={qrdata?.vpaId}
              onCopy={() => console.log("copied.")}
            >
              <div title="Click to copy" className="text text-15 ">
                {qrdata?.vpaId || ""}
              </div>
            </CopyToClipboard>
          </div>
          <div className="scan-outer relative max-w-xs w-full mx-auto mb-8 h-80 overflow-hidden">
            <div className="scan-inner relative w-full h-full flex items-center justify-center">
              <img src={qrdata?.qrDetails} alt="Scanner" />
            </div>
          </div>
          <div className="flex justify-center text-13 text-red mb-6">
            Have you paid successfully?
          </div>
          <div className="relative flex justify-center text-13 mb-1">
            <img src={SepratorImage} alt="Seprator" />
            <span className="absolute top-2 left-0 right-0 text-center text-white text-15 font-bold text-payment">
              Paytm, PhonePe, GPay, BHIM & More
            </span>
          </div>
          <div className="relative flex justify-center text-13">
            <img src={SocialGroupImage} alt="Social Group" />
          </div>
          <div className="mt-10 relative mx-auto max-w-2xl">
            <div className="form-group-wrap">
              <div class="form-group rounded-lg relative bg-white border border-grey border-solid">
                <input
                  id="mobileNumber"
                  type="text"
                  name="utrId"
                  value={utrId}
                  onChange={(e) => setUtrId(e.target.value)}
                  class="block p-6 h-[50px] w-full text-15  appearance-none focus:outline-none bg-transparent relative z-10"
                />
                <label
                  for="mobileNumber"
                  class="absolute text-15 text-grey top-0 left-0 text-lg bg-white px-6 py-6 rounded-lg duration-300"
                >
                  UTR ID
                </label>
              </div>
              <div className="error text-14 text-red">{error}</div>
              <div className="error text-12 text-red mt-8 text-center">
                Important reminder: After completing the UPI transaction please
                backfill UTR No. If you do not backfill UTR, 100% of deposit
                will fail. Please be sure to be backfill.
              </div>
              <div className="action w-full left-0 flex mt-8">
                <button
                  onClick={() => onVerifyUtr()}
                  className="btn btn-primary bg-red rounded-lg text-white py-3 px-4 text-15 h-[50px] font-semibold w-full"
                >
                  VERIFY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
