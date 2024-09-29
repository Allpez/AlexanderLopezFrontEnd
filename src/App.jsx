import "./App.css";
import Header from "./Header";
import {ContainerCards} from "./ContainerCards";
import { useState } from "react";

function App() {
  const [searchText, setSearchText ] = useState("") //variables de estado, estado inicial, funcion que permite modificar el estado

  const handleSearchOnChange = (newValue) => {
    setSearchText(newValue)
  }
console.log(searchText);
  return (
    <>
      <Header searchText={searchText} handleSearchOnChange={handleSearchOnChange}></Header>
      <ContainerCards searchText={searchText}></ContainerCards>
    </>
  )
}
export default App



















































//  function App() {
//   const routes = [
//     ["Home", "/"],
//     ["Projects", "/"],
//     ["Shop", "/"]
//   ]
//   return (
//     <>
//       <nav className='flex gap-3 sm:justify-center justify-end'>
//         {routes.map(([title, url]) => {
//           return <a className='bg-cyan-100 hover:bg-cyan-700 hover:text-white rounded-md py-1 px-2 my-2 border-solid border-2 border-cyan-700 hover:border-cyan-100' href={url}>{title}</a>
//         })}
//       </nav>
//     </>
//   )
// }
// export default App
