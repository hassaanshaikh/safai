// export default function Services() {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-20">
//       <h2 className="text-4xl font-bold mb-10 text-center">Our Services</h2>
//       <div className="grid md:grid-cols-4 gap-6">
//         {["Sofa","Carpet","Office","House"].map(s=>(
//           <div key={s} className="bg-white shadow p-6 rounded-xl">
//             <h3 className="font-semibold">{s} Cleaning</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

const services = [
  { title: "SOFA CLEANING", image: "sofa cleaning service professional", link: "#" },
  { title: "UPHOLSTERY CLEANING", image: "upholstery cleaning furniture", link: "#" },
  { title: "CARPET CLEANING", image: "carpet cleaning steam machine", link: "#" },
  { title: "MATTRESS CLEANING", image: "mattress cleaning sanitizing", link: "#" },
  { title: "CURTAIN CLEANING", image: "curtain cleaning service", link: "#" },
  // { title: "FLOOR CLEANING", image: "floor polishing cleaning marble", link: "#" },
  // { title: "WINDOW CLEANING", image: "window cleaning professional squeegee", link: "#" },
  // { title: "CHAIR CLEANING", image: "office chair cleaning service", link: "#" },
  // { title: "CAR CLEANING", image: "car interior detailing cleaning", link: "#" },
  // { title: "BLINDS CLEANING", image: "blinds cleaning venetian", link: "#" },
  // { title: "SOLAR PANEL CLEANING", image: "solar panel cleaning rooftop", link: "#" },
  // { title: "HOUSE CLEANING", image: "house cleaning maid service", link: "#" },
  // { title: "OFFICE CLEANING", image: "office cleaning commercial workspace", link: "#" },
  // { title: "WATER TANK CLEANING", image: "water tank cleaning sanitization", link: "#" },
]

export default function OurServices() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">OUR SERVICES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on providing standards, our professional & experienced Team. A level of quality control
            that ensures the work is done in order to the customer's satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`/.jpg?height=200&width=300&query=${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#f58220]/0 group-hover:bg-[#f58220]/20 transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#1a1a2e] mb-2">{service.title}</h3>
                <a href={service.link} className="text-[#f58220] text-sm font-medium hover:underline">
                  KNOW ABOUT OUR {service.title} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
