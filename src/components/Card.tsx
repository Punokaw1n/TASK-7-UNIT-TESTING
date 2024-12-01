const experiences = [
  {
    image: "assets/experience/juara_2_resize.png",
    title: "Juara 2 WebDev",
    description:
      "Tepat pada Desember 2023 kami mengikuti kompetisi I/OFEST Universitas Tarumanegara dimana tim kami mendapatkan prestasi juara 2 tingkat nasional. Dengan mengangkat tema Health Care.",
    link: "experience",
  },
  {
    image: "assets/experience/finalis_2024_resize.png",
    title: "Finalist WebDev",
    description:
      "Tepat pada Desember 2023 kami mengikuti lomba Web Application yang diadakan oleh IT Telkom Purwokerto, dimana tim kami mendapatkan prestasi finalis 5 besar terbaik. Dengan mengangkat tema kesehatan mental.",
    link: "experience",
  },
  {
    image: "assets/experience/finalis_2023_resize.png",
    title: "Finalist WebDev",
    description:
      "Tepat pada November 2022 kami mengikuti lomba Web Application yang diadakan oleh IT Telkom Purwokerto, dimana tim kami mendapatkan prestasi finalis 5 besar terbaik. Dengan mengangkat tema lingkungan.",
    link: "experience",
  },
  {
    image: "assets/experience/juara_1.png",
    title: "Juara 1 WebDev",
    description:
      "Tepat pada September 2024 kami mengikuti lomba Web Application yang diadakan oleh Pekan IT dari Universitas Singaperbangsa Karawang (UNSIKA), dimana tim kami mendapatkan Juara 1 . Dengan mengangkat tema E-education dengan berfokus pada fitur tuna wicara dan tuna rungu.",
    link: "experience",
  },
  {
    image: "assets/experience/JDD_2024.png",
    title: "Jatim Developer Day 2024",
    description:
      "Tepat pada November 2024 saya menjadi panitia internal untuk mengurus acara JDD atau jatim developer day, yang bertepat di Universitas Muhammadiyah Malang inti acara ini adalah acara tahunan untuk mengembangkan bakat kita di bidang IT, acara tersebut di hadiri guest star speaker yaitu : Bapak Erico Darmawan Handoyo, dan Bapak Setia Budi dan di hadiri oleh kurang lebih 500++ peserta dari berbagai daerah di Jawa Timur maupun luar Jawa Timur.",
    link: "experience",
  },
  {
    image: "assets/experience/sby_dev_anniv.png",
    title: "Anniversary Surabaya Dev 10th",
    description:
      "Tepat pada Maret 2024 saya menjadi panitia internal untuk anniversary komunitas IT Surabaya Dev dan saya juga menjadi anggota internal di dalam komunitas tersebut, dalam acara tersebut surabaya dev mengundang guest star Bapak Sandhika Galih untuk menjadi pembicara pada acara tersebut dan peserta yang menghadiri main event tersebut 150++.",
    link: "experience",
  },
];

function ExperienceSection(): JSX.Element {
  return (
    <section id="experience" className="pt-40 pb-32 bg-slate-100">
      <div className="container">
        {/* Section Header */}
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h4 className="font-bold text-primary text-xl mb-2 uppercase">
              Experience
            </h4>
            <h2 className="font-bold text-dark text-4xl mb-4 sm:text-xl lg:text-5xl capitalize bg-gradient-to-r from-pink-600 via-secondary to-blue-500 text-transparent bg-clip-text mt-1 p-2 ">
              This Is My Experience
            </h2>
            <p className="font-bold text-md text-secondary md:text-lg">
              This is an experience in my life that I have done, whether later
              it contained competitions or organizational activities or my
              experiences while I was studying and living.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-wrap justify-center">
          {experiences.map((exp, index) => (
            <div key={index} className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img alt={exp.title} className="w-full" src={exp.image} />
                <div className="py-8 px-6">
                  <h3 className="mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                    {exp.title}
                  </h3>
                  <p className="font-medium text-base text-secondary mb-6">
                    {exp.description}
                  </p>
                  <a
                    className="font-medium text-sm text-white bg-blue-500 py-2 px-4 rounded-lg shadow-md hover:opacity-80 hover:scale-75"
                    href={exp.link}
                    rel="noopener noreferrer"
                  >
                    Lihat Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
