"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  console.log(user, "session")

    return (
        <div className="mb-10">
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      
                <Link href="/" className="text-xl font-semibold">
                  TilesGallery
                </Link>

                <div className="flex gap-4 text-gray-600">
                  <Link href="/">Home</Link>
                  <Link href="/all-tiles">All Tiles</Link>
                  <Link href="/my-profile">Profile</Link>
                </div>

                <div className="flex items-center gap-4">
                    {isPending ? ( 
                      <div className="flex flex-col items-center gap-2">
                         <Spinner color="success" />
                         <span className="text-xs text-muted">Success</span>
                      </div>
                     ) : user ? (
                      <>
                      <Avatar className="h-10 w-10">
                         <Avatar.Image 
                            alt="John Doe" 
                            src={user?.image}
                            referrerPolicy="no-referrer" />
                         <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                       </Avatar>

                      <Button variant="danger" onClick={async () => await authClient.signOut()}>SignOut</Button>
                      </>
                    ) : (
                      <Button variant="primary">
                        <Link href="/login">Sign In</Link>
                      </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;