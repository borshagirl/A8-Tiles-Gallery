"use client"
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    console.log(user)

    return (
        <div className="my-5">
            <Card className="max-w-90 mx-auto flex flex-col items-center border">
                 <Avatar className="h-20 w-20">
                   <Avatar.Image 
                      alt="John Doe" 
                      src={user?.image}
                      referrerPolicy="no-referrer" />
                   <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                 </Avatar>

                 <h2 className="font-bold text-xl">{user?.name}</h2>
                 <p className="text-muted">{user?.email}</p>
                 <UpdateUserModal></UpdateUserModal>
            </Card>
        </div>
    );
};

export default MyProfilePage;