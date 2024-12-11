import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percent: number;
}

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f3f4f6;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 24px;
`;

const Progress = styled.div<{ percent: number }>`
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: #fc9570;
  border-radius: 10px;
  transition: width 0.3s ease;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percent);
  }, [percent]);

  return (
    <ProgressBarWrapper>
      <Progress percent={progress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
