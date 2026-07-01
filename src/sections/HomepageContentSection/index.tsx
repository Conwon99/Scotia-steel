import { brandName, business, citiesLabel } from "@/data/business";
import { categories } from "@/data/categories";

export const HomepageContentSection = () => {
  const brand = brandName();
  const cities = citiesLabel();

  return (
    <section id="service-information" className="box-border caret-transparent pt-[70px] pb-0 md:pt-[120px] md:pb-0 bg-transparent">
      <div className="box-border caret-transparent max-w-[1200px] mx-auto px-[15px] md:px-[30px]">
        <div className="box-border caret-transparent mb-12 md:mb-16">
          <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">Steel Building Services in {cities}</h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-8">{brand} supplies and constructs industrial, agricultural and bespoke steel buildings for customers across {cities} and nationwide across {business.region}. <a href="/contact" className="text-[#2563eb] hover:underline font-medium">Contact us to discuss your project</a>.</p>
        </div>
        {categories.map((category) => (
          <div key={category.slug} className="box-border caret-transparent mb-12 md:mb-16">
            <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-6 sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[43.2px]">{category.title}</h2>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl box-border caret-transparent leading-7 mb-6">{category.intro} <a href={`/${category.slug}`} className="text-[#2563eb] hover:underline font-medium">Learn more about {category.name.toLowerCase()}</a>.</p>
          </div>
        ))}
      </div>
    </section>
  );
};
