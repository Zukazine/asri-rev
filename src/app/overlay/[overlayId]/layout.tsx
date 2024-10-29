"use client"

import {
  ResizablePanel, 
  ResizableHandle, 
  ResizablePanelGroup 
} from "@/components/ui/resizable"

import { OverlaySidebar } from "./overlay-sidebar"

interface GeoplatformLayoutProps {
  children: React.ReactNode
}

const GeoplatformLayout = ({
  children
}: GeoplatformLayoutProps) => {
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
          <OverlaySidebar />
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