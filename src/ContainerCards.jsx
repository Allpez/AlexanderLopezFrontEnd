function ContainerCards() {
    const card = [
        {title:"DeadPool", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool.webp"},
        {title:"PixelPool", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_01.webp"},
        {title:"Variant", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_02.webp"},
        {title:"Deadpool Nerdy", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_03.webp"},
        {title:"BabyPool", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_04.webp"},
        {title:"Venomized", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_05.webp"},
        {title:"Max Grecke", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_06.webp"},
        {title:"Penny Arcade", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_07.webp"},
        {title:"Skottie Young", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_08.webp"},
        {title:"Post Apocalyptic", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_09.webp"},
        {title:"Jim Lee", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_10.webp"},
        {title:"Peach Momoko", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_11.webp"},
        {title:"Midnight Suns", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_12.webp"},
        {title:"Variant", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_18.webp"},
        {title:"Pandart", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_20.webp"},
        {title:"Headpool", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_22.webp"},
        {title:"Dogpool", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_23.webp"},
        {title:"Nicepool", img:"https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_24.webp"}
    ];
    return (
        <div className="flex border-solid border-2 border-red-900 rounded-lg items-center mx-10 flex-wrap justify-center bg-white mb-6 p-3 py-12">
            {card.map(c=>(
                <DeadPoolCard title={c.title} image={c.img}></DeadPoolCard>
            ))}
        </div>
    );
}

function DeadPoolCard ({title, image}) {
    return (
        <a href="#" className='w-80 m-5'>
            <div className='flex flex-col bg-red-900 border-black border-2 rounded-lg relative'>
                <img src={image} alt={title} className='object-cover w-full'></img>
                <p className='mb-3 ms-14 text-white font-bold'>{title}</p>
                <div className='w-3 h-3 absolute bottom-0 right-0 bg-white rounded-br-md'></div>
            </div>
        </a>
    );
};

export { ContainerCards, DeadPoolCard }