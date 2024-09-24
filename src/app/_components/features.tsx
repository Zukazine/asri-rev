"use client";

import { useEffect, useRef, useState } from "react";

// Define the types for the chapters
interface Chapter {
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
}

interface FeaturesComponentProps {
  map: any; // Type can be improved if you have a specific type for your map
}

const FeaturesComponent = ({ map }: FeaturesComponentProps) => {
  const featureElement = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<string>("BWS"); // Default active chapter

  const chapters: Record<string, Chapter> = {
    BWS: {
      center: [122.998946037506, 0.6322912120126575],
      zoom: 18,
      pitch: 20,
      bearing: 27,
    },
    alopohu_1: {
      center: [122.9235867, 0.5965877],
      zoom: 16,
      pitch: 0,
      bearing: 150,
    },
    alopohu_2: {
      center: [122.9260419, 0.6033611],
      zoom: 16,
      pitch: 40,
      bearing: 90,
    },
    lomaya_1: {
      center: [123.0829197, 0.6023056],
      zoom: 16.3,
      pitch: 12,
      bearing: 90,
    },
    lomaya_2: {
      center: [123.0696141, 0.6054167],
      zoom: 15.3,
      pitch: 20,
      bearing: 45,
    },
    ekstensifikasi: {
      center: [123.1141975, 0.5389722],
      zoom: 15,
      pitch: 20,
      bearing: 180,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = featureElement.current!.scrollTop;
      const sectionHeight = featureElement.current!.clientHeight;

      for (const chapter of Object.keys(chapters)) {
        const section = document.getElementById(chapter);
        if (!section) continue; // Skip if section doesn't exist

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (
          scrollPosition + sectionHeight / 2 >= sectionTop &&
          scrollPosition + sectionHeight / 2 < sectionBottom
        ) {
          setActiveChapter(chapter);
          return;
        }
      }
    };

    featureElement.current?.addEventListener("scroll", handleScroll);

    return () => {
      featureElement.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fly to the active chapter's location on change
    if (map) {
      const chapter = chapters[activeChapter];
      map.flyTo({
        center: chapter.center,
        zoom: chapter.zoom,
        pitch: chapter.pitch,
        bearing: chapter.bearing,
        essential: true, // Ensures a smooth transition
      });
    }
  }, [activeChapter, map]); // Run this effect when the active chapter changes

  return (
    <div
      ref={featureElement}
      style={{
        width: "50%",
        marginLeft: "50%",
        overflowY: "auto",
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <section id="BWS" className={activeChapter === "BWS" ? "active" : ""}>
        <h3>Balai Wilayah Sungai Sulawesi II Gorontalo</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          adipisci veritatis cumque? Doloremque consectetur ut aliquid dolor
          blanditiis quos, iste soluta suscipit animi beatae nam praesentium.
          Similique, nostrum at. Natus!
        </p>
      </section>
      <section
        id="alopohu_1"
        className={activeChapter === "alopohu_1" ? "active" : ""}
      >
        <h3>Titik Pertama - D.I. Alopohu</h3>
        <p>
          Tinjauan titik pertama terletak pada D.I. Alopohu dengan koordinat
          0°37'11.8"N 122°56'29.1"E. Berdasarkan hasil pemodelan, piksel pada
          koordinat tersebut menunjukkan bahwa wilayah ini tergolong dalam
          kategori sangat kurang optimal. Survei lapangan menunjukkan bahwa
          kategori evaluasi infrastruktur irigasi di wilayah ini sesuai dengan
          hasil pemodelan yakni sangat kurang optimal. Tidak adanya saluran
          pembuang serta kondisi topografi wilayah ini menyebabkan terjadinya
          banjir pada musim hujan, yang merusak tanaman padi. Selain itu, pada
          musim kemarau, wilayah ini kekurangan air hingga mencapai dua minggu.
        </p>
      </section>
      <section
        id="alopohu_2"
        className={activeChapter === "alopohu_2" ? "active" : ""}
      >
        <h3>Titik Kedua - D.I. Alopohu</h3>
        <p>
          Tinjauan titik kedua terletak pada D.I. Alopohu pada koordinat
          0°36'12.10"N 122°55'43.04"E yang merupakan usulan tambahan dari Unit
          Pengelola Daerah Irigasi Alopohu. Berdasarkan hasil pemodelan, piksel
          pada area tersebut tergolong sangat kurang optimal. Survei lapangan
          menunjukkan bahwa kategori evaluasi infrastruktur irigasi di wilayah
          ini sesuai dengan hasil pemodelan analisis spasial. Masalah yang
          ditemukan adalah faktor kekeringan ketika tidak pada musim hujan.
        </p>
      </section>
      <section
        id="lomaya_1"
        className={activeChapter === "lomaya_1" ? "active" : ""}
      >
        <h3>Titik Ketiga - D.I. Lomaya</h3>
        <p>
          Tinjauan titik ketiga merupakan area D.I. berikutnya yakni D.I. Lomaya
          yang terletak pada koordinat 0°36'08.3"N 123°05'07.8"E sebagai titik
          tambahan dari usulan pihak BBWS II Sulawesi. Berdasarkan hasil
          pemodelan, piksel pada area tersebut tergolong cukup optimal. Survei
          lapangan menunjukkan bahwa kategori evaluasi infrastruktur irigasi di
          wilayah tersebut sesuai dengan hasil pemodelan. Hal ini ditunjukkan
          pada area sawah tersebut memiliki produktivitas panen yang baik.
        </p>
      </section>
      <section
        id="lomaya_2"
        className={activeChapter === "lomaya_2" ? "active" : ""}
      >
        <h3>Titik Keempat - D.I. Lomaya</h3>
        <p>
          Tinjauan titik keempat yang berlokasi di D.I. Lomaya tepatnya pada
          koordinat 0°36'19.5"N 123°04'19.9"E. Berdasarkan hasil pemodelan,
          piksel pada area tersebut tergolong sudah optimal. Survei lapangan
          menunjukkan bahwa kategori evaluasi infrastruktur irigasi di wilayah
          tersebut sesuai dengan hasil pemodelan.
        </p>
      </section>
      <section
        id="ekstensifikasi"
        className={activeChapter === "ekstensifikasi" ? "active" : ""}
      >
        <h3>Titik Terakhir - Ekstensifikasi</h3>
        <p>
          Tinjauan titik terakhir sebagai validasi model dalam isu
          ekstensifikasi irigasi berlokasi di luar area D.I. Lomaya yakni di
          titik 0°32'20.3"N 123°07'00.4"E. Berdasarkan hasil pemodelan, piksel
          pada area tersebut menunjukkan kawasan yang memiliki rekomendasi yang
          prioritas untuk dilakukan ekstensifikasi. Survei lapangan menunjukkan
          kawasan tersebut merupakan area perkebunan yang memiliki akses saluran
          air yang cukup dan tanah yang subur sehingga menunjukkan bahwa
          kategori ekstensifikasi di wilayah tersebut sesuai dengan hasil
          pemodelan. Akan tetapi, perlu dikaji lebih lanjut ketika akan membahas
          ekstensifikasi atau penambahan area petak sawah baru karena perlu
          dipertimbangkan faktor lain seperti izin pembebasan lahan, jumlah SDM
          seperti petani, saluran air sekunder, dan pupuk.
        </p>
      </section>
    </div>
  );
};

export default FeaturesComponent;
