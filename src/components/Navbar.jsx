import Link from "next/link";


const Navbar = () => {
    return (
        <div className="my-5">
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      
                <Link href="/" className="text-xl font-semibold">
                  TilesGallery
                </Link>

                <div className="flex gap-4 text-gray-600">
                  <Link href="/">Home</Link>
                  <Link href="/all-tiles">All Tiles</Link>
                </div>

                <div> 
                    <Link
                      href="/login"
                      className="px-4 py-2 bg-black text-white rounded-lg"
                    >
                      Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;