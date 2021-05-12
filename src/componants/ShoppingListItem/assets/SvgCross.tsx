import * as React from "react";

function SvgCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 6.615 6.615"
      {...props}
    >
      <g strokeWidth={0.544} fill="none" stroke="#000">
        <path
          d="M.027 6.656L6.64.04M6.641 6.656L.027.04"
          transform="matrix(.945 0 0 .94505 .157 .143)"
        />
      </g>
    </svg>
  );
}

export default SvgCross;
