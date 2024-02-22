import Card from "../components/Card";
import HeaderNews from "../components/HeaderNews";
import { IMAGES_NEWS } from "../lib/constants";

export default function News() {

  return (
    <section className="min-h-screen flex flex-col gap-5">
      {/* HEADER  */}
      <HeaderNews title={'Novedades'} />
      {/* CARD */}
      <div className="h-[35rem] overflow-x-auto">
        <div className="flex flex-row h-[32.5rem] gap-2 w-full pl-12 pr-6">
          <Card bgImg={`url(${IMAGES_NEWS[0]})`} title={'Nike niño/a'} subtitle={'Calzado fácil de poner y quitar'} />
          <Card bgImg={`url(${IMAGES_NEWS[1]})`} title={'Jordan nueva temporada'} subtitle={'Vuela alto con estilo'} />
          <Card bgImg={`url(${IMAGES_NEWS[2]})`} title={'Nike Futbol'} subtitle={'Nuevo Mercurial Dream Speed 8'} />
          <Card bgImg={`url(${IMAGES_NEWS[3]})`} title={'Running Fast Pack'} subtitle={'Supera tu record personal'} />
          <Card bgImg={`url(${IMAGES_NEWS[4]})`} title={'Nike ACG'} subtitle={'Descubre tu lado explorador'} />
        </div>
      </div>
    </section>
  )
}