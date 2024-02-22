import Image from "next/image";
import Button from "../components/Button";

export default function Header() {
  return (
    <section className="px-12">
      <Image src={'/promo-img.webp'} alt="Promo Image" width={1000} height={1000} className="w-full" />
      <div className="flex flex-col items-center text-center gap-6 py-10">
        <h2 className="text-7xl font-bold">CELEBRANDO A NUESTROS MIEMBROS</h2>
        <div className="flex flex-col">
          <span className="font-medium">Porque sabemos que nuestros Miembros merecen tener lo mejor antes que nadie,</span>
          <span className="font-medium">en Member Days te damos acceso a estilos nuevos para que seas de los primeros en tenerlos. </span>
        </div>
        <span className="font-medium">Además de Meses sin intereses y acceso a recompensas exclusivas.</span>
        <div className="flex gap-1">
          <Button text={'Hombre'} textColor={'text-white'} color={'bg-black hover:bg-gray-500'} />
          <Button text={'Mujer'} textColor={'text-white'} color={'bg-black hover:bg-gray-500'} />
          <Button text={'Niños'} textColor={'text-white'} color={'bg-black hover:bg-gray-500'} />
          <Button text={'*T&C'} textColor={'text-white'} color={'bg-black hover:bg-gray-500'} />
        </div>
      </div>
    </section>
  )
}