import styled from "styled-components";
import { BackButton } from "../assets";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 40px;
  p {
    color: #f9fafb;
    font-family: "Montreal";
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    text-align: center;
  }
`;
export const ButtonBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Wrapper onClick={goBack}>
      <img src={BackButton} alt="back" />
      <p>Back</p>
    </Wrapper>
  );
};
