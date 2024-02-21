import News from "./components/news/news";
import Header from "./header/header";
import Navbar from "./navbar/navbar";


export default function Home() {
  return (
    <main className="px-12">
      <Navbar />
      <Header />
      <News />
    </main>
  );
}
