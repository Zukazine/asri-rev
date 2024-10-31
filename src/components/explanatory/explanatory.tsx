import { Descriptive } from "./descriptive";
import { EarthEngine } from "./earth-engine";
import { Layers } from "./layers";

export const Explanatory = () => {
  return (
    <div className="h-full border ml-2 rounded-xl bg-[#E5ECEF] overflow-y-scroll relative">
      <EarthEngine />
      <Descriptive
        logo={"/image/logo-1.svg"}
        title={"Latar Belakang"}
        image={"/image/irigasi-1.jpg"}
        description={
          "Irigasi di Indonesia memainkan peran penting, bukan hanya dalam meningkatkan produktivitas pertanian tetapi juga dalam mendorong pertumbuhan ekonomi, terbukti dengan penurunan angka kemiskinan dari 40,8% menjadi 11,4% antara 1970 hingga 1990 (Hussain et al., 2006) serta kontribusi 4% pada PDB pada tahun 2022. Namun, sistem irigasi nasional menghadapi tantangan serius, antara lain kondisi infrastruktur yang rusak sebesar 46% — dengan 7,5% di bawah pengelolaan pusat — serta kapasitas tampung per kapita hanya 56,89 m³/detik, jauh di bawah standar ideal 1.979 m³/detik (Audit Kinerja Jaringan Irigasi, 2014). Untuk mengatasi tantangan ini, berbagai kebijakan dan strategi diterapkan, termasuk pengembangan sistem informasi manajemen irigasi yang memanfaatkan teknologi geospasial, seperti data satelit observasi bumi, untuk mengidentifikasi area irigasi prioritas dan meningkatkan efisiensi penggunaan air (Paolini et al., 2022). Tiga parameter utama — kelembaban tanah, indeks vegetasi, dan Growing Degree Days — diintegrasikan untuk memperkirakan kebutuhan air pertanian (Singh dan Das, 2022), sementara neraca air dan indeks kondisi vegetasi membantu memantau ketersediaan air dan kekeringan (Poortinga et al., 2019; Kogan, 1995). Dengan pendekatan berbasis data ini, strategi optimasi irigasi diharapkan dapat meningkatkan keberlanjutan pengelolaan air di sektor pertanian."
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
