"use client";

import { OverlaySection } from "./overlay-section";
import { SidebarItem } from "./sidebar-item";
import { OverlayHeader } from "./overlay-header";
import { Glasses } from "@/components/glasses";
import { useLayers } from "@/features/overlay/store/use-layers";

export const OverlaySidebar = () => {
  const [smi, setSmi] = useLayers(0)
  const [wbi, setWbi] = useLayers(1)
  const [vci, setVci] = useLayers(2)

  return (
    <div
      className="flex flex-col relative h-full group"
      style={{
        backgroundImage: "url('/image/gal-1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundPositionX: "40%",
      }}
    >
      <OverlayHeader />

      <OverlaySection label="Jatim Overlay">
        <SidebarItem 
          label={"Neraca Air"}
          handleShow={() => {setWbi(!wbi)}}
        />
        <SidebarItem 
          label={"Kondisi Kesehatan Vegetasi"}
          handleShow={() => {setSmi(!smi)}} 
        />
        <SidebarItem 
          label={"Kelembaban Tanah"} 
          handleShow={() => {setVci(!vci)}}
        />
      </OverlaySection>
      <Glasses className="z-1" />
    </div>
  );
};
