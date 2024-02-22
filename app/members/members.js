import CardMember from "../components/CardMember";
import HeaderNews from "../components/HeaderNews";
import { IMAGES_MEMBERS } from "../lib/constants";

export default function Members() {
  return (
    <section className="min-h-screen flex flex-col gap-5">
      {/* HEADER  */}
      <HeaderNews title={'Acceso anticipado por Member Days'} />
      {/* CARD */}
      <div className="h-[36.5rem] overflow-x-auto">
        <div className="flex flex-row h-[32.5rem] gap-2 w-full pl-12 pr-6">
          <CardMember img={IMAGES_MEMBERS[0]} title={"Nike Air More Uptempo '96"} subtitle={'Calzado para hombre'} price={'4,199'} />
          <CardMember img={IMAGES_MEMBERS[1]} title={'Air Jordan 1 Low SE'} subtitle={'Calzado para hombre'} price={'2,999'} />
          <CardMember img={IMAGES_MEMBERS[2]} title={'FC Barcelona Academy Pro SE'} subtitle={'Playera de fútbol Nike Dri-FIT para antes del partido para hombre'} price={'949'} />
          <CardMember img={IMAGES_MEMBERS[3]} title={'Nike Air Flight Huarache'} subtitle={'Calzado para hombre'} price={'3,199'} />
          <CardMember img={IMAGES_MEMBERS[4]} title={'Nike G.T. Cut 3 SE'} subtitle={'Calzado de básquetbol para niños grandes'} price={'2,399'} />
          <CardMember img={IMAGES_MEMBERS[5]} title={'Nike Sportswear'} subtitle={'Chamarra de tejido Woven para mujer'} price={'2,499'} />
          <CardMember img={IMAGES_MEMBERS[6]} title={'FC Barcelona'} subtitle={'Playera de fútbol Nike para hombre'} price={'799'} />
          <CardMember img={IMAGES_MEMBERS[7]} title={'Nike Culture of Basketball'} subtitle={'Jersey reversible para niños talla grande'} price={'999'} />
        </div>
      </div>
    </section>
  )
}