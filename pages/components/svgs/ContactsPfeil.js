import * as React from "react";

const SvgContactsPfeil = (props) => (
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
      d="M1846.94 270.205 3329.46 1751.39l.62-.62 746.38 747.12-1447.33 1445.9 3.24 3.23-810.56 811.29c-8.47 8.48-17.18 16.6-26.11 24.36l-746.54-747.24c7.57-8.69 15.46-17.15 23.69-25.39l1508.34-1509.7-1483.21-1481.87 748.96-748.265Z"
      style={{
        fill: "#bebebe",
        fillRule: "nonzero",
      }}
      transform="translate(-305.189 -265.377) scale(1.09457)"
    />
  </svg>
);

export default SvgContactsPfeil;
