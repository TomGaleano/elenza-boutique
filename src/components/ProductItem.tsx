import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";
import Button from "./Button";

const ProductItem = ({
  id,
  image,
  title,
  category,
  price,
}: {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}) => {
  return (
    <div className="w-[400px] flex flex-col gap-2 justify-center max-md:w-[300px] bg-white border border-brand-light-gray rounded-md hover:shadow-lg p-4">
      <Link
        to={`/product/${id}`}
        className="w-full h-[300px] max-md:h-[200px] overflow-hidden"
      >
        <img src={`/src/assets/${image}`} alt={title} />
      </Link>
      <Link
        to={`/product/${id}`}
        className="text-brand-charcoal text-center text-3xl tracking-[1.02px] max-md:text-2xl font-serif"
      >
        <h2>{title}</h2>
      </Link>
      <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
        {formatCategoryName(category)}{" "}
      </p>
      <p className="text-brand-gold text-2xl text-center font-bold font-sans max-md:text-xl">
        ${price}
      </p>
      <div className="w-full flex flex-col gap-1">
        <Link to={`/product/${id}`} className="w-full">
          <Button text="View product" />
        </Link>
      </div>
    </div>
  );
};
export default ProductItem;
