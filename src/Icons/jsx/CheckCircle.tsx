import * as React from 'react';

function SvgCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM15.7198 10.6941C16.1032 10.2966 16.0917 9.66352 15.6941 9.28016C15.2966 8.8968 14.6635 8.90831 14.2802 9.30587L11.1429 12.5594L9.71985 11.0836C9.33648 10.6861 8.70342 10.6746 8.30587 11.0579C7.90831 11.4413 7.8968 12.0744 8.28016 12.4719L10.423 14.6941C10.6115 14.8896 10.8713 15 11.1429 15C11.4144 15 11.6742 14.8896 11.8627 14.6941L15.7198 10.6941Z" />
    </svg>
  );
}

export default SvgCheckCircle;
