import './App.css'

function App() {
  // const routes = [
  //   ["Home", "/"],
  //   ["Projects", "/"],
  //   ["Shop", "/"]
  // ]

  return (
    <>
      {/* <nav className='flex gap-3 sm:justify-center justify-end'>
        {routes.map(([title, url]) => {
          return <a className='bg-cyan-100 hover:bg-cyan-700 hover:text-white rounded-md py-1 px-2 my-2 border-solid border-2 border-cyan-700 hover:border-cyan-100' href={url}>{title}</a>
        })}
      </nav> */}
      <Header></Header>
      <div className='flex border-solid border-2 border-red-900 items-center mx-10 flex-wrap justify-center bg-white mb-6'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
    </>
  )
}

function Cards() {
  return (
    <a href="#" className='w-80 m-5'>
      <div className='flex flex-col bg-red-900 rounded-lg relative'>
        <img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool.webp" alt="deadpool-img" className='object-cover w-full'></img>
        <p className='mb-3 ms-14 text-white font-bold'>Pixel</p>
        <div className='w-3 h-3 absolute bottom-0 right-0 bg-white rounded-br-md'></div>
      </div>
    </a>
  )
}

export default App




{/* <div>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_03.webp" alt="" ></img>
<p className='ms-3'>Pixel</p>
</div>

<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_04.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_05.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_06.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_07.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_08.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_09.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_10.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_11.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_12.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_15.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_18.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_20.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_22.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_23.webp" alt="" ></img>
<img src="https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_24.webp" alt="" ></img>
 */}
