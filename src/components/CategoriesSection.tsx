import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-brand-charcoal text-5xl font-serif tracking-[1.56px] max-sm:text-4xl mb-12">
        Explore The Collections
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Womenswear"
          image="banner-new-2.png"
          link="Womenswear"
        />
        <CategoryItem
          categoryTitle="Accessories"
          image="leather-clutch.png"
          link="Accessories"
        />
        <CategoryItem
          categoryTitle="Handbags"
          image="handbag.png"
          link="Handbags"
        />
        <CategoryItem
          categoryTitle="Footwear"
          image="loafers.png"
          link="Footwear"
        />
        <CategoryItem
          categoryTitle="Jewellery"
          image="necklace.png"
          link="Jewellery"
        />
        <CategoryItem
          categoryTitle="Home Decor"
          image="home-decor.png"
          link="Home Decor"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
