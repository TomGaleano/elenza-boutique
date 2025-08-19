import { Link } from "react-router-dom";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="banner w-full flex flex-col justify-end items-center max-sm:h-[550px] max-sm:gap-2">
      <h2 className="text-brand-charcoal text-center text-5xl font-serif tracking-[1.86px] leading-[60px] max-sm:text-4xl max-[400px]:text-3xl">
        Timeless Silhouettes, Modern Grace
      </h2>
      <h3 className="text-brand-charcoal text-3xl font-sans font-normal leading-[72px] tracking-[0.9px] max-sm:text-xl max-[400px]:text-lg">
        Discover our curated collection of contemporary luxury.
      </h3>
      <div className="flex justify-center items-center gap-3 pb-10 max-[400px]:flex-col max-[400px]:gap-1 w-[420px] max-sm:w-[350px] max-[400px]:w-[300px]">
        <Link to="/shop" className="w-full">
          <Button text="Shop Now" />
        </Link>
      </div>
    </div>
  );
};
export default Banner;
