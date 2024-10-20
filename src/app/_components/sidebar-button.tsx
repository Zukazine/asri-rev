import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import Link from "next/link";
import { IconType } from "react-icons/lib"

interface SidebarButtonProps {
  icon: LucideIcon | IconType
  label: string
  link?: string
  isActive?: boolean
}

export const SidebarButton = ({
  icon: Icon,
  label,
  link,
  isActive
}: SidebarButtonProps) => {
  return (
    <Link 
      // janlup link default diganti
      href={link ? link : '/geoplatform'}
      className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group"
    >
      <Button
        variant="transparent"
        className={cn("size-9 p-2 group-hover:bg-accent/15 group-hover:backdrop-blur-xl",
          isActive && 'bg-accent/20 backdrop-blur-xl'
        )}
      >
        <Icon className="size-5 text-white group-hover:scale-110 transitio-all"/>
      </Button>
      <span className="text-[11px] text-white group-hover:text-accent">
        {label}
      </span>
    </Link>
  )
}