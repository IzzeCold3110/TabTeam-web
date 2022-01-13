import * as React from "react";

const SvgService = (props) => (
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
      d="M16 0H4C2.9 0 2 .899 2 2v16c0 1.1.9 2 2 2h12c1.101 0 2-.9 2-2V2c0-1.101-.899-2-2-2Zm.049 18.032h-12L4 2h12l.049 16.032Z"
      style={{
        fill: "#bebebe",
        fillRule: "nonzero",
      }}
      transform="matrix(42.41912 0 0 55.13584 -50.397 2479.897)"
    />
    <path
      d="M18 1H2C.899 1 0 1.9 0 3v11c0 1.1.882 2.178 1.961 2.393l4.372.875S2.57 19 5 19h10c2.43 0-1.334-1.732-1.334-1.732l4.373-.875C19.117 16.178 20 15.1 20 14V3c0-1.1-.9-2-2-2Zm0 13H2V3h16v11Z"
      style={{
        fill: "#bebebe",
        fillRule: "nonzero",
      }}
      transform="matrix(122.5631 0 0 122.954 795.172 1249.812)"
    />
    <path
      d="M19.754 15.631 18 13V4c0-1.102-.9-2-2-2H4c-1.101 0-2 .898-2 2v9L.246 15.631C0 16 0 16.213 0 16.5v.5c0 .5.5 1 .999 1h18.002c.499 0 .999-.5.999-1v-.5c0-.287 0-.5-.246-.869ZM7 16l.6-1h4.8l.6 1H7Zm9-4H4V4h12v8Z"
      style={{
        fill: "#bebebe",
        fillRule: "nonzero",
      }}
      transform="matrix(89.612 0 0 92.4643 3173.332 1962.877)"
    />
  </svg>
);

export default SvgService;
