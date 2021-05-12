import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ItemLine from "../components/Item";

const Home = () => {
  return (
    <>
      <Banner />
      <h2 className="font-bold text-2xl mt-28">Liste des idées</h2>
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
    </>
  );
};

export default Home;
