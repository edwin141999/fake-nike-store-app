import IconButton from "./IconButton";

export default function HeaderNews({ title }) {
  return (
    <div className="flex flex-row justify-between items-center px-12">
      {/* TODO: Chcear que se pueda scrollear con los botones y poner el disabled al principio y al final*/}
      <p className="text-2xl font-medium">{title}</p>
      <div className="flex flex-row gap-3">
        <IconButton src={'/icons/left-arrow.svg'} alt={"Right SVG"} bg={'bg-slate-300 hover:bg-slate-400'} p={'p-3'} />
        <IconButton src={'/icons/right-arrow.svg'} alt={"Right SVG"} bg={'bg-slate-300 hover:bg-slate-400'} p={'p-3'} />
      </div>
    </div>
  )
}