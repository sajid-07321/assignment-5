import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <footer className='w-full border border-gray-200 mt-50'>
            
            <div className='container mx-auto py-5 flex justify-between mt-15'> 
            <div>
            <img src={Logo} alt="" />
            <p className='text-[#64748B] mt-3'>Curated tools, technologies, and resources for developers building <br />
               modern software.</p>
            <ul className='flex gap-3.5 font-bold mt-7 text-[#475569]'>
                <li>GitHub</li>
                <li>Twitter</li>
                <li>Linkdin</li>
            </ul>
            </div>

            <div>
            <p className='font-bold text-[#475569]'>PRODUCT</p>
            <ul className='mt-4 text-[#64748B] space-y-2'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
            </div>

            <div>
            <p className='font-bold text-[#475569]'>COMPANY</p>
            <ul className='mt-4 text-[#64748B] space-y-2'>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
            </div>

            <div>
            <p className='font-bold text-[#475569]'>LEGAL</p>
            <ul className='mt-4 text-[#64748B] space-y-2'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
            </div>
            </div>

            {/* Last Footer */}
<div className="w-full mt-10">

    <div className="container mx-auto py-10 flex justify-between mt-5 mb-5 border-t border-gray-200">

        {/* Left */}
        <div>
            <p className="text-[#94A3B8]">
                © 2026 Dev Stack. All rights reserved.
            </p>
        </div>

        {/* Right */}
        <div>
            <ul className="flex gap-4 text-[#94A3B8]">
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>

    </div>

</div>
        </footer>
    );
};

export default Footer;