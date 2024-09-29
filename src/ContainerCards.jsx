import "./ContainerCards.css";

function ContainerCards({ searchText }) {
    const cards = [
        { title: "DeadPool", id:"1", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool.webp", img2: "https://gallerypng.com/wp-content/uploads/2024/07/Marvel-Character-deadpool-png-picture-402x750.png" },
        { title: "BabyPool", id:"2", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_04.webp", img2: "https://www.pikpng.com/pngl/b/475-4750463_deadpool-posing-cosbaby-deadpool-cosbaby-clipart.png" },
        { title: "Headpool", id:"3", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_22.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/033a2d48-6ee9-48d6-8244-b750df1b581b/dh7q02r-17a1a24b-55fb-45fe-84d4-7684325b2163.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzM2EyZDQ4LTZlZTktNDhkNi04MjQ0LWI3NTBkZjFiNTgxYlwvZGg3cTAyci0xN2ExYTI0Yi01NWZiLTQ1ZmUtODRkNC03Njg0MzI1YjIxNjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LL4gO5wmWzZOLBDjxoQ2i7PHXK_Ns5nmiv8nA1HuEGk"},
        { title: "Nicepool", id:"4", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_24.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f091ec3-dbfb-48b4-b63c-d4af1b16e6dd/dhykrg1-ad9e6c4a-ba3f-4c24-b71a-2afdd78a891b.png/v1/fit/w_423,h_963/nicepool_png_by_thepngguy_dhykrg1-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYzIiwicGF0aCI6IlwvZlwvMGYwOTFlYzMtZGJmYi00OGI0LWI2M2MtZDRhZjFiMTZlNmRkXC9kaHlrcmcxLWFkOWU2YzRhLWJhM2YtNGMyNC1iNzFhLTJhZmRkNzhhODkxYi5wbmciLCJ3aWR0aCI6Ijw9NDIzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Gl6Gsu_nxiIIMrq0Yht1dszllGZZlsb-b-VhcCAqiLk"},
        { title: "Dogpool", id:"5", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_23.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf853092-d54d-4bd0-842b-1facd2b89c32/dhbkrx8-400299d1-3d3b-4ddd-bc08-187bca79e55b.png/v1/fill/w_851,h_939/dogpool__dpaw_png_by_iwasboredsoididthis_dhbkrx8-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMzIiLCJwYXRoIjoiXC9mXC9iZjg1MzA5Mi1kNTRkLTRiZDAtODQyYi0xZmFjZDJiODljMzJcL2RoYmtyeDgtNDAwMjk5ZDEtM2QzYi00ZGRkLWJjMDgtMTg3YmNhNzllNTViLnBuZyIsIndpZHRoIjoiPD05MTgxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2D3wgW-x3Nrmqo913ERQkYwqvSdsWX8i4tPWpfl8w4E"},
        { title: "Venomized", id:"9", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_05.webp", img2: "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/904937/venompool-sixth-scale-figure_marvel_silo.png"},
        { title: "PixelPool", id:"7", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_01.webp", img2:"https://media.tenor.com/gdk8ohoJHcwAAAAi/deadpool-metarupx.gif"},
        { title: "Deadpool Nerdy", id:"8", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_03.webp" },
        { title: "Max Grecke", id:"10", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_06.webp" },
        { title: "Variant", id:"6", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_02.webp" },
        { title: "Penny Arcade", id:"11", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_07.webp" },
        { title: "Skottie Young", id:"12", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_08.webp" },
        { title: "Post Apocalyptic", id:"13", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_09.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84968ac0-0811-4b45-9917-3d75a33c05c8/dg32h05-29c33c5b-d557-4f48-9105-bb821fab51aa.jpg/v1/fit/w_828,h_1256,q_70,strp/the_insane_renegade__world_war_deadpool_by_boomlabstudio_dg32h05-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2MCIsInBhdGgiOiJcL2ZcLzg0OTY4YWMwLTA4MTEtNGI0NS05OTE3LTNkNzVhMzNjMDVjOFwvZGczMmgwNS0yOWMzM2M1Yi1kNTU3LTRmNDgtOTEwNS1iYjgyMWZhYjUxYWEuanBnIiwid2lkdGgiOiI8PTg5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IoqYMxSlTtf1fHdjOMUVYkhvKjh8HH3dAFVCWkJ4O1I"},
        { title: "Jim Lee", id:"14", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_10.webp", img2:"https://www.kindpng.com/picc/m/83-837205_deadpool-game-png-deadpool-clipart-transparent-png.png"},
        { title: "Peach Momoko", id:"15", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_11.webp" },
        { title: "Midnight Suns", id:"16", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_12.webp" },
        { title: "Variant", id:"17", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_18.webp" },
        { title: "Pandart", id:"18", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_20.webp", img2:"https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2024/07/marvel-snap-julio-2024-temporada-deadpool-wolverine.jpg?resize=860%2C575&ssl=1"}
    ];
    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchText.toLowerCase())
      );

    return (
        <div className="my-style flex border-solid border-2 flex-auto border-red-900 rounded-lg items-center mx-10 flex-wrap justify-center bg-white mb-6 p-3 py-12">
            {filteredCards.map(c => (
                <DeadPoolCard title={c.title} key={c.id} image1={c.img1} image2={c.img2}></DeadPoolCard>
            ))}
        </div>
    );
}

function DeadPoolCard({ title, image1, image2 }) {
    return (
        <a href="#" className='w-80 m-5'>
            <div className='flex flex-col bg-red-900 border-black border-2 rounded-lg relative'>
                <article>
                    <img src={image1} alt={title} className='object-cover w-full'></img>
                    <img src={image2} alt={title} className='object-cover w-full'></img>
                </article>
                <p className='mb-3 ms-14 text-white font-bold'>{title}</p>
                <div className='w-3 h-3 absolute bottom-0 right-0 bg-white rounded-br-md'></div>
            </div>
        </a>
    );
};

export { ContainerCards, DeadPoolCard }
