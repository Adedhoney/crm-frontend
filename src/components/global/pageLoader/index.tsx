import React from "react";
import PrimarySpinner from "../../../assets/svg/PrimarySpinner.gif";

export default function Spinner({
  type = "primary",
  style,
}: {
  type?: "primary" | "alt";
  style?: React.CSSProperties;
}) {
  return type === "primary" ? (
    <img
      src={PrimarySpinner}
      alt=""
      style={{ width: "100px", height: "100px", ...style }}
    />
  ) : (
    <img
      src={PrimarySpinner}
      alt=""
      style={{ width: "100px", height: "100px", ...style }}
    />
  );
}
