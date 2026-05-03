import TileCard from "@/components/TileCard";
import { Button } from "@heroui/react";

export const metadata = {
  title: "Tiles Gallery - All Tiles",
  description: "Premium tiles with modern aesthetic designs",
};


const AllTilesPage = async ({searchParams}) => {
    const params = await searchParams;

    const res = await fetch("https://tile-gallery-json-server.onrender.com/products", {
        cache: "no-store"
    })

    const tiles = await res.json()

    const search = (params?.search || "")
        .toLowerCase()
        .trim()

        const words = search.split(" ").filter(Boolean)

    const filtered = tiles.filter(tile =>
        words.length === 0 ||
        words.every(word =>
            tile.title.toLowerCase().includes(word)
        )
        
    )


    return (
        <div>
       <div className="container mx-auto">

      <div className="flex justify-end">
        <form method="GET" className="mb-6 flex items-center gap-2">
        <input
          name="search"
          placeholder="Search tiles..."
          defaultValue={search}
          className="w-full p-2 border rounded-xl"
        />
        <Button variant="primary" type="submit">Search</Button>
      </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(tile => (
          <TileCard key={tile.id} tile={tile}></TileCard>
        ))}
      </div>
    </div>
    </div>
    );
};

export default AllTilesPage;