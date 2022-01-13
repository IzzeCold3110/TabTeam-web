import * as React from "react";

const SvgBurger = (props) => (
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
      d="M15.5 7h-11c-.275 0-.5.225-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm0-4h-11c-.275 0-.5.225-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z"
      style={{
        fill: "#bebebe",
        fillRule: "nonzero",
      }}
      transform="translate(-1619.33 28.401) scale(411.933)"
    />
  </svg>
);

export default SvgBurger;
