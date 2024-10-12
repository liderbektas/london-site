const UserSummary = ({ data }) => {
  return (
    <div className='mt-6 space-y-4'>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className='p-4'>
          <p className='text-sm md:text-lg'>
            <strong>
              {key.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}:
            </strong>{' '}
            <span className='text-gray-300'>{value || 'Unknown'}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserSummary;
