import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getVendorDetails, loginRequest } from "../../utils/api";
import { setPaymentObject } from "../../store/actions/payment";
import { setVendorDetails } from "../../store/actions/vendorDetails";
import { numberToWords } from "./constants";
import Netbanking from "../../assets/images/netbanking.png";
import { Wrapper } from "./style";
import {
  getAuthToken,
  getQueryParams,
  isAuthenticated,
} from "../../utils/common";
export default function PaymentOption() {
  const paymentObject = useSelector((state) => state?.payment);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuthToken();
  const dispatch = useDispatch();
  const [vendorList, setVendorList] = useState([]);
  useEffect(() => {
    const queryParams = getQueryParams(location?.search);
    console.log("queryParams = ", queryParams);
    const { username, password, tenantId, AMOUNT } = queryParams;
    loginRequest({ username, password, tenantId }).then((res) => {
      if (res?.data) {
        const isAuth = isAuthenticated(res);
        dispatch(
          setPaymentObject({
            ...paymentObject,
            amount: AMOUNT,
            totalAmount: AMOUNT,
          })
        );
        if (isAuth) {
          console.log("inner");
          const params = {
            pageNo: 1,
            pageSize: 10,
          };
          getVendorDetails(params).then((res) => {
            setVendorList(res?.data?.data);
          });
        }
      }
    });
  }, []);

  const onPaymentOptionClick = (data) => {
    dispatch(setVendorDetails(data || null));
    navigate("/payment-type");
  };

  return (
    <>
      <Wrapper className="overflow-y-auto relative w-full inset-0 h-modal justify-center flex p-20">
        <div className="payment-page relative px-14 pt-12 pb-60 w-full max-w-7xl h-auto bg-white rounded-lg drop-shadow-2xl">
          <h3 class=" text-20  font-semibold mb-12">Payment Option</h3>
          <div className="mt-12 relative">
            <div className="group-wrap">
              <div className="py-6 px-8 bg-bodyBg rounded-lg">
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
              <div className="mt-14">
                {vendorList.length > 0 &&
                  vendorList.map((details) => (
                    <div
                      onClick={() => onPaymentOptionClick(details)}
                      className="border-b border-grey/10 flex justify-between items-center py-6 cursor-pointer"
                    >
                      <div className="title text-15 ">{details.brandName}</div>
                      <div className="payment-type flex items-center">
                        <img
                          className="mr-5"
                          src={details?.image}
                          alt="Payment Option"
                        />
                        <svg
                          width="20"
                          fill="#302F2F"
                          viewBox="0 0 1792 1792"
                          height="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                        </svg>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
