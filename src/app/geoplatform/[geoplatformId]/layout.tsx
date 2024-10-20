"use client"

import {
  ResizablePanel, 
  ResizableHandle, 
  ResizablePanelGroup 
} from "@/components/ui/resizable"

import { GeoplatformSidebar } from "./geoplatform-sidebar"
import { useMinimizeSidebar } from "@/features/geoplatforms/store/use-minimize-sidebar"
import { Button } from "@/components/ui/button"
import { HiChevronDoubleLeft } from "react-icons/hi"

interface GeoplatformLayoutProps {
  children: React.ReactNode
}

const GeoplatformLayout = ({
  children
}: GeoplatformLayoutProps) => {
  const [minimize, setMinimize] = useMinimizeSidebar()
  
  return(
    <div className="h-full overflow-hidden">
      <ResizablePanelGroup
        direction="horizontal"
        autoSaveId="ca-workspace-layout"
      >
        <ResizablePanel
          defaultSize={20}
          minSize={11}
          className="rounded-xl"
        >
          <GeoplatformSidebar />
        </ResizablePanel>
        <ResizableHandle className="bg-transparent"/>
        <ResizablePanel
          defaultSize={80}
          minSize={60}
        >
          {children}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )  
}


export default GeoplatformLayout;