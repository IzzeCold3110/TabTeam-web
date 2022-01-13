import * as React from "react";

const SvgMail = (props) => (
  <svg
    viewBox="0 0 5000 5000"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    {...props}
  >
    <path
      style={{
        fill: "none",
      }}
      d="M0 0h5000v5000H0z"
    />
    <path
      d="M24.002 24H0V8.875l8.188 6.25-4.25 4.813.125.125 4.938-4.375 3 2.313 3-2.313 4.938 4.375.125-.125-4.25-4.813 8.188-6.25V24ZM23.5 8 12 16.75.5 8h23Z"
      style={{
        fill: "#bebebe",
        fillRule: "nonzero",
      }}
      transform="translate(37.565 -782.973) scale(205.186)"
    />
  </svg>
);

export default SvgMail;
