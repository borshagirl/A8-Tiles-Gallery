import Link from "next/link";


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      
                <Link href="/" className="text-xl font-semibold">
                  TilesGallery
                </Link>

                <div className="hidden md:flex gap-6 text-gray-600">
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