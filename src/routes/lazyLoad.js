import React, { Suspense } from "react";

export const PageLoader = () => {
  return <div className="page-loader">Loading...</div>;
};

export default function lazyLoad(Component, LoaderComponent = PageLoader) {
  return function(props) {
    return (
      <Suspense fallback={ <LoaderComponent /> }>
        <Component { ...props } />
      </Suspense>
    );
  };
}
