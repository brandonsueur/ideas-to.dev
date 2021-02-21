import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/Banner";

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
        <div class="border-b border-gray-200 mt-6">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              href="#"
              class="border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
              aria-current="page"
            >
              <span>Tous</span>
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
            >
              <span className="mr-2">⚙️</span>
              <span>Back-End</span>
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
            >
              <span className="mr-2">📱</span>
              <span>Application Mobile</span>
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
              aria-current="page"
            >
              <span className="mr-2">📦</span>
              <span>Package</span>
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
            >
              <span className="mr-2">🎨</span>
              <span>Front-End</span>
            </a>

            <a
              href="#"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
            >
              <span className="mr-2">👨🏻‍🔧</span>
              <span>Full-Stack</span>
            </a>
          </nav>
        </div>{" "}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
