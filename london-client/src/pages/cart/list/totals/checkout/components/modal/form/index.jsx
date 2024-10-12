const Form = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className='mb-6 text-2xl font-bold text-center text-black'>Checkout Form</h2>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block' htmlFor='first_name'>
            First Name
          </label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            value={formik.values.first_name}
            onChange={formik.handleChange}
            className='w-full px-3 py-2 border rounded'
            placeholder='Ali Baba'
            required
            autoFocus
          />
        </div>
        <div>
          <label className='block text-gray-700' htmlFor='last_name'>
            Last Name
          </label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            value={formik.values.last_name}
            onChange={formik.handleChange}
            className='w-full px-3 py-2 border rounded'
            placeholder='Kebab'
            required
          />
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700' htmlFor='road_name'>
          Road Name
        </label>
        <input
          type='text'
          id='road_name'
          name='road_name'
          value={formik.values.road_name}
          onChange={formik.handleChange}
          className='w-full px-3 py-2 border rounded'
          placeholder='330 Kilburn Lane'
          required
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-gray-700' htmlFor='apartment_name'>
            Apartment Name
          </label>
          <input
            type='text'
            id='apartment_name'
            name='apartment_name'
            value={formik.values.apartment_name}
            onChange={formik.handleChange}
            className='w-full px-3 py-2 border rounded'
            placeholder='Queens Park'
          />
        </div>
        <div>
          <label className='block text-gray-700' htmlFor='flat_number'>
            Flat Number
          </label>
          <input
            type='text'
            id='flat_number'
            name='flat_number'
            value={formik.values.flat_number}
            onChange={formik.handleChange}
            className='w-full px-3 py-2 border rounded'
            placeholder='1'
            required
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-black' htmlFor='phone_number'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone_number'
            name='phone_number'
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            className='w-full px-3 py-2 border rounded'
            placeholder='02089641014'
            required
          />
        </div>
        <div>
          <label className='block text-gray-700' htmlFor='post_code'>
            Post Code
          </label>
          <input
            type='tel'
            id='post_code'
            name='post_code'
            value={formik.values.post_code}
            onChange={formik.handleChange}
            className='w-full px-3 py-2 border rounded'
            placeholder='W9 3EF'
            required
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-full px-4 py-2 text-white bg-black rounded-md'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
