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
          "Penelitian ini bertujuan untuk mengembangkan metodologi multiindeks dan analisis geospasial untuk mengidentifikasi prioritas dalam pengembangan infrastruktur irigasi dan evaluasi efisiensi penggunaan air. Dengan memanfaatkan data kelembaban tanah, indeks vegetasi, Growing Degree Days, neraca air, dan kondisi vegetasi, penelitian ini memetakan area-area yang membutuhkan prioritas alokasi irigasi berdasarkan kebutuhan air, kesehatan vegetasi, dan ketersediaan air. Pendekatan ini juga memberikan analisis evaluasi holistik terhadap efektivitas infrastruktur irigasi, membantu dalam alokasi sumber daya yang lebih efisien, dan mendorong pembangunan pertanian yang berkelanjutan di Indonesia. Hasil penelitian ini ditunjukkan bahwa terdapat 24.6% area pertanian yang memiliki prioritas tinggi dalam penetapan pembangunan infrastruktur baru dengan tiga provinsi tertinggi yakni Nusa Tenggara Timur, Daerah Istimewa Yogyakarta, dan Jawa Timur. Berikutnya terdapat 10.2% area infrastruktur daerah irigasi yang tergolong perlu dievaluasi dengan tiga provinsi tertinggi yakni Sumatera Barat, Bengkulu, dan Jambi. Dengan memperhatikan hasil evaluasi dan prioritas yang ditetapkan, langkah-langkah strategis dapat dirumuskan untuk mengoptimalkan penggunaan sumber daya air, meningkatkan produksi pertanian, dan mencapai kemandirian pangan yang berkelanjutan di Indonesia. Hasil penelitian ini memberikan landasan yang kokoh bagi kebijakan dan tindakan lanjutan dalam pengembangan infrastruktur irigasi yang berdaya guna dan berkelanjutan di masa mendatang."
        }
      />
    </div>
  );
};
