const Desc = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-y-4 text-sm">
      <h3 className="text-lg">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Desc;
