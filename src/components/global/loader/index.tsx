import React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  LoaderOne,
  LoaderTwo,
  LoaderThree,
  LoaderFour,
  LoaderFive,
  LoaderSix,
} from "../../../assets";

const rotate = keyframes`
  0% {
    transform: rotate(90deg);
  }
  10% {
    opacity: 0;
  }
  35% {
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    transform: rotate(0deg);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: rotate(-90deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1c1c1c;
`;

const Content = styled.div`
  width: 100px;
  height: 50px;
  font-size: 40px;
  text-align: center;
  transform-origin: bottom center;
  animation: ${rotate} 3s infinite;
  opacity: 0;
  img {
    width: 100px;
    height: 50px;
  }
`;

const Span = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  color: #ffb45c;
  font-weight: 800;
  display: inline;
  font-size: 32px;
  line-height: 80px;
  font-family: "Montreal";
  text-align: center;
`;

const icons = [
  LoaderOne,
  LoaderTwo,
  LoaderThree,
  LoaderFour,
  LoaderFive,
  LoaderSix,
];

const Loader = () => {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 8) {
        setCount(1); // Reset to 1 when it reaches 10
      } else {
        setCount((prevCount) => prevCount + 1); // Increment the count
      }
    }, 3000); // 3000 milliseconds (3 seconds)

    return () => clearInterval(interval);
  }, [count]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 100) {
        setCounter(0);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <Container>
      <Content>
        <img src={icons[count]} alt="loader-icon" />
      </Content>
      <Span>{counter}%</Span>
    </Container>
  );
};

export default Loader;
