import styled from "styled-components";
import FlowerTopBg from '../../assets/images/flower_top_bg.png';
import SuccessfulImage from '../../assets/images/sucssul-bottom-bg.png';
export const Wrapper = styled.div`
  .payment-success{
    background: #fff url(${FlowerTopBg}) no-repeat center -10px;
  }
  .payment-success-inner{
    background: url(${SuccessfulImage}) no-repeat center bottom;
  }
`;
