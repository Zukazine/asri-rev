"use client"

import {
  ResizablePanel, 
  ResizableHandle, 
  ResizablePanelGroup 
} from "@/components/ui/resizable"

import { SideBar } from "./sidebar"
import { GeoplatformSidebar } from "./geoplatform-sidebar"

interface GeoplatformLayoutProps {
  children: React.ReactNode
}

const GeoplatformLayout = ({
  children
}: GeoplatformLayoutProps) => {
  return(
    <div className="h-full overflow-hidden">
      <div className="flex h-[calc(100vh-1.5%)] mt-2">
        <SideBar />
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
    </div>
  )  
}


export default GeoplatformLayout;