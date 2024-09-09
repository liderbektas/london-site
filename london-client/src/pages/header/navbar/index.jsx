const Navbar = () => {
  return (
    <ul className="flex items-center justify-between gap-x-20">
      <li className="font-semibold transition duration-200 text-md hover:scale-110">
        <a href="#home">Home</a>
      </li>
      <li className="font-semibold transition duration-200 text-md hover:scale-110">
        <a href="#menu">Menu</a>
      </li>
      <li className="font-semibold transition duration-200 text-md hover:scale-110">
        <a href="#about">About</a>
      </li>
      <li className="font-semibold transition duration-200 text-md hover:scale-110">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
