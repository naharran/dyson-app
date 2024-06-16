type ButtonProps = {
  value: string;
  onClick: () => void;
};
const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <div onClick={() => onClick()}>
      <button className="bg-black text-white px-4 py-2 rounded">{value}</button>
    </div>
  );
};

export default Button;
