import Button from "./Button";

export default function Card({ bgImg, title, subtitle }) {
  return (
    <article className="flex flex-col bg-cover bg-no-repeat min-w-[26rem] items-start justify-end text-white gap-8 p-12"
      style={{ backgroundImage: bgImg }}
    >
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{title}</span>
        <span className="text-lg font-medium">{subtitle}</span>
      </div>
      <Button text={'Comprar'} color={'bg-white hover:bg-gray-400'} textColor={'text-black'} />
    </article>
  )
}