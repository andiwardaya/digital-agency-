import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarIcon } from "@heroicons/react/solid";
import CardCarousel from "./CardCarousel";

function Testimonial() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">
          What our happy client say
        </h1>
        <p className="text-[#646670]">
          Things that make it the best place to start trading
        </p>
      </div>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
        className="flex flex-col items-center justify-center"
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <CardCarousel
            title={"Alexander"}
            imgProfile={"./assets/profile.jpg"}
            para={
              "Lorem Ipsum is simply dummy text of the printing and typesetting"
            }
          />
          <CardCarousel
            title={"Kingsman"}
            imgProfile={"./assets/profile.jpg"}
            para={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem "
            }
          />
          <CardCarousel
            title={"Garner"}
            imgProfile={"./assets/profile.jpg"}
            para={
              "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset "
            }
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
