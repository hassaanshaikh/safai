// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
//             SCS
//           </div>
//           <h1 className="font-bold text-xl">
//             Safai & Sustain<span className="text-orange-500">Wala</span>
//           </h1>
//         </Link>

//         {/* DESKTOP MENU */}
//         <nav className="hidden md:flex gap-8 font-medium">
//           <Link to="/" className="hover:text-orange-500">Home</Link>
//           <Link to="/services" className="hover:text-orange-500">Services</Link>
//           <Link to="/about" className="hover:text-orange-500">About</Link>
//           <Link to="/gallery" className="hover:text-orange-500">Gallery</Link>
//           <Link to="/contact" className="hover:text-orange-500">Contact</Link>
//         </nav>

//         <button className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-lg">
//           Book Now
//         </button>

//         {/* MOBILE ICON */}
//         <button onClick={() => setOpen(!open)} className="md:hidden">
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
//           <Link onClick={()=>setOpen(false)} to="/">Home</Link>
//           <Link onClick={()=>setOpen(false)} to="/services">Services</Link>
//           <Link onClick={()=>setOpen(false)} to="/about">About</Link>
//           <Link onClick={()=>setOpen(false)} to="/gallery">Gallery</Link>
//           <Link onClick={()=>setOpen(false)} to="/contact">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react"
import { Link } from "react-router-dom";
import { Phone, Menu, X, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import logo from "../assets/logo1.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT US", path: "/about" },
  { name: "OUR SERVICES", path: "/services" },
  { name: "CONTACT US", path: "/contact" },
]

  return (
    <header className="w-full">

      {/* Main Header */}
      <div className="bg-white shadow-md py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">

          {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Safai & Sustain Cleaning Services" className="w-12 h-12 object-contain" />
 
         {/* Text Logo */}
              <div className="leading-tight">
                 <h1 className="text-[#1a1a2e] font-bold text-lg md:text-xl">
                  Safai & Sustain
                </h1>
                <p className="text-[#f58220] text-xs md:text-sm font-medium">
                  Cleaning Services
                </p>
              </div>

          </div>
        </Link>


          {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
            <Link
            key={item.path}
            to={item.path}
            className="text-[#1a1a2e] font-medium hover:text-[#f58220] transition-colors"
            >
            {item.name}
            </Link>
             ))}
        </nav>


          {/* Phone & Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-[#f58220] hover:bg-[#e07010] text-white px-6 py-2 rounded">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
             <Link
               key={item.path}
               to={item.path}
               onClick={() => setIsMenuOpen(false)}
               className="text-[#1a1a2e] font-medium hover:text-[#f58220]"
             >
              {item.name}
            </Link>
        ))}

         <button className="bg-[#f58220] hover:bg-[#e07010] text-white w-full py-2 rounded">
            Book Now
         </button>
        
        </nav>
        )}

      </div>
    </header>
  )
}
