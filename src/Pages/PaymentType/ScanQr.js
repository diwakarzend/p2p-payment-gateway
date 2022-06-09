import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPtpsByMerchantId, verifyUtrRequest } from "../../utils/api";
import ScanImage from "../../assets/images/scan-image.png";
import SepratorImage from "../../assets/images/seprator.png";
import SocialGroupImage from "../../assets/images/icons-group.png";

export default function ScanQr() {
  const navigate = useNavigate();
  const [utrId, setUtrId] = useState("");
  const [qrdata, setQrdata] = useState(null);
  const [error, setError] = useState("");
  const vendorDetails = useSelector((state) => state?.vendorDetails?.data);
  useEffect(() => {
    const userUUID = "62a03898-1991-488c-bba1-711022d45ee4";
    getAllPtpsByMerchantId(userUUID).then((res) => {
      if (res?.data?.data) {
        const qrd = res?.data?.data.filter(
          (data) => data?.vendorId == vendorDetails?.id
        )[0];
        setQrdata(qrd);
      }
    });
  }, []);

  console.log("qrdata = ", qrdata);

  const onVerifyUtr = () => {
    if (utrId) {
      verifyUtrRequest(utrId).then((res) => {
        console.log("logging here", res?.data.data.verified);
        if (res?.data?.data?.verified == 'true') {
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
            <div className="text text-15 ">{qrdata?.vpaId || ""}</div>
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
            <span className="absolute top-2 left-0 right-0 text-center text-white text-15 font-bold">
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
