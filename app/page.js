import News from "./news/news";
import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Members from "./members/members";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <News />
      <Members/>
    </main>
  );
}
