import Banner from "@/components/Banner";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const res = await fetch("http://localhost:5000/products")
  const tiles = await res.json()

  return (
   <div className="container mx-auto space-y-5">
      <Banner></Banner>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          tiles.slice(0, 4).map(tile => (
           <div
            key={tile.id}
            className="bg-white p-4 rounded-xl shadow-lg space-y-2"
          >
            <Image src={tile.image} alt={tile.title} width={300} height={200} className="rounded-lg mx-auto" />
            <h2 className="mt-3 text-xl font-semibold">{tile.title}</h2>
            <p className="text-gray-600 line-clamp-1">{tile.description}</p>

            <Link
              href={`/tile/${tile.id}`}
              className="text-sm text-blue-500"
            >
              <Button variant="primary">View Details →</Button>
            </Link>
          </div>
        ))
        }
      </div>

   </div>
  );
}
