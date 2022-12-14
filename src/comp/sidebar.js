import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { SlHandbag, SlBasket } from 'react-icons/sl';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar() {
  const location = useLocation().pathname;

  return (
    <div className='w-full bg-white h-full border-r-2 border-gray-300 relative flex items-center'>
      <img src='logo192.png' className='w-20 ml-5 absolute top-0' alt='logo' />
      <div className='px-6 w-full flex flex-col items-center grid gap-2'>
        <Link to={'/home'}>
          <div
            className={location === '/' ? 'list-navbar-active' : 'list-navbar bg-white-500 hover:bg-gray-200 py-2 pl-2'}
          >
            <AiOutlineHome className='mb-1 mr-4 text-lg inline' />
            <p className='font-semibold inline'>Homepage</p>
          </div>
        </Link>
        <Link to={'/sales'}>
          <div
            className={
              location === '/sales' ? 'list-navbar-active text-blue-400 bg-gray-300 py-2 pl-2 border-l-4 border-blue-300' : 'list-navbar bg-white-500 hover:bg-gray-200 py-2 pl-2'
            }
          >
            <SlHandbag className='mb-1 mr-4 text-lg inline' />
            <p className='font-semibold inline'>Sales</p>
          </div>
        </Link>
        <Link to={'/inventory'}>
          <div
            className={
              location === '/inventory' ? 'list-navbar-active text-blue-400 bg-gray-300 py-2 pl-2 border-l-4 border-blue-300' : 'list-navbar bg-white-500 hover:bg-gray-200 py-2 pl-2'
            }
          >
            <MdOutlineInventory2 className='mb-1 mr-4 text-lg inline' />
            <p className='font-semibold inline'>Inventory</p>
          </div>
        </Link>
        <Link to={'/purchase'}>
          <div
            className={
              location === '/purchase' ? 'list-navbar-active text-blue-400 bg-gray-300 py-2 pl-2 border-l-4 border-blue-300' : 'list-navbar bg-white-500 hover:bg-gray-200 py-2 pl-2'
            }
          >
            <SlBasket className='mb-1 mr-4 text-lg inline' />
            <p className='font-semibold inline'>Purchase</p>
          </div>
        </Link>
        <Link to={'/user'}>
          <div
            className={
              location === '/user' ? 'list-navbar-active text-blue-400 bg-gray-300 py-2 pl-2 border-l-4 border-blue-300' : 'list-navbar bg-white-500 hover:bg-gray-200 py-2 pl-2' 
            }
          >
            <BiUserCircle className='mb-1 mr-4 text-lg inline' />
            <p className='font-semibold inline'>User Management</p>
          </div>
        </Link>
        <Link to={'/'}>
          <div className={'list-navbar bg-white-500 hover:bg-gray-200 py-2 pl-2' }>
            <AiOutlineLogout className='mb-1 mr-4 text-lg inline' />
            <p className='font-semibold inline'>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
