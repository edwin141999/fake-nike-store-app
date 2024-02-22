import Image from "next/image";

export default function CardMember({ img, title, subtitle, price,hidden }) {
  return (
    <article className="flex flex-col min-w-[26rem] gap-2">
      <Image src={img} alt="Sneakers/T-Shirt" width={1000} height={1000} className="w-full" />
      <div className="flex flex-col">
        <span className={`font-semibold text-orange-700 ${hidden}`}>Producto para miembros</span>
        <span className="text-md font-semibold">{title}</span>
        <span className="text-md font-medium text-gray-500">{subtitle}</span>
      </div>
      <span className="text-md font-semibold">MXN {price}</span>
    </article>
  )
}