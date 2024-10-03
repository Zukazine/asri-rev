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
    <div className="h-full">
      <div className="flex h-[calc(100vh-2.5%)]">
        <SideBar />
        <ResizablePanelGroup
          direction="horizontal"
          autoSaveId="ca-workspace-layout"
        >
          <ResizablePanel
            defaultSize={20}
            minSize={11}
            className="bg-[#5E2C5F]"
          >
            <GeoplatformSidebar />
          </ResizablePanel>
          <ResizableHandle/>
          <ResizablePanel
            minSize={20}
          >
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )  
}


export default GeoplatformLayout;