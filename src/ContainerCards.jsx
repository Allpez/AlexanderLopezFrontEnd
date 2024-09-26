function ContainerCards() {
    const title = "pixel";
    const img = [
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_03.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_04.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_05.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_06.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_07.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_08.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_09.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_10.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_11.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_12.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_15.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_18.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_20.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_22.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_23.webp",
        "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_24.webp"
    ];
    return (
        <div className="flex border-solid border-2 border-red-900 rounded-lg items-center mx-10 flex-wrap justify-center bg-white mb-6">
            <DeadPoolCard title={title} image={img[0]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[1]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[2]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[3]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[0]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[1]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[2]}></DeadPoolCard>
            <DeadPoolCard title={title} image={img[3]}></DeadPoolCard>

        </div>
    );
}

function DeadPoolCard (props) {
    return (
        <a href="#" className='w-80 m-5'>
            <div className='flex flex-col bg-red-900 border-black rounded-lg relative'>
                <img src={props.image} alt={props.title} className='object-cover w-full'></img>
                <p className='mb-3 ms-14 text-white font-bold'>{props.title}</p>
                <div className='w-3 h-3 absolute bottom-0 right-0 bg-white rounded-br-md'></div>
            </div>
        </a>
    );
};

export { ContainerCards, DeadPoolCard }