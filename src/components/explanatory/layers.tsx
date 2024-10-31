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
              Paramater 1: Indeks Neraca Air
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
              Paramater 2: Indeks Kebutuhan Air
            </p>
            <img src="/explanatory/layer-2.png" className="w-[500px]" />
            <p className="text-[15px] w-[90%] text-gray-600">
              Parameter indeks kebutuhan air (Water Demand Index) ditentukan
              menggunakan beberapa variabel utama: kelembaban tanah, indeks
              vegetasi, dan Growing Degree Days (GDD). Data kelembaban tanah
              diperoleh dari produk NASA, Soil Moisture Active Passive (SMAP),
              yang memanfaatkan radiasi gelombang mikro yang dipancarkan tanah
              pada panjang gelombang mikro L-band (frekuensi 1-2 GHz). Tingkat
              radiasi ini dipengaruhi oleh jumlah air dalam tanah; semakin
              kering tanah, semakin banyak energi gelombang mikro yang
              dipancarkan, sehingga SMAP dapat mengukur kelembaban tanah secara
              efektif. Indeks vegetasi diperoleh dari pengolahan data satelit,
              yaitu Landsat-8 dengan resolusi 30 meter melalui kanal merah (4)
              dan kanal NIR (5), serta MODIS dengan resolusi 250 meter. Data ini
              mencerminkan tingkat kesehatan dan kepadatan vegetasi yang
              berhubungan langsung dengan kebutuhan air. Sementara itu, Growing
              Degree Days (GDD) digunakan untuk memperkirakan kebutuhan air
              berdasarkan suhu yang terakumulasi selama masa pertumbuhan
              tanaman. GDD dihitung dengan rata-rata suhu harian, yakni
              menjumlahkan suhu minimum dan maksimum lalu membaginya dengan dua.
              Ketiga data ini menjadi dasar dalam membangun indeks kebutuhan
              air, yang penting untuk memahami permintaan air di area pertanian.
            </p>
          </div>
          <div className="text-white min-h-screen flex flex-col justify-center gap-6">
            <p className="text-4xl font-bold font-gilroy text-gray-600">
              Parameter 3: Indeks Kesehatan Vegetasi
            </p>
            <img
              src="/explanatory/layer-3.png"
              className="w-[420px] rounded-3xl"
            />
            <p className="text-[15px] w-[90%] text-gray-600">
              Parameter ketiga, yaitu kondisi kesehatan vegetasi, ditentukan
              menggunakan data indeks vegetasi dari produk MODIS yang membantu
              dalam menghitung Vegetation Condition Index (VCI). VCI berfungsi
              sebagai indikator pemantauan kekeringan dengan membandingkan nilai
              indeks vegetasi normalisasi (NDVI) saat ini dengan nilai minimum
              dan maksimum NDVI dari tahun sebelumnya di area tertentu.
              Perbandingan ini memungkinkan identifikasi dini pada kondisi
              kekeringan, di mana nilai VCI yang lebih rendah menunjukkan bahwa
              vegetasi mungkin mengalami stres akibat kekeringan. Dengan
              demikian, VCI memberikan gambaran dinamis tentang kesehatan
              vegetasi yang relevan dengan kondisi air di suatu wilayah, menjadi
              komponen penting dalam analisis kebutuhan air.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
