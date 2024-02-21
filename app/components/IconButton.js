import Image from "next/image";

export default function IconButton({ src, alt, bg, p }) {
  return (
    <div className={`${p} rounded-3xl ${bg} transition-colors duration-200 cursor-pointer`}>
      <Image src={src} alt={alt} height={24} width={24} />
    </div>
  )
}