export default function AboutContent() {
  const missionVision = [
    {
      title: "🚀 Our Mission",
      desc: "To democratize commerce by creating a platform where anyone can easily exchange products. We believe in building trust through transparency, security, and community engagement.",
    },
    {
      title: "🌍 Our Vision",
      desc: "To become the country most trusted marketplace where sustainable commerce thrives. We envision a future where every transaction creates value for both traders while building stronger communities.",
    },
  ];

  const team = [
    {
      name: "Nick Vila",
      role: "Front-End Developer",
      desc: "10+ years in UX Design",
      img: "src/assets/nick_profile.jpg",
    },
    {
      name: "Alex Takamizawa",
      role: "Database Developer",
      desc: "Former tech lead at major platforms",
      img: "src/assets/alex_profile.jpg",
    },
    {
      name: "Amador Baggerly",
      role: "Back-End Developer",
      desc: "10+ Years Back-End Infrastructure",
      img: "src/assets/amador_profile.jpg",
    },
    {
      name: "Eduardo Maldonado",
      role: "UI/UX Engineer",
      desc: "Software Developer",
      img: "src/assets/eduardo_profile.jpeg",
    },
  ];

  const values = [
    {
      title: "🤝 Trust",
      desc: "Building lasting relationships through transparency and reliability.",
    },
    {
      title: "♻️ Sustainability",
      desc: "Promoting circular economy and reducing waste through reuse.",
    },
    {
      title: "💡 Innovation",
      desc: "Continuously improving user experience through technology.",
    },
  ];

  return (
    <section className="mb-16 bg-gray-100 py-12 rounded-xl px-6">
      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {missionVision.map((item, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-sm bg-white">
            <h3 className="font-semibold mb-2 text-center">{item.title}</h3>
            <p className="text-gray-600 text-sm text-justify">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2 className="text-center text-xl font-bold mb-8">Meet Our Team</h2>
      <div className="grid md:grid-cols-4 gap-6 text-center mb-16">
        {team.map((member, index) => (
          <div key={index} className="p-6 border rounded-xl shadow-sm bg-white">
            <div
              className="w-28 h-28 mx-auto rounded-full bg-zinc-800 
                  overflow-hidden"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-xs text-gray-600 mt-2">{member.desc}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <h2 className="text-center text-xl font-bold mb-8">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((values, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm bg-white text-center"
          >
            <h3 className="font-semibold mb-2">{values.title}</h3>
            <p className="text-gray-600 text-sm ">{values.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
