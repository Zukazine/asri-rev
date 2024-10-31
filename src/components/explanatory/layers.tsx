import React from "react";
import { OverlayIllustration } from "./overlay-illustration";

export const Layers = () => {
  return (
    <div className="grid grid-cols-2 h-[300vh] relative">
      <div className="sticky top-0 left-0 w-full h-screen ">
        <div className="h-full flex items-center justify-center">
          {/* <OverlayIllustration /> */}
          <div className="size-48">
            <img src="/image/overlay.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="grid grid-rows-3 ">
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              # Layer 1
            </p>
            <img src="/explanatory/layer-1.png" className="w-[500px]" />
            <p className="text-[15px] w-[90%] text-gray-600">
              Data untuk parameter indeks neraca air meliputi presipitasi dan
              evapotranspirasi, yang keduanya berperan penting dalam menghitung
              keseimbangan air. Data presipitasi berasal dari CHIRPS dengan
              resolusi spasial sekitar 5 km, yang diperoleh melalui integrasi
              antara data stasiun meteorologi dan data satelit. Dataset ini
              menyediakan estimasi curah hujan harian dengan deret waktu yang
              panjang, memungkinkan analisis pada resolusi spasial yang cukup
              tinggi. Sementara itu, data evapotranspirasi diperoleh dari produk
              MODIS dengan resolusi 1 km. Evapotranspirasi (ET) mencakup
              penguapan air dari tanaman, permukaan tanah, dan air tanah, yang
              mencerminkan pertukaran energi dan massa antara tanah dan
              atmosfer. Dengan memadukan kedua variabel ini, estimasi neraca air
              dapat dihitung secara lebih akurat, memberikan gambaran yang lebih
              komprehensif terkait kondisi ketersediaan air di suatu wilayah.
            </p>
          </div>
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              # Layer 2
            </p>
            <img
              src="/explanatory/layer-2.jpeg"
              className="w-[420px] rounded-3xl"
            />
            <p className="text-[15px] w-[90%] text-gray-600">
              WBI memberikan informasi mengenai keseimbangan air di suatu
              kawasan. Indeks ini mengukur interaksi antara input air (seperti
              curah hujan) dan output (seperti evaporasi dan aliran permukaan).
              Analisis WBI sangat penting untuk pengelolaan sumber daya air dan
              pertanian.
            </p>
          </div>
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              # Layer 3
            </p>
            <img
              src="/explanatory/layer-3.jpeg"
              className="w-[420px] rounded-3xl"
            />
            <p className="text-[15px] w-[90%] text-gray-600">
              SMI digunakan untuk mengukur kelembapan tanah, yang sangat penting
              untuk pertumbuhan tanaman dan kesehatan tanah. Indeks ini
              memberikan wawasan tentang kemampuan tanah dalam menahan air, yang
              berpengaruh terhadap irigasi dan ketahanan tanaman terhadap
              kekeringan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
