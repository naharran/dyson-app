import Content from "./Content";
import Button from "../Button";
type HomeProps = {
  onClick: () => void;
};
const Home = ({ onClick }: HomeProps) => {
  return (
    <div className="flex flex-col justify-center mt-20">
      <Content />
      <div className="flex justify-center">
        <div className="flex justify-evenly w-9/12">
          <Button onClick={onClick} value="Get started" />
          <Button onClick={onClick} value="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Home;
