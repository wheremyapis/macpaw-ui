import * as React from 'react';

function SvgCopyIcon(props) {
    return (<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="20" viewBox="0 0 18 20" {...props}>
    <defs>
      <path id="24_copy-a" d="M18,2 C19.5976809,2 20.9036609,3.24891996 20.9949073,4.82372721 L21,5 L21,15 C21,16.5976809 19.75108,17.9036609 18.1762728,17.9949073 L18,18 L17,18 L17,19 C17,20.5976809 15.75108,21.9036609 14.1762728,21.9949073 L14,22 L6,22 C4.34314575,22 3,20.6568542 3,19 L3,19 L3,9 C3,7.34314575 4.34314575,6 6,6 L6,6 L7,6 L7,5 C7,3.40231912 8.24891996,2.09633912 9.82372721,2.00509269 L10,2 L18,2 Z M14,8 L6,8 C5.44771525,8 5,8.44771525 5,9 L5,9 L5,19 C5,19.5522847 5.44771525,20 6,20 L6,20 L14,20 C14.5522847,20 15,19.5522847 15,19 L15,19 L15,9 C15,8.44771525 14.5522847,8 14,8 L14,8 Z M18,4 L10,4 C9.48716416,4 9.06449284,4.38604019 9.00672773,4.88337887 L9,5 L9,6 L14,6 C15.5976809,6 16.9036609,7.24891996 16.9949073,8.82372721 L17,9 L17,16 L18,16 C18.5128358,16 18.9355072,15.6139598 18.9932723,15.1166211 L19,15 L19,5 C19,4.48716416 18.6139598,4.06449284 18.1166211,4.00672773 L18,4 Z"/>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-3 -2)">
      <rect width="24" height="24"/>
      <mask id="24_copy-b" fill="#fff">
        <use xlinkHref="#24_copy-a"/>
      </mask>
      <use fill="#000" fill-rule="nonzero" xlinkHref="#24_copy-a"/>
      <g fill="#000" mask="url(#24_copy-b)">
        <rect width="24" height="24"/>
      </g>
    </g>
  </svg>)
}

export default SvgCopyIcon;
