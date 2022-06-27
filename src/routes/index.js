import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import lazyLoad from "./lazyLoad";

// const PageNotFound = lazyLoad(lazy(() => import("../Pages/PageNotFound")));
const Payment = lazyLoad(lazy(() => import("../Pages/Payment/Payment")));
const PaymentType = lazyLoad(
  lazy(() => import("../Pages/PaymentType/PaymentType"))
);
const PaymentOptions = lazyLoad(
  lazy(() => import("../Pages/Payment/PaymentOption"))
);
const PaymentSuccess = lazyLoad(
  lazy(() => import("../Pages/PaymentSuccess/PaymentSuccess"))
);
const PaymentError = lazyLoad(lazy(() => import("../Pages/Error")));

function RouteComponent() {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/payment-type" element={<PaymentType />} />
      <Route path="/" element={<Payment />} />
      <Route path="/payment-options" element={<PaymentOptions />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-error" element={<PaymentError />} />
    </Routes>
  );
}

export default RouteComponent;
