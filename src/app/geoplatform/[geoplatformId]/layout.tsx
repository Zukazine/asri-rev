import { SideBar } from "./sidebar"

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
        {children}
      </div>
    </div>
  )  
}

export default GeoplatformLayout;