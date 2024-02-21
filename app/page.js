import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import News from "./components/news/news";

export default function Home() {
  return (
    <main className="px-12">
      <Navbar />
      <Header />
      <News />
    </main>
  );
}
