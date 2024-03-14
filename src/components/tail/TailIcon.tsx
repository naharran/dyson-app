type TailIconProps = {
  src: string;
};
const TailIcon = ({ src }: TailIconProps) => {
  return (
    <div>
      <img src={src} />
    </div>
  );
};

export default TailIcon;
