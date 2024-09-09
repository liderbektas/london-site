import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <Link to="/cart" className="cursor-pointer border-b pb-2">
        Cart (0)
      </Link>
    </>
  );
};
export default Card;
