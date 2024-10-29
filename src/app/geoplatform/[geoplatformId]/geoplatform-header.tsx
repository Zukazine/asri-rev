import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu"
import { Hint } from "@/components/hint"
import { Doc } from "../../../../convex/_generated/dataModel"
import { ChevronDownIcon, ListFilter } from "lucide-react"
import { HiChevronDoubleLeft } from "react-icons/hi" 
import { useMinimizeSidebar } from "@/features/geoplatforms/store/use-minimize-sidebar"

interface GeoplatformHeaderProps {
  geoplatform: Doc<"geoplatforms">
  isAdmin: boolean
}

export const GeoplatformHeader = ({ geoplatform, isAdmin }: GeoplatformHeaderProps) => {
  const [, setMinimize] = useMinimizeSidebar()

  return (
    <>
      <div className="flex items-center justify-between px-4 h-[49px] gap-0.5 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" className="font-semibold text-lg w-auto p-1.5 overflow-hidden" size="sm">
              {/* Name of platform */}
              {/* <span className="truncate">{geoplatform?.name}</span> */}
              <span className="truncate">Geoplatform</span>
              <ChevronDownIcon className="size-4 ml-1 shrink-0"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-64">
            <DropdownMenuItem
              className="cursor-pointer capitalize"
            >
              <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                {geoplatform.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">{geoplatform.name}</p>
                <p className="text-xs text-muted-foreground">Active Workspace </p>
              </div>
            </DropdownMenuItem>
            {isAdmin && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => {}}
                >
                  Invite people to {geoplatform.name}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer py-2"
                  onClick={() => {}}
                >
                  Preferences
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-0.5">
          <Hint label="Filter workspaces" side="bottom">
            <Button variant="transparent" size="iconSm">
              <ListFilter className="size-4"/>
            </Button>
          </Hint>
          <Hint label="Minimize sidebar" side="bottom">
            <Button 
              variant="transparent" 
              size="iconSm"
              onClick={() => {setMinimize(true)}}
            >
              <HiChevronDoubleLeft className="size-4"/>
            </Button>
          </Hint>
        </div>
      </div>
    </>
  )
}