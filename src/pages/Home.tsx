import { Link } from "react-router-dom";

const Home = () => (
  <section id="home" className="pt-36">
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-10 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Halo 👋 I am,
            <span className="text-dark text-4xl font-bold bg-gradient-to-r from-pink-600 via-secondary to-blue-500 text-transparent bg-clip-text mt-1 lg:text-6xl">
              Fery Yulia Rahman
            </span>
          </h1>
          <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
            Mahasiswa |
            <span className="inline-block text-dark underline decoration-pink-500/40 duration-1000 transition-all hover:scale-75 -rotate-12 hover:rotate-0">
              Back-End Developer
            </span>
          </h2>
          <p className="font-medium text-secondary mb-10 leading-relaxed">
            "I am a student interested in the IT field, particularly programming
            in the field of Back-End development."
          </p>
          <div className="group w-[160px]">
            <Link
              to="/contact"
              className="inline-block text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-lg hover:shadow-xl hover:opacity-80 transition-all duration-1000 ease-in-out hover:bg-gradient-to-tr from-red-400 to to-primary group-hover:scale-75"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center mt-24 relative  translate-x-32">
          <img
            src="/assets/aku.jpg"
            alt="My Photo"
            className="w-1/2 rounded-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
