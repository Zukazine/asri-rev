import { LucideIcon } from "lucide-react";
import { Id } from "../../../../convex/_generated/dataModel";
import { IconType } from "react-icons/lib";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useGeoplatformId } from "@/hooks/use-geoplatform-id";

const SidebarItemVariants = cva(
  "flex items-center gap-1.5 justify-start font-normal h-7 px-[18px] py-4 text-sm overflow-hidden",
  {
    variants: {
      variant: {
        default: "text-[#f9edffcc]",
        active: "text-[#481349] bg-white/90 hover:bg-white/90",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface SidebarItemProps {
  label: string;
  id: string;
  icon: LucideIcon | IconType
  variant?: VariantProps<typeof SidebarItemVariants>["variant"],
  type? : 'Explanatory' | 'Story' | 'Document'
}

export const SidebarItem = ({
  label,
  id,
  icon: Icon,
  variant,
  type
}: SidebarItemProps) => {
  const geoplatformId = useGeoplatformId()

  return (
    <Button 
      variant="transparent" 
      size="sm" 
      asChild 
      className={cn(SidebarItemVariants({ variant: variant }))}
    >
      <Link href={`/geoplatform/${geoplatformId}/${type?.toLowerCase()}/1`}>
        <Icon className="size-3.5 mr-1 shrink-0"/>
        <span className="text-sm truncate">{label}</span>
      </Link>
    </Button>
  )
}