import React from "react";

export const Layers = () => {
  return (
    <div className="grid grid-cols-2 h-[300vh] relative">
      <div className="sticky top-0 left-0 w-full h-screen ">
        <div className="h-full flex items-center justify-center">
          <div className="size-48">
            <img src="/image/overlay.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="grid grid-rows-3 ">
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              Paramater 1: Indeks Neraca Air
            </p>
            <img src="/explanatory/layer-1.png" className="w-[320px] rounded-3xl ml-4" />
            <p className="text-[15px] w-[90%] text-gray-600 ml-4">
              Data untuk parameter indeks neraca air meliputi <span className="font-bold">presipitasi dan evapotranspirasi</span>, yang keduanya berperan penting dalam menghitung keseimbangan air. Data presipitasi berasal dari CHIRPS dengan resolusi 5 km dan data evapotranspirasi diperoleh dari produk MODIS dengan resolusi 1 km. Dengan memadukan kedua variabel ini, estimasi neraca air dapat dihitung secara lebih akurat, memberikan gambaran yang lebih komprehensif terkait kondisi ketersediaan air di suatu wilayah.
            </p>
          </div>
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              Paramater 2: Indeks Kebutuhan Air
            </p>
            <img src="/explanatory/layer-2.png" className="w-[320px] rounded-3xl ml-4" />
            <p className="text-[15px] w-[90%] text-gray-600">
              Parameter indeks kebutuhan air (Water Demand Index) ditentukan menggunakan beberapa variabel utama: <span className="font-bold">kelembaban tanah, indeks vegetasi, dan Growing Degree Days (GDD)</span>. Data kelembaban tanah diperoleh dari produk NASA, Soil Moisture Active Passive (SMAP), yang memanfaatkan radiasi gelombang mikro yang dipancarkan tanah pada panjang gelombang mikro L-band (frekuensi 1-2 GHz). Indeks vegetasi diperoleh dari pengolahan data satelit, yaitu Landsat-8 dengan resolusi 30 meter, serta MODIS dengan resolusi 250 meter. Sementara itu, Growing Degree Days (GDD) digunakan untuk memperkirakan kebutuhan air berdasarkan suhu yang terakumulasi selama masa pertumbuhan tanaman.
            </p>
          </div>
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              Parameter 3: Indeks Kesehatan Vegetasi
            </p>
            <img
              src="/explanatory/layer-3.png"
              className="w-[320px] rounded-3xl ml-4"
            />
            <p className="text-[15px] w-[90%] text-gray-600">
              Parameter ketiga, yaitu kondisi kesehatan vegetasi, ditentukan menggunakan data <span className="font-bold">indeks vegetasi</span> dari produk MODIS yang membantu dalam menghitung Vegetation Condition Index (VCI). VCI berfungsi sebagai indikator pemantauan kekeringan dengan membandingkan nilai indeks vegetasi normalisasi (NDVI) saat ini dengan nilai minimum dan maksimum NDVI dari tahun sebelumnya di area tertentu. Perbandingan ini memungkinkan identifikasi dini pada kondisi kekeringan, di mana nilai VCI yang lebih rendah menunjukkan bahwa vegetasi mungkin mengalami stres akibat kekeringan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
