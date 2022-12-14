import { BsQuestionCircle } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { TiDocumentText } from 'react-icons/ti'
import { MdOutlineArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import ChartSales from '../comp/chart-sales'
import PieChart from '../comp/pie-chart'
import Nav from 'react-bootstrap/Nav';

export default function Sales() {
    return (<> 
    <Nav className="bg-white p-2 w-full z-10">
    <div className='flex items-center justify-end px-5 gap-3'>
        <BsQuestionCircle className='text-xl mb-1' />
        <AiOutlineMail className='text-2xl mb-1' />
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        <div className='font-[500]'>
            <p className=' text-gray-700'>Roman Dimitri</p>
            <p className='text-gray-700 text-xs mt-0'>owner</p>
        </div>
    </div>
</Nav>
<div className='py-7 px-5'>
    <div>
        <h1 className='text-gray-700 font-bold text-xl mb-2'>Order Statistic</h1>
        <div className='w-100 grid grid-cols-1 gap-3'>
            <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                <div>
                    <p className='font-bold text-xs text-gray-700'>Total Selling</p>
                    <p className='font-bold text-2xl text-gray-700 mt-3'>890</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <IoIosArrowUp className='text-xl text-sky-500' />
                    <p className='font-bold text-sky-500'>20.5%</p>
                </div>
            </div>
        </div>
    </div>

    <div className='w-full mt-5 grid grid-cols-3 gap-3'>
        <div className='col-span-2 bg-white border-2 border-slate-200 gap-5 rounded-lg px-5 py-3'>
            <div className='flex justify-between items-end'>
                <h1 className='font-bold text-gray-700 text-xl'>Sales</h1>
                <BsThreeDotsVertical className='text-lg text-gray-700' />
            </div>
            <div className='bg-black p-1 w-16 flex mx-auto rounded-md items-center'>
                <FiArrowUpRight className='text-green-600 text-sm' />
                <p className='text-white text-xs ml-1'>23.5%</p>
            </div>
            <div className='grid grid-cols-12 gap-3 mt-2'>
                <ChartSales />
            </div>
            <div className='flex justify-between mt-10'>
                <div className='flex justify-start'>
                    <div className='text-center'>
                        <p className='text-gray-700 text-sm font-semibold'>Target</p>

                        <p className='text-green-400 text-xs font-semibold'> <MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />231</p>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className='text-center'>
                        <p className='text-gray-700 text-sm font-semibold'>Last Week</p>
                        <p className='text-red-400 text-xs font-semibold'><MdArrowDropDown className='text-red-400 mx-auto text-lg inline' />232</p>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className='text-center'>
                        <p className='text-gray-700 text-sm font-semibold'>Last Month</p>
                        <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />2314</p>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className='text-center'>
                        <p className='text-gray-700 text-sm font-semibold'>This Year</p>
                        <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />8126</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-rows-1 gap-2'>
            <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                <GiProgression className='text-5xl text-blue-500' />
                <div className='text-right'>
                    <p className='font-bold text-xs text-gray-700'>Total Transaksi</p>
                    <p className='text-lg text-gray-700 font-bold'>Rp. 80.000.000</p>
                </div>
            </div>
        </div>

    </div>
    <div className='w-full mt-5 grid grid-cols-3 gap-3'>
                <div className='col-span-2 bg-white border-2 border-slate-200 gap-5 rounded-lg px-5 py-3'>
                        <div className='mb-5'>
                            <p className='font-bold text-lg text-gray-700'>Persentase Penjualan</p>
                            <PieChart/>
                        </div>
                    </div>
                    
            <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                <TiDocumentText className='text-5xl text-blue-500' />
                <div className='text-right'>
                    <p className='font-bold text-xs text-gray-700'>Sales</p>
                    <p className='text-lg text-gray-700 font-bold'>289</p>
                </div>
            </div>
                </div>
        </div></>
)
}