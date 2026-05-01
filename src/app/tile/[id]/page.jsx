import Image from "next/image";
import Link from "next/link";


const TileDetailsPage = async ({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const tile = await res.json()


    return (
        <div>details Page</div>
    );
};

export default TileDetailsPage;