const Info = ({ title, info, extraInfo }) => {
  return (
    <div className="flex flex-col text-center gap-y-6">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex flex-col gap-y-2">
        <span>{info}</span>
        <span>{extraInfo}</span>
      </div>
    </div>
  );
};

export default Info;
