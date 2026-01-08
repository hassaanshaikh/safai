import { Check } from "lucide-react"
// import aboutImg from "../assets/before-after-carpet-cleaning-comparison.jpg"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* <img
                src={aboutImg}
                alt="Before After Cleaning"
                className="rounded-lg shadow-xl w-full"
              /> */}
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#f58220] rounded-lg z-0" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              SafaiWala.Pk – Bringing Excellence In{" "}
              <span className="text-[#f58220]">
                Residential & Commercial Cleaning Services
              </span>
            </h2>

            <p className="text-gray-600 mb-6">
              The world's best and most efficient professional cleaning team,
              delivering 24-hour residential, commercial, and industrial
              cleaning services with excellence and reliability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Certified company",
                "Our experience",
                "Our mission",
                "Our vision",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#f58220]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
