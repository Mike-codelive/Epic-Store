import carbonNeutral from "../assets/shopping/carbon_neutral.svg";
import securePayment from "../assets/shopping/secure_payment.svg";
import shipping from "../assets/shopping/shipping.svg";
import localSupport from "../assets/shopping/local_support.svg";

export const BoxStylesCart = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around gap-8 px-2 md:px-8 mb-8">
      <div className="flex md:w-1/2">
        <img
          className="w-[calc(4px*16)] h-[calc(4px*16)] p-2 mr-4"
          src={carbonNeutral}
          alt="carbon neutral"
        />
        <div className="flex flex-col gap-1 text-[14px]">
          <p className="font-semibold">Carbon Neutrality</p>
          <p>Investing in programs that help the environment</p>
          <p className="cursor-pointer text-[#FF596F] font-semibold">
            Learn More
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2">
        <img
          className="w-[calc(4px*16)] h-[calc(4px*16)] p-2 mr-4"
          src={securePayment}
          alt="carbon neutral"
        />
        <div className="flex flex-col gap-1 text-[14px]">
          <p className="font-semibold">Secure Payments</p>
          <p>100% Secure Payment with 256-bit SSL encryption</p>
          <p className="cursor-pointer text-[#FF596F] font-semibold">
            Learn More
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2">
        <img
          className="w-[calc(4px*16)] h-[calc(4px*16)] p-2 mr-4"
          src={shipping}
          alt="carbon neutral"
        />
        <div className="flex flex-col gap-1 text-[14px]">
          <p className="font-semibold">Worldwide Shipping</p>
          <p>Available as standard or express delivery</p>
          <p className="cursor-pointer text-[#FF596F] font-semibold">
            Learn More
          </p>
        </div>
      </div>
      <div className="flex md:w-1/2">
        <img
          className="w-[calc(4px*16)] h-[calc(4px*16)] p-2 mr-4"
          src={localSupport}
          alt="carbon neutral"
        />
        <div className="flex flex-col gap-1 text-[14px]">
          <p className="font-semibold">Super Service</p>
          <p>Hassle-free returns and friendly customer support</p>
          <p className="cursor-pointer text-[#FF596F] font-semibold">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};
