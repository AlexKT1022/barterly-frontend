import { Link } from 'react-router';

const Homepage = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-12'>
      <div className='flex flex-col justify-center items-center h-200'>
        <h1 className='font-bold text-center text-base/15 mb-5'>
          Trade goods and services directly
        </h1>
        <h2 className='text-center mb-5'>
          Barterly is a platform for swapping items and skills without the use
          of money. Start trading today!
        </h2>
        <Link to=''>
          <button className='px-4 h-10 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm mb-5'>
            Get Started
          </button>
        </Link>
        <div className='mb-10'>
          <form className='flex flex-col justify-center items-center'>
            <input
              className='md:w-lg h-10 rounded-md border-1 border-zinc-400 mr-3'
              placeholder='Search for items or services...'
              id='home-search'
            ></input>
            <Link to=''>
              <button className='px-8 h-10 mt-4 rounded-md bg-zinc-800 text-white transition-colors duration-300 hover:bg-zinc-500 shadow-sm'>
                Search
              </button>
            </Link>
          </form>
        </div>
        <div className='grid grid-cols-4 gap-15'>
          <Link
            to=''
            className='p-5 shadow-md hover:shadow-xl transition-all duration-300'
          >
            <div className='flex flex-col justify-center items-center'>
              <img src='src\assets\electronics.png'></img>
              <p>Electronics</p>
            </div>
          </Link>
          <Link
            to=''
            className='p-5 shadow-md hover:shadow-xl transition-all duration-300'
          >
            <div className='flex flex-col justify-center items-center'>
              <img src='src\assets\clothing.png'></img>
              <p>Clothing</p>
            </div>
          </Link>
          <Link
            to=''
            className='p-5 shadow-md hover:shadow-xl transition-all duration-300'
          >
            <div className='flex flex-col justify-center items-center'>
              <img src='src\assets\automotive.png'></img>
              <p>Automotive</p>
            </div>
          </Link>
          <Link
            to=''
            className='p-5 shadow-md hover:shadow-xl transition-all duration-300'
          >
            <div className='flex flex-col justify-center items-center'>
              <img src='src\assets\services.png'></img>
              <p>Services</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
