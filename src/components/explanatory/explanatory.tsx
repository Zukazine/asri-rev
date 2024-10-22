import { Descriptive } from "./descriptive";
import { EarthEngine } from "./earth-engine";
import { Layers } from "./layers";

export const Explanatory = () => {
  return (
    <div className="h-full border ml-2 rounded-xl bg-neutral-300 overflow-y-scroll relative">
      <EarthEngine />
      <Descriptive 
        logo={"/image/logo-1.svg"}
        title={"Latar Belakang"} 
        image={"/image/irigasi-1.jpg"} 
        description={
          "Penelitian saya menggunakan Google Earth Engine (GEE) bertujuan memetakan wilayah prioritas irigasi dengan menganalisis data geospasial untuk mendukung pengelolaan sumber daya air secara berkelanjutan."
        } 
      />
      <Layers />
      <Descriptive 
        logo={"/image/logo-2.svg"} 
        title={"Kesimpulan"}
        description={
          "Kesimpulannya, penelitian ini menggunakan Google Earth Engine (GEE) untuk memetakan wilayah prioritas irigasi secara efisien. Hasilnya diharapkan dapat mendukung pengelolaan air yang berkelanjutan dan membantu perencanaan irigasi yang lebih efektif."
        } 
      />
    </div>
  );
};
