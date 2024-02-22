import Header from "./header/header";
import Info from "./info/info";
import Members from "./members/members";
import Navbar from "./navbar/navbar";
import News from "./news/news";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <News />
      <Members />
      <Info />
    </main>
  );
}
