import {SearchBar} from "./SearchBar";

function Header({ searchText, handleSearchOnChange }) {
    return (
      <>
        <div className='flex flex-col sm:flex-row sm:justify-between m-10'>
          <div className='text-center sm:text-start flex flex-col'>
            <span className='text-2xl text-md font-bold text-red-500 mt-4'>DeadPool</span>
            <h1 className='text-4xl text-white font-bold'>Discover the Multiverse</h1>
          </div>
          <SearchBar searchText={searchText} handleSearchOnChange={handleSearchOnChange}></SearchBar>
        </div>
      </>
    )
}

export default Header;