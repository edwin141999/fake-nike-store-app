import Card from "../components/Card";
import IconButton from "../components/IconButton";

export default function News() {
  const IMAGES = [
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/c10ccfa8-03bb-4641-b52d-a2680fba433d/image.jpg',
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/fa4ca0d1-080d-494c-a863-620f4c40916f/image.jpg',
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/0a037571-80fd-4ed6-8130-45cca4e5ff93/image.jpg',
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/baea93b6-e9ad-49eb-a2c2-b5f10493a1b4/image.png',
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/0e070445-c712-4d02-8dc3-ce8898bf8baa/image.jpg'
  ]

  return (
    <section className="min-h-screen flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center px-12">
        {/* TODO: Chcear que se pueda scrollear con los botones y poner el disabled al principio y al final*/}
        <p className="text-2xl">Novedades</p>
        <div className="flex flex-row gap-3">
          <IconButton src={'/icons/left-arrow.svg'} alt={"Right SVG"} bg={'bg-slate-300 hover:bg-slate-400'} p={'p-3'} />
          <IconButton src={'/icons/right-arrow.svg'} alt={"Right SVG"} bg={'bg-slate-300 hover:bg-slate-400'} p={'p-3'} />
        </div>
      </div>
      {/* CARD */}
      <div className="h-[35rem] overflow-x-auto">
        <div className="flex flex-row h-[32.5rem] gap-2 w-full pl-12 pr-6">
          <Card bgImg={`url(${IMAGES[0]})`} title={'Nike niño/a'} subtitle={'Calzado fácil de poner y quitar'} />
          <Card bgImg={`url(${IMAGES[1]})`} title={'Jordan nueva temporada'} subtitle={'Vuela alto con estilo'} />
          <Card bgImg={`url(${IMAGES[2]})`} title={'Nike Futbol'} subtitle={'Nuevo Mercurial Dream Speed 8'} />
          <Card bgImg={`url(${IMAGES[3]})`} title={'Running Fast Pack'} subtitle={'Supera tu record personal'} />
          <Card bgImg={`url(${IMAGES[4]})`} title={'Nike ACG'} subtitle={'Descubre tu lado explorador'} />
        </div>
      </div>
    </section>
  )
}