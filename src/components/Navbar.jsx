"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  console.log(user, "session")

    return (
        <div className="my-5">
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      
                <Link href="/" className="text-xl font-semibold">
                  TilesGallery
                </Link>

                <div className="flex gap-4 text-gray-600">
                  <Link href="/">Home</Link>
                  <Link href="/all-tiles">All Tiles</Link>
                  {user && <Link href="/my-profile">Profile</Link>}
                </div>

                <div className="flex items-center gap-4">
                    {isPending ? ( 
                      "Loading..."
                     ) : user ? (
                      <>
                      <img src={user?.image} alt="UserAvatar" className=" w-8 h-8 rounded-full" />

                      <button onClick={async () => await authClient.signOut()}>Logout</button>
                      </>
                    ) : (
                      <Link href="/login">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;