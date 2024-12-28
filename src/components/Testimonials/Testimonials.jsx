import React from "react";
import Slider from "react-slick";


const TestimonialData = [
  {
    id: 1,
    name: "FDCA",
    text: "Since we started purchasing Coffee Café's roasted coffee, the quality of our coffee has improved significantly. Our customers have praised the rich flavor and unmistakable aroma. The impeccable service from Coffee Café ensures we always have fresh, high-quality beans for our discerning patrons. Highly recommended",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Hudson Federricó",
    text: "I am a fan of espresso and was looking for a supplier that could guarantee fresh, high-quality beans. I discovered Coffee Café and have never looked back. The aroma and flavor are unparalleled. I highly recommend Coffee Café to all coffee lovers seeking quality and enjoyment in every cup.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Robert Polyroes",
    text: "We were looking for a reliable supplier for liquid coffee in large volumes. Coffee Café surprised us with their consistent quality and superior flavor. Now, we are partners with Coffee Café, confident that our customers will always have the best coffee experience",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Hannah Paula",
    text: "I work in a café and test different coffee types daily. Since we started using Coffee Café’s Mocha, Latte, and Capuccino, our customers have noticed the difference and praised the refined flavor. Coffee Café is our go-to for high-quality coffee.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Coffee Lounge",
    text: "We were looking for a reliable coffee supplier for products like ground and liquid coffee. Coffee Café exceeded our expectations with exceptional espresso blends and personalized service. Today, our espresso stands out in the market, and we are grateful to Coffee Café for being part of our success!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
