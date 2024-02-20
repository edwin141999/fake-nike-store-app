import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex flex-row py-5 px-12 items-center justify-between">
      {/* LOGO NIKE */}
      <Image src={'/nike-logo.webp'} alt="Nike Logo" height={80} width={80} className="cursor-pointer" />
      {/* HOVERS */}
      <div className="font-semibold flex items-center cursor-pointer">
        <span className="border-white border-b-2 hover:border-b-2 hover:border-black p-2">Nuevos lanzamientos</span>
        <span className="border-white border-b-2 hover:border-b-2 hover:border-black p-2">Hombre</span>
        <span className="border-white border-b-2 hover:border-b-2 hover:border-black p-2">Mujer</span>
        <span className="border-white border-b-2 hover:border-b-2 hover:border-black p-2">Niño/a</span>
        <span className="border-white border-b-2 hover:border-b-2 hover:border-black p-2">Rebajas</span>
        <span className="border-white border-b-2 hover:border-b-2 hover:border-black p-2">SNKRS</span>
      </div>
      {/* SEARCH, LOVE AND BAG */}
      <div className="relative">
        {/* SEARCH */}
        <div className="absolute group w-44 right-28">
          <div className="absolute items-center p-2 bg-slate-100 rounded-3xl group-hover:bg-slate-200 transition-transform duration-200 cursor-pointer">
            <Image src={'/icons/search.svg'} alt="Search SVG" height={24} width={24} />
          </div>
          <input type="text" placeholder="Buscar" className="bg-slate-100 placeholder-slate-300 hover:placeholder-slate-400 ps-12 w-full p-2 rounded-3xl font-semibold outline-none hover:bg-slate-200 transition-transform duration-200"></input>
        </div>
        {/* LOVE AND BAG */}
        <div className="flex flex-row gap-2">
          <div className="p-2 rounded-3xl hover:bg-slate-200 transition-colors duration-200 cursor-pointer">
            <Image src={'/icons/heart.svg'} alt="Heart SVG" height={24} width={24} />
          </div>
          <div className="p-2 rounded-3xl hover:bg-slate-200 transition-colors duration-200 cursor-pointer">
            <Image src={'/icons/bag.svg'} alt="Bag SVG" height={24} width={24} />
          </div>
        </div>
      </div>
    </nav>
  )
}