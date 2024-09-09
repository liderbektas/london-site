const Info = ({ title, info, extraInfo }) => {
  return (
    <div className="flex flex-col gap-y-6 text-center">
      <h3 className="text-2xl">{title}</h3>
      <div className="flex flex-col gap-y-2">
        <span>{info}</span>
        <span>{extraInfo}</span>
      </div>
    </div>
  );
};

export default Info;
