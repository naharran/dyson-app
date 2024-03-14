import Carousel from "react-grid-carousel";
import TestCard from "./TestCard";

const CarouselTest = () => {
  return (
    <Carousel cols={1} loop={true}>
      <Carousel.Item>
        <TestCard />
      </Carousel.Item>
      <Carousel.Item>
        <TestCard />
      </Carousel.Item>
      <Carousel.Item>
        <TestCard />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselTest;
