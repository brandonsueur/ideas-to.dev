import { Banner, Filters, Item as ItemLine, Title } from "../components";

const Home = () => {
  return (
    <>
      <Banner />

      <div>
        <Title type="h3" className="mt-28">
          Liste des idées
        </Title>

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
