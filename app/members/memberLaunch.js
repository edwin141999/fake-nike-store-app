import CardMember from "../components/CardMember";
import HeaderNews from "../components/HeaderNews";
import { IMAGES_LAUNCH, IMAGES_MEMBERS } from "../lib/constants";

export default function MemberLaunch() {
  return (
    <section className="min-h-screen flex flex-col gap-5">
      {/* HEADER  */}
      <HeaderNews title={'Lanzamientos por Member Days'} />
      {/* CARD */}
      <div className="h-[36.5rem] overflow-x-auto">
        <div className="flex flex-row h-[32.5rem] gap-2 w-full pl-12 pr-6">
          <CardMember img={IMAGES_LAUNCH[0]} title={"Nike Air More Uptempo '96"} subtitle={'Calzado para hombre'} price={'4,199'} />
          <CardMember img={IMAGES_LAUNCH[1]} title={'Air Jordan 1 Mid'} subtitle={'Calzado para mujer'} price={'3,199'} />
          <CardMember img={IMAGES_LAUNCH[2]} title={'Nike G.T. Cut 3 SE'} subtitle={'Calzado de básquetbol para niños grandes'} price={'2,399'} />
          <CardMember img={IMAGES_LAUNCH[3]} title={'Jordan Flight Heritage'} subtitle={'Prenda para la parte superior de béisbol'} price={'2,699'} />
          <CardMember img={IMAGES_LAUNCH[4]} title={'Jordan Stadium 90'} subtitle={'Calzado para hombre'} price={'3,299'} hidden={'hidden'}/>
          <CardMember img={IMAGES_LAUNCH[5]} title={'Jordan'} subtitle={'Pants de tejido Woven para mujer'} price={'2,199'} />
          <CardMember img={IMAGES_LAUNCH[6]} title={'Nike Tech Hera'} subtitle={'Calzado para hombre'} price={'2,699'} hidden={'hidden'} />
        </div>
      </div>
    </section>
  )
}