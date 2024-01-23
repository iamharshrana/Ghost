import {cva, type VariantProps} from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const avatarSize= cva(
    "",
    {
        variants:{
            size:{
                default:"h-8 w-8",
                lg: "h-14 w-14"
            },
        },
        defaultVariants:{
            size: "default"
        }
    }
)


interface UserAvatarProps{
    username: string;
    imageUrl: string;
    isLive?: boolean;
    showBadge?: boolean;
};

export const UserAvatar = ({

}: UserAvatarProps) => {
    return(
        <div>
            UserAvatar
        </div>
    )
}