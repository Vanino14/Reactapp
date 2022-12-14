import { CiCircleQuestion } from 'react-icons/ci';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <section className='h-screen overflow-hidden relative'>
      <div className='shadow-lg py-2 px-20 flex justify-between items-center'>
        <img src='../logo192.png' width={'50px'} alt='logo' />
        <p className='text-xs'>
          <CiCircleQuestion className='inline text-2xl mb-1' /> Pusat Bantuan
        </p>
      </div>
      <div className='relative z-10'>
        <div className='flex mx-auto py-5 justify-center gap-20'>
          <div className='w-[25rem] h-[85vh] px-8 py-8 overflow-auto relative'>
            <div className='flex items-center'>
              <div className='mr-2 w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
                <FaMapMarkerAlt className='text-xl text-white' />
              </div>
              <p className='text-xs text-slate-700 font-semibold'>
                Pendaftaran Sarana
              </p>
            </div>
            <div className='h-8 w-[0.18rem] bg-blue-500 absolute right-[21.91rem]'></div>
            <div className='flex items-center mt-8'>
              <div className='mr-2 w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
                <HiOutlineDocumentCheck className='text-xl text-white' />
              </div>
              <p className='text-xs text-slate-700 font-semibold'>Register</p>
            </div>
          </div>
          <div className='w-[25rem] bg-white h-[43vh] rounded-lg shadow-md px-8 py-4 overflow-auto '>
            <p className='font-semibold text-gray-700 mb-5 text-left'>
              Register Akun Olin
            </p>
            <form className='flex flex-col  items-center grid gap-2 '>
              <input
                type={'email'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Email *'
              />
              <input
                type={'password'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Kata Sandi *'
              />
              <input
                type={'password'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Konfirmasi Kata Sandi *'
              />
              <div className='flex items-start'>
                <input type={'checkbox'} className='mr-2 mt-1 p-10' />
                <p className='text-xs text-gray-700 text-left'>
                  Dengan membuat akun anda menyetujui{' '}
                  <span className='text-orange-400'>
                    Ketentuan penggunaan dan pemberitahuan Privasi
                  </span>{' '}
                  aplikasi OLIN
                </p>
              </div>
              <div className='flex gap-3'>
                <Link
                  to='/register'
                  className='border border-gray-300 text-xs p-2 text-gray-400 rounded-md w-full mt-2 hover:bg-slate-100 text-center'
                >
                  <button>Kembali</button>
                </Link>
                <button
                  className='bg-orange-400 text-xs p-2 text-white rounded-md mt-2 hover:bg-orange-500 w-full'
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
