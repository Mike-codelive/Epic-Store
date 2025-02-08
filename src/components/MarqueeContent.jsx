import { Link } from "react-router-dom";

export const MarqueeContent = () => {
  return (
    <div className="flex items-center item text-[14px]">
      <p>Original art on awesome stuff.</p>
      <Link className="underline font-semibold ml-2" to="/download">
        Download the Epic Store App
      </Link>
      <span className="mx-5">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 9L4.45556 8.16199C6.07546 7.85731 7.34259 6.59017 7.64727 4.97028L8.48528 0.514719L9.3233 4.97028C9.62797 6.59017 10.8951 7.85731 12.515 8.16199L16.9706 9L12.515 9.83801C10.8951 10.1427 9.62797 11.4098 9.32329 13.0297L8.48528 17.4853L7.64727 13.0297C7.34259 11.4098 6.07545 10.1427 4.45556 9.83801L0 9Z"
            fill="#19124F"
          ></path>
        </svg>
      </span>
    </div>
  );
};
