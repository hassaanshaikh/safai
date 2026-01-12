import { Play } from "lucide-react"
import ab1 from "../assets/ab1.PNG";
import ab2 from "../assets/ab2.PNG";

export default function AboutSection() {
  return (
    <>
    {/* MARKET LEADER SECTION */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE WITH OVERLAY */}
      <div className="relative">
        <img
          src={ab1}
          alt="Bringing Excellence in Cleaning Services"
          className="rounded-lg w-full h-96 object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          "Market Leader of Cleaning Services"
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          We work hard on raising cleaning market standards. Our state-of-the-art
          professional & experienced team, strong quality control, and customer-first
          recognition makes us the leading market leader in the cleaning service industry.
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Our cleaning services are carried out by years of professionals who are
          fully educated & trained in a reliable way. As a leading market leader,
          we provide thoroughly professional cleaning services that are pocket-friendly
          and ensure outstanding results!
        </p>

        {/* INFO CARDS */}
        <div className="grid sm:grid-cols-2 gap-4">
          
          <div className="flex items-start gap-3">
            <div className="text-[#f58220] text-2xl">🏢</div>
            <div>
              <h3 className="font-semibold text-gray-900">Certified company</h3>
              <p className="text-sm text-gray-600">Professional certifications</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-[#f58220] text-2xl">👥</div>
            <div>
              <h3 className="font-semibold text-gray-900">Our experience</h3>
              <p className="text-sm text-gray-600">Years of expertise</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* MISSION, VISION, VALUES SECTION */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">

      {/* Mission */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .268m-5.5 0H5a2 2 0 00-2 2v4a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">OUR MISSION</h3>
        <p className="text-gray-600 leading-relaxed">
          SafaiWala's Mission is to provide high-quality professional cleaning services in the market, meeting clients' expectations & providing services at the lowest rate possible.
        </p>
      </div>

      {/* Vision */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">OUR VISION</h3>
        <p className="text-gray-600 leading-relaxed">
          As one of the leading cleaning companies in Karachi, Team SafaiWala is working day & night to secure a place among the top cleaning companies globally.
        </p>
      </div>

      {/* Values */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">OUR VALUES</h3>
        <p className="text-gray-600 leading-relaxed">
          We believe in the values of "Respect, Responsibility, Caring, Excellence, Integrity & Innovation."
        </p>
      </div>

    </div>
  </div>
</section>

{/* HOW WE CLEAN SECTION */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">HOW WE CLEAN?</h2>
      <p className="text-gray-600">
        Take a look at the simple video of how we clean at your doorstep!
      </p>
      <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Video Placeholder */}
      <div className="relative">
        <img
          src={ab2}
          alt="How we clean"
          className="rounded-lg w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-lg">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition">
            <Play className="w-6 h-6 text-orange-500 ml-1" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold">
          Safai Wala
        </div>
      </div>

      {/* Process Steps */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Watch our video for details about cleaning services.
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Firstly we start with pre-spraying the carpet or sofa which helps us remove the hard accumulated dirt
          or sand. This is done to give carpets or sofa a brand new look.
        </p>

        <div className="space-y-3">
          {["Chemical Spray", "Hot Water Injection", "Rubbing Surface", "Vacuumization", "Shining Process"].map(
            (step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  ✓
                </div>
                <span className="text-gray-700">{step}.</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </div>
</section>


 </>
  )
}
