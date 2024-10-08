import { createContext, useState, useContext } from "react";

interface SidebarContextProps {
  isMinimized: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const SidebarProvider = ({
  children
}: {children: React.ReactNode}) => {
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ isMinimized, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined){
    throw new Error("Provider got you dislike!")
  }

  return context;
}

