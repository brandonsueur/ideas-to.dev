const Filters = () => (
  <div class="border-b border-gray-200 mt-6 mb-10">
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
  </div>
);

export default Filters;
