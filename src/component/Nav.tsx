import Logo from "../assets/logo-text.png";


const Nav = () => {
    return (
        <nav className='flex justify-between container mx-auto py-5'>
          <div>
              <img src={Logo} alt="Logo" />
          </div>
          <div className="py-2">
          <ul className='flex gap-4 items-center'>
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </div>
          <div className="flex gap-4">
            <button>Sign in</button>
            <button className="bg-[#D91B7E] text-white rounded-3xl px-6 py-2">Sing up</button>
          </div>
        </nav>
    );
};

export default Nav;