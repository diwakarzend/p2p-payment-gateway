import styled from "styled-components";
import FlowerBg from "../../assets/images/flower_bg.png";
export const Wrapper = styled.div`
  .paymentType-page {
    .content {
      background: url(${FlowerBg}) no-repeat center calc(100% + 10px);
    }
  }
  .scan-outer {
    &:before {
      content: "";
      width: 36px;
      height: 36px;
      border-top: 1px solid #009fe3;
      border-left: 1px solid #009fe3;
      position: absolute;
      top: 0;
      left: 0;
    }
    &:after {
      content: "";
      width: 36px;
      height: 36px;
      border-top: 1px solid #009fe3;
      border-right: 1px solid #009fe3;
      position: absolute;
      top: 0;
      right: 0;
    }
    .scan-inner {
      img {
        max-width: 90%;
      }
      &:before {
        content: "";
        width: 36px;
        height: 36px;
        border-bottom: 1px solid #009fe3;
        border-left: 1px solid #009fe3;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      &:after {
        content: "";
        width: 36px;
        height: 36px;
        border-bottom: 1px solid #009fe3;
        border-right: 1px solid #009fe3;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  .pic {
    max-width: calc(100% - 20px);
    overflow: hidden;
    border-radius: 25px;
    top: 14px;
  }
`;
