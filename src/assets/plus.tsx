import {SVGProps} from "react";

export const PlusSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={11}
    width={11}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
      fill="#7C5DFA"
    />
  </svg>
);
