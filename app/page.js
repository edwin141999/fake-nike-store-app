import News from "./news/news";
import Header from "./header/header";
import Navbar from "./navbar/navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <News />
    </main>
  );
}
