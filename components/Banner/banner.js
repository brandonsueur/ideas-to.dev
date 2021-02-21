const Banner = () => (
  <>
    <h1 className="mt-32 font-bold text-3xl max-w-xl">
      Aucune inspiration à avoir. Cherchez une idée et développez-la!
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
      <div className="border border-indigo-200 rounded-lg p-8 ">
        <span className="bg-indigo-50 inline-block p-4 rounded-full ">
          <svg
            className="w-6 h-6 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </span>
        <h2 className="mt-4 font-bold text-2xl">Prenez une idée</h2>
        <p className="text-md mt-4 text-gray-500">
          Regardez la liste des idées ci-dessus, prenez en une qui vous inspire.
        </p>
      </div>
      <div className="border border-yellow-200 rounded-lg p-8">
        <span className="bg-yellow-50 inline-block p-4 rounded-full">
          <svg
            className="w-6 h-6 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h2 className="mt-4 font-bold text-2xl dark:text-white">
          Adaptez l'idée
        </h2>
        <p className="text-md mt-4 text-gray-500">
          Une fois votre idée sélectionner, améliorer l'idée avec vos concepts.
        </p>
      </div>
      <div className="border border-green-200 rounded-lg p-8">
        <span className="bg-green-50 inline-block p-4 rounded-full">
          <svg
            className="w-6 h-6 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </span>
        <h2 className="mt-4 font-bold text-2xl dark:text-white">
          Développer l'idée
        </h2>
        <p className="text-md mt-4 text-gray-500">
          Définissez vos tâches et vous pourrez commencer à développer un POC.
        </p>
      </div>
    </div>
  </>
);

export default Banner;
