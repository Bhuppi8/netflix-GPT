import React from "react";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex w-full justify-center px-4 pt-24 sm:pt-32">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-black/80 p-4 shadow-2xl backdrop-blur-sm sm:flex-row"
      >
        <input
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
          className="min-w-0 flex-1 rounded-lg border border-gray-600 bg-gray-900 px-5 py-3 text-base text-white outline-none placeholder:text-gray-400 transition focus:border-red-600 focus:ring-2 focus:ring-red-600/40"
        />

        <button
          type="submit"
          className="rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
        >
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;