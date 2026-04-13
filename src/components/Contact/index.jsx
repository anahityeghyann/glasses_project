import logo from "/logo.png"

const socialLinks = [
  { name: "INSTAGRAM", href: "#" },
  { name: "TWITTER", href: "#" },
  { name: "EMAIL", href: "#" },
  { name: "MEDIUM", href: "#" },
]



const Contact = () => {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://framerusercontent.com/images/fWiQd13h8iBjSAQuk7JTB8euBE.png)` }}
      >
        <div className="absolute top-6 left-6">
          <img src={logo} alt="logo" className="w-16 h-auto" />
        </div>


        <div className="absolute flex flex-col px-16 right-8 top-1/2 -translate-y-1/2 gap-50 text-white">

          <div className="w-[650px] border border-white/40 rounded-lg p-8 bg-white/10">
            <h2 className="uppercase font-semibold tracking-widest mb-6">
              JOIN THE NEWSLETTER
            </h2>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-white text-gray-700 outline-none"
              />
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition">
                Subscribe
              </button>
            </div>
          </div>


          <div className="w-[650px]">
            <h2 className="text-sm font-bold tracking-widest mb-6">
              SOCIAL LINKS:
            </h2>

            <div className="space-y-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-between border-b-3 border-white pb-3"
                >
                  <span className="tracking-wide text-lg font-bold">
                    {link.name}
                  </span>

                  <span className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Contact;