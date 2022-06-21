"use strict";(self.webpackChunkp2p_tailwind=self.webpackChunkp2p_tailwind||[]).push([[872],{872:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(1413),a=n(4942),o=n(8152),i=n(2791),u=n(6871),s=n(9434),l=n(4218),c=n(7337);var p=n(1005),v=n(9533),d=n(8406),_=n(184);function h(){var e=(0,s.v9)((function(e){return null===e||void 0===e?void 0:e.payment})),t=(0,u.s0)(),n=(0,u.TH)(),h=((0,d.bW)(),(0,s.I0)()),f=(0,i.useState)([]),m=(0,o.Z)(f,2),g=m[0],y=m[1];(0,i.useEffect)((function(){var t=(0,d.vl)(null===n||void 0===n?void 0:n.search);console.log("queryParams = ",t);var o=t.hash,i=t.apiKey,u=t.amount,s=t.clientId,p=t.orderId,v=t.URL,_=t.RETURN_URL;(0,l.Qb)((0,a.Z)({hash:o,apiKey:i,amount:u,clientId:s,orderId:p,URL:v,RETURN_URL:_},"amount",u)).then((function(t){if(null!==t&&void 0!==t&&t.data){h((0,c.F)((0,r.Z)((0,r.Z)({},e),{},{amount:u,totalAmount:u,clientId:s,orderId:p}))),console.log("inner");(0,d.$8)(t)&&(0,l.M0)({pageNo:1,pageSize:10}).then((function(e){var t;y(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data)}))}else window.location.href=_}))}),[]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(v.i,{className:"overflow-y-auto relative w-full inset-0 h-modal justify-center flex p-20",children:(0,_.jsxs)("div",{className:"payment-page relative px-14 pt-12 pb-60 w-full max-w-7xl h-auto bg-white rounded-lg drop-shadow-2xl",children:[(0,_.jsx)("h3",{class:" text-20  font-semibold mb-12",children:"Payment Option"}),(0,_.jsx)("div",{className:"mt-12 relative",children:(0,_.jsxs)("div",{className:"group-wrap",children:[(0,_.jsxs)("div",{className:"py-6 px-8 bg-bodyBg rounded-lg",children:[(0,_.jsxs)("div",{className:"title text-20  font-semibold",children:["\u20b9"," ",null!==e&&void 0!==e&&e.totalAmount?parseInt(null===e||void 0===e?void 0:e.totalAmount).toFixed(2):"-"]}),(0,_.jsx)("div",{className:"text text-10 ",children:null!==e&&void 0!==e&&e.totalAmount?(0,p.r)(parseInt(null===e||void 0===e?void 0:e.totalAmount)):"-"})]}),(0,_.jsx)("div",{className:"mt-14",children:g.length>0&&g.map((function(e){return(0,_.jsxs)("div",{onClick:function(){return h(function(){return{type:"SET_VENDOR_DETAILS",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}}(e||null)),void t("/payment-type")},className:"border-b border-grey/10 flex justify-between items-center py-6 cursor-pointer",children:[(0,_.jsx)("div",{className:"title text-15 ",children:e.brandName}),(0,_.jsxs)("div",{className:"payment-type flex items-center",children:[(0,_.jsx)("img",{className:"mr-5",src:null===e||void 0===e?void 0:e.image,alt:"Payment Option"}),(0,_.jsx)("svg",{width:"20",fill:"#302F2F",viewBox:"0 0 1792 1792",height:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"})})]})]})}))})]})})]})})})}},1005:function(e,t,n){n.d(t,{r:function(){return r}});var r=function e(t){for(var n="",r=0,a=[{value:1e7,str:"Crore"},{value:1e5,str:"Lakh"},{value:1e3,str:"Thousand"},{value:100,str:"Hundred"},{value:90,str:"Ninety"},{value:80,str:"Eighty"},{value:70,str:"Seventy"},{value:60,str:"Sixty"},{value:50,str:"Fifty"},{value:40,str:"Forty"},{value:30,str:"Thirty"},{value:20,str:"Twenty"},{value:19,str:"Nineteen"},{value:18,str:"Eighteen"},{value:17,str:"Seventeen"},{value:16,str:"Sixteen"},{value:15,str:"Fifteen"},{value:14,str:"Fourteen"},{value:13,str:"Thirteen"},{value:12,str:"Twelve"},{value:11,str:"Eleven"},{value:10,str:"Ten"},{value:9,str:"Nine"},{value:8,str:"Eight"},{value:7,str:"Seven"},{value:6,str:"Six"},{value:5,str:"Five"},{value:4,str:"Four"},{value:3,str:"Three"},{value:2,str:"Two"},{value:1,str:"One"}];r<a.length;r++){var o=a[r];if(t>=o.value){if(!(t<=99)){var i=Math.floor(t/o.value),u=t%o.value;return u>0?e(i)+" "+o.str+" "+e(u):e(i)+" "+o.str}n+=o.str,(t-=o.value)>0&&(n+=" ")}}return n}},9533:function(e,t,n){n.d(t,{i:function(){return u}});var r,a=n(168),o=n(6031),i=n(2543),u=o.ZP.div(r||(r=(0,a.Z)(["\n  .payment-page {\n    background: #fff url(",") no-repeat center calc(100% + 10px);\n    img {\n      width: 50px;\n    }\n  }\n"])),i)},7337:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"SET_PAYMENT_OBJECT",payload:e}}n.d(t,{F:function(){return r}})},4218:function(e,t,n){n.d(t,{NQ:function(){return m},M0:function(){return f},Qb:function(){return h},eZ:function(){return g}});var r=n(5861),a=n(5671),o=n(3144),i=n(7757),u=n.n(i),s=n(4569),l=n.n(s),c=n(8406),p={LOGIN_URL:"/api/authenticateByHash",GET_VENDOR_DETAILS:"/api/ptp/vendor-details",VERIFY_UTR_ID:"/api/merchant/verifyUTR",PTP_BY_MERCHANT_ID:"/api/ptp/ptp-details",PTP_AUTH_BY_HASH:"/api/authenticateByHash"},v="";v="https://vendor-apiservice.pay2mobiles.com:8443",console.log("apiBasePath11",v);var d=function(){function e(t,n,r){(0,a.Z)(this,e),this.successFn="function"===typeof n?n:function(){},this.errorFn="function"===typeof r?r:function(){},this.dispatch="function"===typeof t?t:function(){}}return(0,o.Z)(e,[{key:"instance",value:function(){var e={Authorization:(0,c.bW)(),"api-Authorization":(0,c.bW)("api-Authorization")},t=l().create({baseURL:"",headers:e});return t}},{key:"get",value:function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,o,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.prev=1,e.next=4,this.instance().get(v+t,n);case 4:return r=e.sent,a=r.data?r.data:null,o=r.headers?r.headers:null,this.successFn(a,o),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(1),e.t0&&e.t0.response&&401===e.t0.response.status&&console.log("no auth"),console.log("Error => ",e.t0),this.errorFn(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,o,i,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.prev=1,e.next=4,this.instance().post(v+t,n);case 4:return r=e.sent,a=r.data,o=void 0===a?{}:a,i=r.status,this.successFn(o,i),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(1),e.t0&&e.t0.response&&"401"==e.t0.response.status&&(0,c.Kv)();case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,o,i,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.prev=1,e.next=4,this.instance().put(v+t,n);case 4:return r=e.sent,a=r.data,o=void 0===a?{}:a,i=r.status,this.successFn(o,i),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(1),e.t0&&e.t0.response&&"401"==e.t0.response.status&&console.log("error 401");case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,o,i,s=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.prev=1,e.next=4,this.instance().delete(v+t,n);case 4:return r=e.sent,a=r.data,o=void 0===a?{}:a,i=r.status,this.successFn(o,i),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),_=new d((function(){}),(function(){}),(function(){})),h=function(e){var t={hash:e.hash,amount:e.amount,clientId:e.clientId,apiKey:e.apiKey,orderId:e.orderId,URL:e.URL,RETURN_URL:e.RETURN_URL};return _.post(p.LOGIN_URL,t)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _.get(p.GET_VENDOR_DETAILS,e)},m=function(e){return _.get("".concat(p.PTP_BY_MERCHANT_ID,"/").concat(e))},g=function(e,t,n){return console.log("merchantId",t),console.log("orderId",n),_.get("".concat(p.VERIFY_UTR_ID,"/").concat(e,"/").concat(t,"/").concat(n),{})}},8406:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$8:function(){return isAuthenticated},Kv:function(){return userLogout},bW:function(){return getAuthToken},vl:function(){return getQueryParams}});var _usr_local_var_www_p2p_payment_gateway_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8152),axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4569),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__),getStorage=function(e){return localStorage.getItem(e)},removeStorage=function(e){localStorage.removeItem(e)},setStorage=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(r){console.error("Err: Get Local Storage:",r)}};function getUser(){return getStorage("authToken")}function hasProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function isEmpty(e){var t=!1,n=typeof e;return t=(t=(t=(t=(t=(t=(t=t||!e)||"undefined"===n)||null===e)||"string"===n&&""===e.trim())||!1===e||0===e)||Array.isArray(e)&&0===e.length)||"object"===n&&0===Object.keys(e).length}var getSelectOptions=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",r=[];return isEmpty(e)||(Array.isArray(e)?e.forEach((function(e){var a=e[t],o=e[n];r.push({label:o,value:a})})):Object.keys(e).forEach((function(a){var o=e[a][t]||a,i=e[a][n]||e[a];r.push({label:i,value:o})}))),r},deepClone=function(e){return isEmpty(e)?null:JSON.parse(JSON.stringify(e))},getParams=function(e){var t={};return e.forEach((function(e){t[e.name]=e.value})),t},getOptionFromKey=function getOptionFromKey(key,textToReplace){if(isEmpty(key))return null;var _label=key.replace(eval("/"+textToReplace+"/g"),"");return _label=_label.split("_").join(" ").toLowerCase(),{value:key,label:_label}},setSelectedOptions=function(e,t){return t.filter((function(t){return t.value===e}))[0]},userLogout=function(){removeStorage("authToken"),removeStorage("loggedin")},paginator=function(e,t,n){var r=t||1,a=n||10,o=(r-1)*a,i=e.slice(o).slice(0,n),u=Math.ceil(e.length/a);return{page:r,per_page:a,pre_page:r-1?r-1:null,next_page:u>r?r+1:null,total:e.length,total_pages:u,data:i}};function currencyFormat(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!Number.isFinite(Number(e))||null===e||isEmpty(e)?"\u20b90":new Intl.NumberFormat("en-IN",{currency:"INR",style:"currency",useGrouping:!0,minimumFractionDigits:t,maximumFractionDigits:n}).format(e)}function getQueryParams(e){for(var t=e.split("?")[1].split("&"),n={},r=0;r<t.length;r++){var a=t[r].split("="),o=(0,_usr_local_var_www_p2p_payment_gateway_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(a,2),i=o[0],u=o[1];n[i]=u||!0}return n}function saveAuthToken(e,t){sessionStorage.setItem(e,"Bearer ".concat(t)),setAuthorizationToken(t)}function getAuthToken(e){return e?sessionStorage.getItem(e):sessionStorage.getItem("Authorization")}function setAuthorizationToken(e){e?axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.token=e:delete axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.token}function isAuthenticated(e){return e&&e.data?!(!e.data.id_token||!e.data.api_token)&&(saveAuthToken("Authorization",e.data.id_token),saveAuthToken("api-Authorization",e.data.api_token),!0):!isEmpty(getAuthToken())||void 0}},2543:function(e,t,n){e.exports=n.p+"static/media/flower_bg.0e8d3e0ecc94f167a049.png"}}]);
//# sourceMappingURL=872.860e4d30.chunk.js.map