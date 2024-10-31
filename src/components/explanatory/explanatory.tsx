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
          "Penelitian saya menggunakan Google Earth Engine (GEE) bertujuan memetakan wilayah prioritas irigasi dengan menganalisis data geospasial untuk mendukung pengelolaan sumber daya air secara berkelanjutan."
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
