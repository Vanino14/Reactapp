import { CiCircleQuestion } from 'react-icons/ci';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineDocumentCheck } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export default function PreRegister() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/register/next');
  };

  return (
    <section className='h-screen overflow-hidden relative'>
      <div className='shadow-lg py-2 px-20 flex justify-between items-center'>
        <img src='./logo192.png' width={'50px'} alt='logo' />
        <p className='text-xs'>
          <CiCircleQuestion className='inline text-2xl mb-1' /> Pusat Bantuan
        </p>
      </div>
      <div className='relative z-10'>
        <div className='flex mx-auto border py-5 justify-center gap-20'>
          <div className='w-[25rem] h-[85vh] px-8 py-8 overflow-auto relative'>
            <div className='flex items-center'>
              <div className='mr-2 w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center'>
                <FaMapMarkerAlt className='text-xl text-white' />
              </div>
              <p className='text-xs text-slate-700 font-semibold'>
                Pendaftaran Sarana
              </p>
            </div>
            <div className='h-8 w-[0.18rem] bg-gray-300 absolute right-[21.91rem]'></div>
            <div className='flex items-center mt-8'>
              <div className='mr-2 w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center'>
                <HiOutlineDocumentCheck className='text-xl text-white' />
              </div>
              <p className='text-xs text-slate-700 font-semibold'>Register</p>
            </div>
          </div>
          <div className='w-[25rem] bg-white h-[85vh] rounded-lg shadow-md px-8 py-4 overflow-auto'>
            <p className='font-semibold text-gray-700 mb-5 text-left'>
              Input Data Perusahaan
            </p>
            <form className='flex flex-col  items-center grid gap-3 '>
              <select className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option>Bidang Usaha *</option>
              </select>
              <input
                type={'text'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Nama perusahaan *'
              />
              <input
                type={'text'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='NPWP Perusahaan *'
              />
              <input
                type={'text'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Alamat Sesuai NPWP *'
              />
              <select className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option>Provinsi *</option>
              </select>
              <select className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option>Kota/Kabupaten *</option>
              </select>
              <select className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option>Kecamatan *</option>
              </select>
              <input
                type={'text'}
                className='input-control bg-gray-30 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Kode Pos *'
              />
              <div className='flex flex-col gap-0'>
              <p className='text-xs font-bold text-left'>Upload Kelengkapan Data</p>
              <span className='bg-sky-600 text-xs text-white font-semibold w-full block py-1 px-2 rounded-t-md text-left'>
                <HiOutlineDocumentText className='mb-1 inline text-base ' /> NIB
              </span>
              </div>
              <label>
                <div className='flex flex-col justify-center items-center pt-2 pb-5 rounded-b-md cursor-pointer hover:shadow-md'>
                  <FaCloudUploadAlt className='text-2xl' />
                  <p className='text-xs font-semibold'>Upload NIB Valid</p>
                </div>
                <input type={'file'} className='hidden' />
              </label>
            </form>
            <button
              className='bg-orange-400 text-xs p-2 text-white rounded-md w-full mt-2 hover:bg-orange-500'
              onClick={handleSubmit}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
