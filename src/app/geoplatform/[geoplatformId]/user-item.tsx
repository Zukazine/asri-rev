import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useGeoplatformId } from "@/hooks/use-geoplatform-id";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const userItemVariants = cva(
  "flex items-center gap1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden",
  {
    variants: {
      variant: {
        default: "text-[#f9edffcc]",
        active: "text-[#481349] bg-white/90 hover:bg-white/90"
      },
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface UserItemProps {
  label?: string
  image?: string
  variant?: VariantProps<typeof userItemVariants>["variant"]
}

export const UserItem = ({
  label = "Member",
  image,
  variant
}: UserItemProps) => {
  const geoplatformId = useGeoplatformId()
  const avatarFallback = label.charAt(0).toUpperCase()

  return (
    <Button 
      variant="transparent" 
      size="default" 
      className={cn(userItemVariants({ variant: variant }))}
      asChild
    >
      <Link href={`/geoplatform/${geoplatformId}`}>
        <Avatar className="size-5 rounded-md mr-1">
          <AvatarImage className="rounded-md" src={image}/>
          <AvatarFallback className="rounded-md bg-sky-500 text-white text-xs">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm truncate">{label}</span>
      </Link>
    </Button>
  )
}