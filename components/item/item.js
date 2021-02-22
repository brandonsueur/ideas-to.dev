const Item = ({ title, category, likes }) => (
  <div className="flex container rounded-lg border border-gray-200 mt-3 p-4 justify-between">
    <div className="flex">
      <div class="mr-4">
        <div>
          <button
            type="button"
            class="px-2 py-1 rounded-md border border-red-100 text-red-400 hover:border-red-200 hover:text-red-500 hover:bg-red-200 focus:outline-none transform active:translate-y-1 transition duration-150 ease-in-out bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="6"
              class="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>

            <span class="font-medium text-sm">{likes}</span>
          </button>
        </div>
      </div>

      <h1 className="font-semibold text-lg cursor-pointer self-center">
        {title}
      </h1>
    </div>

    <div className="self-center">
      <span class="inline-flex items-center px-2.5 py-1 rounded text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer">
        {category}
      </span>
    </div>
  </div>
);

export default Item;
