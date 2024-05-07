import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestCard from "./TestCard";
const CarouselTest = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive} showDots={true}>
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
      <TestCard />
    </Carousel>
  );
};

export default CarouselTest;
