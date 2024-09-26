function SearchBar() {
    return (
      <>
        <div className="flex gap-1 justify-center my-6">
          <input type="text" id="busqueda" className="border-2 border-red-800 rounded-lg ps-2 sm:h-9" placeholder="Search..."></input>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div >
      </>
    )
}

export {SearchBar};
