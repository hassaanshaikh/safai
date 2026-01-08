// import { Phone, Mail, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

//         <div>
//           <h2 className="text-2xl font-bold text-white">
//             Safai<span className="text-orange-500">Wala</span>
//           </h2>
//           <p className="mt-4 text-sm">
//             Professional cleaning services in Karachi for homes & offices.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold mb-4">Services</h3>
//           <ul className="space-y-2">
//             <li>Sofa Cleaning</li>
//             <li>Carpet Cleaning</li>
//             <li>House Cleaning</li>
//             <li>Office Cleaning</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>About</li>
//             <li>Gallery</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-semibold mb-4">Contact</h3>
//           <p className="flex items-center gap-2"><Phone size={16}/> +92 300 1234567</p>
//           <p className="flex items-center gap-2"><Mail size={16}/> info@safaiwala.pk</p>
//           <p className="flex items-center gap-2"><MapPin size={16}/> Karachi</p>
//         </div>
//       </div>

//       <div className="text-center py-4 border-t border-gray-800 text-sm">
//         © 2026 SafaiWala – All Rights Reserved
//       </div>
//     </footer>
//   );
// }

import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#f58220]">
              SAFAIWALA.PK
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading cleaning company in Karachi providing professional
              residential, commercial and industrial cleaning services.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <MapPin className="w-4 h-4 text-[#f58220]" />
              <span>Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Phone className="w-4 h-4 text-[#f58220]" />
              <span>+92 304-1110517</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-[#f58220]" />
              <span>info@safaiwala.pk</span>
            </div>

            <div className="flex gap-3 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-[#f58220]" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-[#f58220]" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#f58220]" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-[#f58220]" />
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">SERVICES LINK</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Sofa Cleaning",
                "Carpet Cleaning",
                "Mattress Cleaning",
                "Office Cleaning",
                "House Cleaning",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#f58220]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">TOP SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Upholstery Services",
                "Deep Cleaning",
                "Curtain Cleaning",
                "Floor Cleaning",
                "Water Tank Cleaning",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#f58220]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-bold mb-4">SUBSCRIBE</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button className="bg-[#f58220] hover:bg-[#e07010] px-4 rounded">
                Go
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-400">
              Call Now:{" "}
              <span className="text-[#f58220]">+92 304-1110517</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 SafaiWala.Pk All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#f58220]">
              Who We Are
            </a>
            <a href="#" className="hover:text-[#f58220]">
              Our Story
            </a>
            <a href="#" className="hover:text-[#f58220]">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
