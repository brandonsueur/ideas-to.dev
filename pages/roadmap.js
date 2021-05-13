import { Title } from "../components";

const RoadMap = () => (
  <div>
    <Title className="mb-5">Feuille de routes</Title>

    <p className="text-md text-gray-500 w-2/3">
      Un aperçu des fonctionnalités à venir de{" "}
      <b className="font-semibold">idea-to.dev</b>, et de celles que nous avons
      complétées jusqu'à présent !
    </p>

    <div className="shadow-md mt-12 rounded">
      <header className="border-b-2 border-indigo-50 p-4">
        <Title type="h5">
          <span className="mr-1">💡</span> Version initial
        </Title>
      </header>

      <div className="p-4 border-b text-gray-500 opacity-70">
        <span className="mr-2">✅</span>
        <span className="line-through">Poster des idées.</span>
      </div>

      <div className="p-4 border-b text-gray-500 opacity-70">
        <span className="mr-2">✅</span>
        <span className="line-through">Catégoriser les idées.</span>
      </div>

      <div className="p-4 border-b text-gray-500 opacity-70">
        <span className="mr-2">✅</span>
        <span className="line-through">Possibilité d'aimer une idée.</span>
      </div>

      <div className="p-4 text-gray-500 opacity-70">
        <span className="mr-2">✅</span>
        <span className="line-through">Ajouter une idée.</span>
      </div>
    </div>

    <div className="shadow-md mt-12 rounded">
      <header className="border-b-2 border-indigo-50 p-4">
        <Title type="h5">
          <span className="mr-1">👨🏻‍🔬</span> Fonctionnalités à venir
        </Title>
      </header>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🔄</span>
        <span className="">
          Présentez vos projets GitHub ci-dessous une idée.
        </span>
      </div>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🔄</span>
        <span className="">
          Un chat / Discord pour s'entraider avec des idées.
        </span>
      </div>

      <div className="p-4 border-b text-gray-500 opacity-50">
        <span className="mr-2">🔄</span>
        <span className="">Une page pour soutenir le projet.</span>
      </div>
    </div>

    <div className="shadow-md mt-12 rounded">
      <header className="border-b-2 border-indigo-50 p-4">
        <Title type="h5">
          <span className="mr-1">👔</span> Fonctionnalités payantes
        </Title>
      </header>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🧪</span>
        <span>Poster des idées.</span>
      </div>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🧪</span>
        <span>Des idées originales pour des entretiens techniques.</span>
      </div>

      <div className="p-4 text-gray-500">
        <span className="mr-2">🧪</span>
        <span>
          Clônez des boilerplate à partir de l'organisation GitHub & Trello.
        </span>
      </div>
    </div>

    <div className="shadow-md mt-12 rounded">
      <header className="border-b-2 border-indigo-50 p-4">
        <Title type="h5">
          <span className="mr-1">🤔</span> En réfléxions
        </Title>
      </header>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🧪</span>
        <span>Espace commentaire en dessous d'une idée pour échanger.</span>
      </div>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🧪</span>
        <span>Statistiques sur votre courbe d'apprentissage.</span>
      </div>

      <div className="p-4 border-b text-gray-500">
        <span className="mr-2">🧪</span>
        <span>Créer un profil avec des scores.</span>
      </div>

      <div className="p-4  text-gray-500">
        <span className="mr-2">🧪</span>
        <span>Défiez vos amis à créer des idées.</span>
      </div>
    </div>
  </div>
);

export default RoadMap;
