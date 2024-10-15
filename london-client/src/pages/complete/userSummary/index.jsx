const UserSummary = ({ data }) => {
  const entries = Object.entries(data).map(([key, value]) => ({
    label: key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    value: value || 'Unknown'
  }));

  return (
    <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-1 md:space-y-2'>
      {entries.map(({ label, value }, index) => (
        <div key={index} className='flex flex-col md:flex-row md:items-center md:p-4'>
          <p className='text-md md:text-lg md:mr-2'>
            <strong>{label}:</strong>
          </p>
          <p className='text-white'>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default UserSummary;
