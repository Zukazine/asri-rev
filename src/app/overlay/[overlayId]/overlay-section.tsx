import { Button } from "@/components/ui/button"
import { FaCaretDown } from "react-icons/fa"
import { useToggle } from "react-use"
import { cn } from "@/lib/utils"
interface GeoplatformSectionProps {
  children: React.ReactNode
  label: string
}

export const OverlaySection = ({
  children,
  label
}: GeoplatformSectionProps) => {
  const [on, toggle] = useToggle(true)
  
  return(
    <div className="flex flex-col px-2 mt-3 z-10">
      <div className="flex items-center px-3.5 group mb-1.5">
        <Button variant="transparent" size="default" className="p-0.5 text-sm text-[#f9edffcc] shrink-0 size-6" onClick={toggle}>
          <FaCaretDown 
            className={cn('size-4 transition-transform',
              on && '-rotate-90'
            )}
          />
        </Button>
        <Button variant="transparent" size="default" className="px-1.5 text-lg font-semibold text-[#f9edffcc] group h-[28px] justify-start overflow-hidden items-center">
          <span className="truncate">{label}</span>
        </Button>
      </div>
      {on && children}
    </div>
  )
}