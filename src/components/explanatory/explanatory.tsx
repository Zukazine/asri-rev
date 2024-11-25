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
          "Irigasi di Indonesia memainkan peran penting, bukan hanya dalam meningkatkan produktivitas pertanian tetapi juga dalam mendorong pertumbuhan ekonomi, terbukti dengan penurunan angka kemiskinan dari 40,8% menjadi 11,4% antara 1970 hingga 1990 (Hussain et al., 2006) serta kontribusi 4% pada PDB pada tahun 2022. Namun, sistem irigasi nasional menghadapi tantangan serius, antara lain kondisi infrastruktur yang rusak sebesar 46% — dengan 7,5% di bawah pengelolaan pusat — serta kapasitas tampung per kapita hanya 56,89 m³/detik, jauh di bawah standar ideal 1.979 m³/detik (Audit Kinerja Jaringan Irigasi, 2014)."
        } 
      />
      <Layers />
      <Descriptive
        logo={"/image/logo-2.svg"}
        title={"Kesimpulan"}
        description={
          "Hasil penelitian ini ditunjukkan bahwa terdapat 24.6% area pertanian yang memiliki prioritas tinggi dalam penetapan pembangunan infrastruktur baru dengan tiga provinsi tertinggi yakni Nusa Tenggara Timur, Daerah Istimewa Yogyakarta, dan Jawa Timur. Berikutnya terdapat 10.2% area infrastruktur daerah irigasi yang tergolong perlu dievaluasi dengan tiga provinsi tertinggi yakni Sumatera Barat, Bengkulu, dan Jambi."
        }
      />
    </div>
  );
};
