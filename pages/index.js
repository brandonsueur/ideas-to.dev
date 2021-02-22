import Head from "next/head";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Filters from "../components/filters";
import ItemLine from "../components/item";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container">
        <Banner />
        <h2 className="mt-4 font-bold text-2xl mt-28">Liste des idées</h2>
        {/* Filtres */}
        <Filters />

        {/* Idées */}
        <ItemLine
          title="Un composant React.js pour suivre les cryptos"
          category="🎨 Front-End"
          likes={30}
        />
        <ItemLine
          title="Créer la page d'accueil de tesla.com"
          category="🎨 Front-End"
          likes={57}
        />
        <ItemLine
          title="Liste des personnes qui unfollow sur GitHub"
          category="📦 Package"
          likes={98}
        />
        <ItemLine title="Un bot pour Discord" category="📦 Package" likes={3} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
