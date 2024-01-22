import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { error } from "console";

export const getSelf =async () => {
    const self = await currentUser();
    if( !self || !self.username){
        throw new Error("unauthorized");
    }

    const user = await db.user.findUnique({
        where: { externalUserId: self.id },
    });

    if(!user){
        throw new Error("not found");
    }

    return user;
}