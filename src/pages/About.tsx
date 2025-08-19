const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 py-10">
      <h1 className="text-5xl font-serif text-brand-charcoal mb-8 text-center">About Elenza Boutique</h1>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <img src="/src/assets/banner.jpg" alt="Elenza Boutique Storefront" className="w-full h-auto rounded-md shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="font-sans text-brand-charcoal text-lg leading-relaxed mb-4">
            Elenza Boutique is a sanctuary of curated luxury, a destination for those who appreciate the art of dressing well. Founded on the principles of timeless elegance and contemporary design, we offer a meticulously selected collection of womenswear, accessories, and lifestyle objects that inspire and endure.
          </p>
          <p className="font-sans text-brand-charcoal text-lg leading-relaxed mb-4">
            Our philosophy is simple: to provide our clients with pieces that are not only beautiful but also beautifully made. We champion craftsmanship, quality, and a sense of personal style that transcends fleeting trends. Each item in our collection is chosen for its unique character and its ability to become a cherished part of your story.
          </p>
          <p className="font-sans text-brand-charcoal text-lg leading-relaxed">
            At Elenza, we believe that luxury is a language of its own, spoken through the finest materials, the most thoughtful details, and the most impeccable service. We invite you to explore our world and discover the essence of modern grace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
