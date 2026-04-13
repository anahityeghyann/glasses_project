import hero_background from "/hero-bg.jpg"
import logo from "/logo2.svg"


const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${hero_background})` }}
        className="h-screen bg-cover bg-center"
      >
        <div className='flex items-start p-10'>
          <img src={logo} className='w-[200px] mt-5' alt="" />

          <div className="flex w-full items-start justify-center text-white">
            <h1 className="text-6xl md:text-8xl flex flex-col font-bold leading-none uppercase text-left">
              Creating the
              <span>Future of</span>
              <span>Vision</span>
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-col text-white text-sm 
                        absolute top-10 right-10 space-y-4 mt-5">
          <div className="flex items-center justify-between w-48">
            <a href="#" className="hover:opacity-70">Products</a>
            <button className="border border-white px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
              CART (0)
            </button>
          </div>
          <a href="#" className="hover:opacity-70">About</a>
          <a href="#" className="hover:opacity-70">Events</a>
          <a href="#" className="hover:opacity-70">Upcoming</a>
          <a href="#" className="hover:opacity-70">Contact</a>
        </div>
        <div className="absolute bottom-10 left-10 max-w-sm text-xs tracking-widest uppercase text-white">
          <p>Make your smart glasses an</p>
          <p>extension of your personal style.</p>
          <p>Choose from a range of elegant</p>
          <p>lenses and frames.</p>
          <br />
          <p>Customize features to suit your</p>
          <p>preferences.</p>
        </div>

      </div>
    </div>
  );
};

export default Hero;