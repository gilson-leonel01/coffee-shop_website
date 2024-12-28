import React from "react";
import Img2 from "../../assets/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is known for its bold and intense flavor, delivering a rich and concentrated coffee experience. Its strong, distinctive taste makes it the perfect choice for those seeking a quick and energizing caffeine boost. Its smooth, creamy texture provides a full-bodied flavor that is ideal for enjoying on its own or serving as the base for other specialty coffee drinks.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Americano offers a smooth and light coffee flavor with a milder intensity. Its approachable taste makes it a great option for those who prefer a less strong caffeine experience. The combination of espresso and hot water creates a well-rounded, easy-drinking coffee that is both satisfying and versatile, perfect for adding milk or syrups",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Cappuccino delivers a perfect balance of rich espresso, creamy steamed milk, and frothy foam. The velvety texture and bold flavor profile make it a comforting and indulgent choice. Its equal parts of coffee, milk, and foam create a harmonious blend that’s ideal for those who enjoy a lighter coffee with a luxurious feel.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "Latte",
    description:
      "Latte is a creamy and mild coffee beverage, featuring a higher ratio of steamed milk and a delicate layer of foam. Its smooth, less bitter flavor makes it a popular choice among milk lovers. The customizable nature of lattes—especially with flavored syrups—makes them versatile and perfect for those seeking a comforting, indulgent coffee experience",
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img2,
    name: "Mocha",
    description:
      "Mocha blends rich espresso with steamed milk and chocolate for a decadent and sweet coffee treat. Its combination of flavors delivers a comforting, dessert-like experience, making it ideal for those who enjoy a touch of indulgence. Mocha offers the perfect balance of coffee and chocolate, creating a rich and satisfying flavor profile.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img2,
    name: "Flat White",
    description:
      "Flat White combines rich espresso with velvety steamed milk, offering a smooth and creamy coffee experience. Its microfoam provides a rich texture without being overly milky, creating a balanced coffee flavor with a hint of sweetness. Perfect for those who enjoy a milder alternative to lattes with a more intense coffee taste.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
  
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
