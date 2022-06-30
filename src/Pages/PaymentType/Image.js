import React from 'react';

import paytm from "../../assets/images/paytm.jpeg";
import phonePay from "../../assets/images/phone-pay.jpeg";
import gPay from "../../assets/images/g-pay.png";
import airtelPay from "../../assets/images/airtel-pay.png";
import mobiKwik from "../../assets/images/mobi-kwik.png";
import amazonPay from "../../assets/images/amazon-pay.png";
import freeCharge from "../../assets/images/free-charge.png";

export default function Image({brandName = ""}) {
    if(brandName === 'PAYTM') {
        return <img src={paytm} alt="" />
    }
    if(brandName === 'PHONEPE') {
        <img src={phonePay} alt="" />
    }
    if(brandName === 'GPAY') {
        return <img src={gPay} alt="" />
    }
    if(brandName === 'AIRTELPAY') {
        return <img src={airtelPay} alt="" />
    }
    if(brandName === 'MOBIKWIK') {
        return <img src={mobiKwik} alt="" />
    }
    if(brandName === 'AMAZONPAY') {
        return <img src={amazonPay} alt="" />
    }
    if(brandName === 'FREECHARGE') {
        return <img src={freeCharge} alt="" />
    }
    return <></>;
}