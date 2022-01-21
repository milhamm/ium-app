import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { RiArrowRightSFill } from "react-icons/ri";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDirectionFill } from "react-icons/ri";
import { detailStoreMock } from "../../mocks/data";
import Menu from "../../components/Menu";

const overview = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
      <main className='container mt-5 flex gap-4 mobile:flex-col laptop:flex-row laptop:mb-5'>
        <section className='flex flex-col grow gap-5'>
          {/* Menu */}
          <div className='flex justify-between items-centered mb-2'>
            <h3 className='font-semibold text-lg'>Menu</h3>
            <a href='' className='text-red-500 flex items-center'>
              See all menus
              <RiArrowRightSFill />
            </a>
          </div>
          <div className='grid gap-4 mobile:grid-cols-2 desktop:grid-cols-3'>
            {detailStoreMock.data?.menus.map((menu, index) => {
              return <Menu menu={menu} key={index} />;
            })}
          </div>
          <div>
            <h3 className='font-semibold text-lg mb-2'>Average Cost</h3>
            <p>Rp 250.000,00- for two people (approx.)</p>
          </div>
          <div className=''>
            <h3 className='font-semibold text-lg mb-2'>More Info</h3>
            <div className='grid grid-cols-2'>
              <div className='flex items-center gap-2'>
                <BiCheckCircle className='fill-current text-green-500' />
                <p>Smoking</p>
              </div>
              <div className='flex items-center gap-2'>
                <BiXCircle className='fill-current text-red-500' />
                <p>Beer</p>
              </div>
              <div className='flex items-center gap-2'>
                <BiXCircle className='fill-current text-red-500' />
                <p>Outside food</p>
              </div>
            </div>
          </div>
        </section>
        <aside className='flex flex-col h-fit gap-5 border rounded-lg p-5 shadow shadow-gray-300 mobile:mb-5'>
          <div className='flex flex-col mobile:text-sm'>
            <p className='font-semibold text-lg mobile:text-base'>Call</p>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
          </div>
          <div className='mobile:text-sm'>
            <p className='font-semibold text-lg mobile:text-base'>Direction</p>
            <div>Maps</div>
            <p>Jl. P.H.H. Mustofa No. 31, Surapati, Bandung</p>
            <div className='flex gap-4 mt-4'>
              <button className='flex justify-center items-center gap-2 border border-teal-400 py-1 rounded-lg active:border-transparent active:bg-teal-400'>
                <p className='text-teal-400 active:text-white flex items-center px-2 gap-1'>
                  <MdOutlineContentCopy />
                  Copy
                </p>
              </button>
              <button className='flex justify-center items-center gap-2 border border-red-500 py-1 rounded-lg active:border-transparent active:bg-red-500 active:text-white'>
                <p className='text-red-500 active:text-white flex items-center px-2 gap-1'>
                  <RiDirectionFill /> Direction
                </p>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default overview;
