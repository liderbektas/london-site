import { Link } from 'react-router-dom';
import Button from "../../../components/button";

const Content = () => {
  return (
    <div className="absolute top-[220px] w-full place-items-center">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="flex flex-col items-center justify-center text-center gap-y-6">
        </div>
        <div className="pt-96">
          <Button as={Link} to="/order/Kebab" size="xlarge" variant="primary">
             Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
