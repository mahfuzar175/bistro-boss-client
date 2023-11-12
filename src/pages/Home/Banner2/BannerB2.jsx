import banner2 from '../../../assets/home/chef-service.jpg';

const BannerB2 = () => {
    return (
        <div className='relative mb-16'>
            <img src={banner2} alt="" className='w-full h-auto' />
            <div className='text-center border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 text-black'>
                <h1 className='text-[10px] md:text-lg lg:text-4xl mb-4 font-serif'>Bistro Boss</h1>
                <p className='text-[6px] md:text-sm lg:text-base font-serif'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default BannerB2;
