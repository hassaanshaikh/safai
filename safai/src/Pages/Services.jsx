import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s88 from "../assets/s88.png";
import s9 from "../assets/s9.png";

const services = [
  { title: "HOSPITAL CLEANING", image: s1, link: "#" },
  { title: "SCHOOL CLEANING", image: s2, link: "#" },
  { title: "RESTAURANT CLEANING", image: s3, link: "#" },
  { title: "APARTMENT CLEANING", image: s4, link: "#" },
  { title: "BANK OFFICE CLEANING", image: s5, link: "#" },
  { title: "PETROL PUMP CLEANING", image: s6, link: "#" },
  { title: "SOCIETY CLEANING", image: s7, link: "#" },
  { title: "FACTORY CLEANING", image: s88, link: "#" },
  { title: "HOME AND BUNGALOW CLEANING", image: s9, link: "#" },
]

export default function OurServices() {
  return (
    <section className="pt-12 pb-20 px-6 bg-gray-50">
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
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={service.image}
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
