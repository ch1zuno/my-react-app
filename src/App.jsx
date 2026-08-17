import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import Cards from './components/Cards';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col">
        <Banner />
        <Content />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}