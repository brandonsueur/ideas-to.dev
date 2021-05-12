const RoadMap = () => (
  <main className="container mt-24 mx-auto">
    <h1 className="font-semibold text-2xl mb-5">🎢 Roadmap</h1>
    <p className="w-2/3">
      An overview of the upcoming features of{" "}
      <b className="font-semibold">idea-to.dev</b>, and those we have completed
      so far!
    </p>

    <div className="shadow-lg mt-12 rounded">
      <header className="border-b-2 p-4">
        <h3 className="text-lg font-semibold">💡 Initial version</h3>
      </header>

      <div className="p-4 border-b text-gray-700 opacity-50">
        <h3>
          ✅ <span className="line-through">Posting ideas.</span>
        </h3>
      </div>

      <div className="p-4 border-b text-gray-700 opacity-50">
        <h3>
          ✅ <span className="line-through">Categorize ideas.</span>
        </h3>
      </div>

      <div className="p-4 border-b text-gray-700 opacity-50">
        <h3>
          ✅ <span className="line-through">Possibility to like an idea.</span>
        </h3>
      </div>

      <div className="p-4 border-b text-gray-700 opacity-50">
        <h3>
          ✅ <span className="line-through">Add an idea.</span>
        </h3>
      </div>
    </div>

    <div className="shadow-lg mt-12 rounded">
      <header className="border-b-2 p-4">
        <h3 className="text-lg font-semibold">👨🏻‍🔬 Upcoming features</h3>
      </header>

      <div className="p-4 border-b text-gray-700">
        <h3>🔄 Present your GitHub projects below an idea.</h3>
      </div>

      <div className="p-4 border-b text-gray-700">
        <h3>🔄 A chat / Discord to help each other with ideas.</h3>
      </div>

      <div className="p-4 border-b text-gray-700 opacity-50">
        <h3>🔄 A page to support the project.</h3>
      </div>
    </div>

    <div className="shadow-lg mt-12 rounded">
      <header className="border-b-2 p-4">
        <h3 className="text-lg font-semibold">👔 Features premium</h3>
      </header>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Receive every Friday morning on your news profile</h3>
      </div>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Ideas for conducting technical interviews</h3>
      </div>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Clone boilerplate from an idea made on GitHub / Trello.</h3>
      </div>
    </div>

    <div className="shadow-lg mt-12 rounded">
      <header className="border-b-2 p-4">
        <h3 className="text-lg font-semibold">🤔 In reflection</h3>
      </header>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Comment space.</h3>
      </div>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Statistics on an idea learning curve.</h3>
      </div>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Create a profile with scores.</h3>
      </div>

      <div className="p-4 border-b text-gray-700">
        <h3>🧪 Challenge people to create ideas.</h3>
      </div>
    </div>
  </main>
);

export default RoadMap;
