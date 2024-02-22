import Image from "next/image";
import Button from "../components/Button";

export default function Info() {
  return (
    <section className="px-12">
      <Image src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/bdca8181-69e2-4926-bbd0-0b8c833852a6/sitio-web-oficial-de-nike.jpg'} alt="Promo Image" width={1000} height={1000} className="w-full" />
      <div className="flex flex-col items-center text-center gap-6 py-10">
        <h2 className="text-7xl font-bold">FIND YOUR MAX</h2>
          <span className="font-medium">Eleva tu look al siguiente nivel.</span>
        <Button text={'Comprar'} textColor={'text-white'} color={'bg-black hover:bg-gray-500'} />
      </div>
    </section>
  )
}