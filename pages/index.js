import { Banner, Filters, Item as ItemLine } from "../components";

const Home = () => {
  return (
    <>
      <Banner />

      <div>
        <h2 className="font-bold text-2xl mt-28">Liste des idées</h2>

        <Filters />

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
      </div>
    </>
  );
};

export default Home;
