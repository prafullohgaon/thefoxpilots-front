import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";




const HomeSectionCarosel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref to the carousel
  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} /> // Ensure each card has a unique key
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  // const slidePrev = () => {
    // Update the index and call the carousel method
  //   const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
  //   setActiveIndex(newIndex);
  //   carouselRef.current.slideTo(newIndex); // Use slideTo method to navigate
  // };

  // const slideNext = () => {
  //   // Update the index and call the carousel method
  //   const newIndex = activeIndex < items.length - 1 ? activeIndex + 1 : items.length - 1;
  //   setActiveIndex(newIndex);

  //   carouselRef.current.slideTo(newIndex); // Use slideTo method to navigate
  // };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
       
    <div className="border">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach ref to AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* Next Button */}
        {/* {activeIndex !== items.length-5 && <Button
          variant="contained"
          onClick={slideNext} // Use your custom slideNext function
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button> */}
{/* } */}
        {/* Previous Button */}
        {/* { activeIndex !==0 &&<Button
          variant="contained"
          onClick={slidePrev} // Use your custom slidePrev function
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>} */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
