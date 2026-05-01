import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const TileCard = ({tile}) => {
    return (
         <div
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
    );
};

export default TileCard;