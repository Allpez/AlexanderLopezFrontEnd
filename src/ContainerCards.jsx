import "./ContainerCards.css";


function ContainerCards() {
    const card = [
        { title: "DeadPool", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool.webp", img2: "https://gallerypng.com/wp-content/uploads/2024/07/Marvel-Character-deadpool-png-picture-402x750.png" },
        { title: "PixelPool", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_01.webp" },
        { title: "Variant", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_02.webp" },
        { title: "Deadpool Nerdy", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_03.webp" },
        { title: "BabyPool", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_04.webp", img2: "https://www.pikpng.com/pngl/b/475-4750463_deadpool-posing-cosbaby-deadpool-cosbaby-clipart.png" },
        { title: "Venomized", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_05.webp", img2: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2047868-eb3f-45a9-84ac-a12510bfedd9/dg41u8n-11f5e065-d433-4969-a362-4a96d32fb2af.png/v1/fill/w_1280,h_600/venompool__by_dracoawesomeness_dg41u8n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYzIwNDc4NjgtZWIzZi00NWE5LTg0YWMtYTEyNTEwYmZlZGQ5XC9kZzQxdThuLTExZjVlMDY1LWQ0MzMtNDk2OS1hMzYyLTRhOTZkMzJmYjJhZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qrEXBRG45PpRjS1eELEFkM3vkd7V_eqN6Lf-78nxNAg" },
        { title: "Max Grecke", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_06.webp" },
        { title: "Penny Arcade", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_07.webp" },
        { title: "Skottie Young", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_08.webp" },
        { title: "Post Apocalyptic", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_09.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84968ac0-0811-4b45-9917-3d75a33c05c8/dg32h05-29c33c5b-d557-4f48-9105-bb821fab51aa.jpg/v1/fit/w_828,h_1256,q_70,strp/the_insane_renegade__world_war_deadpool_by_boomlabstudio_dg32h05-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2MCIsInBhdGgiOiJcL2ZcLzg0OTY4YWMwLTA4MTEtNGI0NS05OTE3LTNkNzVhMzNjMDVjOFwvZGczMmgwNS0yOWMzM2M1Yi1kNTU3LTRmNDgtOTEwNS1iYjgyMWZhYjUxYWEuanBnIiwid2lkdGgiOiI8PTg5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IoqYMxSlTtf1fHdjOMUVYkhvKjh8HH3dAFVCWkJ4O1I"},
        { title: "Jim Lee", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_10.webp", img2:"https://comichub.blob.core.windows.net/high/6a78a5a4-3a40-4a94-be1a-9a35082c60e8.jpg"},
        { title: "Peach Momoko", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_11.webp" },
        { title: "Midnight Suns", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_12.webp" },
        { title: "Variant", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_18.webp" },
        { title: "Pandart", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_20.webp", img2:"https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2024/07/marvel-snap-julio-2024-temporada-deadpool-wolverine.jpg?resize=860%2C575&ssl=1"},
        { title: "Headpool", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_22.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/033a2d48-6ee9-48d6-8244-b750df1b581b/dh7q02r-17a1a24b-55fb-45fe-84d4-7684325b2163.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzM2EyZDQ4LTZlZTktNDhkNi04MjQ0LWI3NTBkZjFiNTgxYlwvZGg3cTAyci0xN2ExYTI0Yi01NWZiLTQ1ZmUtODRkNC03Njg0MzI1YjIxNjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LL4gO5wmWzZOLBDjxoQ2i7PHXK_Ns5nmiv8nA1HuEGk"},
        { title: "Dogpool", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_23.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf853092-d54d-4bd0-842b-1facd2b89c32/dhbkrx8-400299d1-3d3b-4ddd-bc08-187bca79e55b.png/v1/fill/w_851,h_939/dogpool__dpaw_png_by_iwasboredsoididthis_dhbkrx8-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMzIiLCJwYXRoIjoiXC9mXC9iZjg1MzA5Mi1kNTRkLTRiZDAtODQyYi0xZmFjZDJiODljMzJcL2RoYmtyeDgtNDAwMjk5ZDEtM2QzYi00ZGRkLWJjMDgtMTg3YmNhNzllNTViLnBuZyIsIndpZHRoIjoiPD05MTgxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2D3wgW-x3Nrmqo913ERQkYwqvSdsWX8i4tPWpfl8w4E"},
        { title: "Nicepool", img1: "https://snapjson.untapped.gg/art/render/framebreak/common/512/Deadpool_24.webp", img2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f091ec3-dbfb-48b4-b63c-d4af1b16e6dd/dhykrg1-ad9e6c4a-ba3f-4c24-b71a-2afdd78a891b.png/v1/fit/w_423,h_963/nicepool_png_by_thepngguy_dhykrg1-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYzIiwicGF0aCI6IlwvZlwvMGYwOTFlYzMtZGJmYi00OGI0LWI2M2MtZDRhZjFiMTZlNmRkXC9kaHlrcmcxLWFkOWU2YzRhLWJhM2YtNGMyNC1iNzFhLTJhZmRkNzhhODkxYi5wbmciLCJ3aWR0aCI6Ijw9NDIzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Gl6Gsu_nxiIIMrq0Yht1dszllGZZlsb-b-VhcCAqiLk"}
    ];
    return (
        <div className="my-style flex border-solid border-2 border-red-900 rounded-lg items-center mx-10 flex-wrap justify-center bg-white mb-6 p-3 py-12">
            {card.map(c => (
                <DeadPoolCard title={c.title} image1={c.img1} image2={c.img2}></DeadPoolCard>
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





// "https://w7.pngwing.com/pngs/154/145/png-transparent-deadpool-film-comics-deadpool-fictional-character-film-protective-gear-in-sports-thumbnail.png"
//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/640fc29b-fc41-4cbf-aed1-c3634954d76b/dhbk31r-f515b581-8762-4620-81d6-95f95f97edd5.png/v1/fill/w_894,h_894/deadpool_and_wolverine__babypool_png_by_djjdndmxksm_dhbk31r-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY0MGZjMjliLWZjNDEtNGNiZi1hZWQxLWMzNjM0OTU0ZDc2YlwvZGhiazMxci1mNTE1YjU4MS04NzYyLTQ2MjAtODFkNi05NWY5NWY5N2VkZDUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mOxltw2O3N2mDzGWBQ1l62Wc6jHFk-5_H-_LBWtP_ws
