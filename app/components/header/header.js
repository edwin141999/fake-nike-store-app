import Image from "next/image";

export default function Header() {
  return (
    <section>
      <Image src={'/promo-img.webp'} alt="Promo Image" width={1000} height={1000} className="w-full" />
      <div className="flex flex-col items-center text-center gap-6 py-10">
        <h2 className="text-7xl font-bold">CELEBRANDO A NUESTROS MIEMBROS</h2>
        <div className="flex flex-col">
          <span>Porque sabemos que nuestros Miembros merecen tener lo mejor antes que nadie,</span>
          <span>en Member Days te damos acceso a estilos nuevos para que seas de los primeros en tenerlos. </span>
        </div>
        <span>Además de Meses sin intereses y acceso a recompensas exclusivas.</span>
        <div className="flex gap-1">
          <button type="button" className="text-white font-semibold bg-black rounded-3xl px-5 py-1.5 hover:bg-gray-500">Hombre</button>
          <button type="button" className="text-white font-semibold bg-black rounded-3xl px-5 py-1.5 hover:bg-gray-500">Mujer</button>
          <button type="button" className="text-white font-semibold bg-black rounded-3xl px-5 py-1.5 hover:bg-gray-500">Niños</button>
          <button type="button" className="text-white font-semibold bg-black rounded-3xl px-5 py-1.5 hover:bg-gray-500">*T&C</button>
        </div>
      </div>
    </section>
  )
}