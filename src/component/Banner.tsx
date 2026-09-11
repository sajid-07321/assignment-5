import Hero from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <header className='w-full'>

          <div className='max-w-7xl mx-auto px-4 py-20'>

            <div className='flex items-center justify-between'>
                 {/* Left Side */}

            <div className='max-w-xl'>
                <h2 className='text-6xl font-bold'> Build Your Ideal <br />
                
                <span className=' bg-[linear-gradient(90deg,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent'>Development Stack</span>

                </h2>
                    
                    <p className='text-[#475569] text-[20px]  mt-10 mb-10 '>Explore frontend, backend, database, and tooling options,
                       compare them side by side, and put together the stack that fits your
                       next project.</p>
                

            {/* Button */}

                <div className='flex gap-4 mt-8'>

                <button className='text-white px-5 py-3 rounded-[10px] bg-[linear-gradient(90deg,#F97316_0%,#EC4899_100%)]'>Explore Technologies</button>
                <button className='bg-white text-[#374151] px-11 py-3 rounded-[10px] border border-[#E5E7EB]'>Lwarn More</button> 

                </div>      
            </div>

            {/* Right Side */}
            <div>
                <img src={Hero} alt="" />
            </div>
            </div>
            </div> 
        </header>
    );
};

export default Banner;