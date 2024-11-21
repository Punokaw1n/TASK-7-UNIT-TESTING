const AboutMe = () => (
  <section id="about" className="pt-36 pb-32">
    <div className="container">
      <h4 className="text-dark text-4xl font-bold bg-gradient-to-r from-pink-600  to-blue-500 text-transparent bg-clip-text mt-5 lg:text-6xl text-center">
        About Me
      </h4>

      <div className="flex flex-wrap">
        <div className="w-full px-8 mb-10 mt-28 lg:w-1/2">
          <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
            Hello 👋👋👋, My name is Fery!
          </h2>
          <p className="font-medium text-base text-secondary max-w-xl lg:text-xl">
            "I am a student at one of the private universities in Surabaya with
            a keen interest in the IT field. Particularly in web development, I
            am more interested in becoming a back-end developer."
          </p>
        </div>
        <div className="w-full px-10 mt-16 lg:w-1/2">
          <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
            Social Media
          </h3>
          <p className="font-medium text-base text-secondary mb-6 md:my-16 lg:text-lg">
            Follow my journey as I explore the intersections of technology and
            creativity. Let's connect and build something truly amazing
            together. Whether you're interested in collaborating on projects,
            sharing ideas, or simply staying updated on my latest work, I'd love
            to hear from you.
          </p>
          <div>
            <div className="flex items-center">
              {/* GitHub */}
              <a
                href="https://github.com/Punokaw1n"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary bg-primary hover:text-white"
              >
                <img src="assets/github.png" alt="" />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/fery_rahman12/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-white"
              >
                <img src="assets/instagram.png" alt="" />
              </a>
              {/* twitter */}
              <a
                href="#"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-white"
              >
                <img src="assets/twitter.png" alt="" />
              </a>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/feryyuliarahman/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-white"
              >
                <img src="assets/linkedin.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
