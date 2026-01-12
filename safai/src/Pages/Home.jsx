import { Home as HomeIcon, Building2, Factory, Users, Shield, DollarSign, Clock } from "lucide-react"
import m1 from "../assets/m1.png";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="h-[80vh] bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952')] bg-cover bg-center flex items-center">
        <div className="bg-black/60 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              TOP CLEANING COMPANY <br />
              <span className="text-orange-500">IN KARACHI</span>
            </h1>

            <p className="mt-6 max-w-xl">
              Residential & commercial cleaning services with trained staff.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f58220] hover:bg-white text-white hover:text-[#f58220] font-bold px-8 py-3 text-md mt-4">
                OUR SERVICES
              </button>

              <button className="border-white text-[#f58220] hover:bg-[#f58220] hover:text-white mt-4 px-8 py-3 text-md bg-white font-bold">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-4 bg-white relative -mt-20 z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Residential */}
            <div className="bg-white rounded-lg shadow-xl p-8 text-center hover:shadow-2xl transition-shadow border-t-4 border-[#f58220]">
              <div className="w-16 h-16 bg-[#f58220]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-[#f58220]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                RESIDENTIAL CLEANING
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide exceptional residential cleaning services that
                specialize in deep and thorough cleaning for homes and
                apartments of every size in Karachi.
              </p>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-lg shadow-xl p-8 text-center hover:shadow-2xl transition-shadow border-t-4 border-[#f58220]">
              <div className="w-16 h-16 bg-[#f58220]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#f58220]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                COMMERCIAL CLEANING
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our commercial cleaning services will keep your business
                operating at the highest level of cleanliness, creating a
                healthy environment for employees and clients.
              </p>
            </div>

            {/* Industrial */}
            <div className="bg-white rounded-lg shadow-xl p-8 text-center hover:shadow-2xl transition-shadow border-t-4 border-[#f58220]">
              <div className="w-16 h-16 bg-[#f58220]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-[#f58220]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                INDUSTRIAL CLEANING
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer comprehensive industrial cleaning solutions that meet
                the highest standards of safety and cleanliness for
                manufacturing facilities and warehouses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
<section className="py-16 px-4 bg-white">
  <div className="container mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
      WHY CHOOSE US
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      The world's best and most efficient professional management & team,
      delivering 24-hour residential, commercial, and industrial cleaning
      services with excellence and reliability.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Expert Employees */}
      <div className="text-center group">
        <div className="w-20 h-20 bg-[#f58220] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a1a2e] transition-colors">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
          EXPERT EMPLOYEES
        </h3>
        <p className="text-gray-600 text-sm">
          We have highly trained and experienced employees who are experts in
          their field of cleaning services.
        </p>
      </div>

      {/* Secure Services */}
      <div className="text-center group">
        <div className="w-20 h-20 bg-[#f58220] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a1a2e] transition-colors">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
          SECURE SERVICES
        </h3>
        <p className="text-gray-600 text-sm">
          Our services are fully secure with proper insurance and bonding for
          your complete peace of mind.
        </p>
      </div>

      {/* Low Costing */}
      <div className="text-center group">
        <div className="w-20 h-20 bg-[#f58220] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a1a2e] transition-colors">
          <DollarSign className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
          LOW COSTING
        </h3>
        <p className="text-gray-600 text-sm">
          We offer competitive pricing without compromising on the quality of
          our cleaning services.
        </p>
      </div>

      {/* On Time Finished */}
      <div className="text-center group">
        <div className="w-20 h-20 bg-[#f58220] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a1a2e] transition-colors">
          <Clock className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
          ON TIME FINISHED
        </h3>
        <p className="text-gray-600 text-sm">
          We value your time and always complete our work within the promised
          timeframe.
        </p>
      </div>

    </div>
  </div>
</section>

{/* MISSION & VISION SECTION */}
<section className="py-16 px-4 bg-white">
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* CONTENT */}
      <div className="bg-[#f5f5f5] p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">
          SafaiWala.Pk – Mission & Vision
        </h2>

        <h3 className="text-[#f58220] font-bold text-xl mb-6">
          MISSION
        </h3>

        <p className="text-gray-600 mb-6">
          “SafaiWala.Pk welcomes a world where quality professional cleaning is
          accessible at low cost and readily available to every household.
          We aim to create a healthy environment for our clients while building
          a strong reputation in the industry.”
        </p>

        <p className="text-gray-600 mb-4">
          Our enterprise is part of a growing industry in Karachi, Pakistan.
          Our employees provide commercial, industrial, and residential
          cleaning services with experience and dedication. We believe in
          <span className="font-bold text-[#1a1a2e]">
            {" "}Purpose Beyond Responsibility
          </span>.
        </p>

        <p className="text-gray-600 italic">
          Helping people live in a safe, clean, and healthy environment with
          clean surfaces that build a foundation for good health and a better
          life.
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative">
        <div className="text-center mb-4">
          <span className="text-6xl md:text-8xl font-bold text-[#f58220]/20">
            MISSION
          </span>
          <div className="text-4xl md:text-6xl font-bold text-[#1a1a2e] -mt-8">
            &
          </div>
        </div>

        <img
          src={m1}
          alt="Mission Vision"
          className="rounded-lg shadow-xl w-full"
        />
      </div>

    </div>
  </div>
</section>


  </>
  )
}

