import * as React from "react";
const Arrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    viewBox="0 0 22 20"
    {...props}
  >
    <path fill="none" d="M0 0h20v20H0z" />
    <path d="m14 5-5 5 5 5-1 2-7-7 7-7z" />
  </svg>
);
export default Arrow;
