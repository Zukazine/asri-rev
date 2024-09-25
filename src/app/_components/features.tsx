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
  const [activeChapter, setActiveChapter] = useState<string>("header"); // Default active chapter

  const chapters: Record<string, Chapter> = {
    header: {
      center: [122.998946037506, 0.6322912120126575],
      zoom: 9,
      pitch: 10,
      bearing: 5,
    },
    bws: {
      center: [122.998946037506, 0.6322912120126575],
      zoom: 15,
      pitch: 10,
      bearing: 5,
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

  // Fetch the local GeoJSON file from the public/data directory
  useEffect(() => {
    if (map) {
      map.on("load", () => {
        // Load the Gorontalo GeoJSON file from the public directory
        fetch("/data/Gorontalo.geojson")
          .then((response) => response.json())
          .then((geojson) => {
            // Add the GeoJSON source to the map
            map.addSource("gorontalo", {
              type: "geojson",
              data: geojson,
            });

            // Add the fill layer with a transparent color
            map.addLayer({
              id: "gorontalo-polygon",
              type: "fill",
              source: "gorontalo",
              layout: {},
              paint: {
                "fill-color": "#ffffff", // Transparent fill color
                "fill-opacity": 0.1, // Slight transparency for the polygon
              },
            });

            // Add the outline with a white line
            map.addLayer({
              id: "gorontalo-outline",
              type: "line",
              source: "gorontalo",
              layout: {},
              paint: {
                "line-color": "#ffffff", // White outline
                "line-width": 2, // Outline width
              },
            });
          })
          .catch((error) => {
            console.error("Error loading GeoJSON:", error);
          });
      });
    }
  }, [map]);

  useEffect(() => {
    const handleScroll = () => {
      if (!featureElement.current) return;

      const scrollPosition = featureElement.current!.scrollTop;
      const sectionHeight = featureElement.current!.clientHeight;

      let foundChapter = "header"; // Start with the first chapter by default.

      for (const chapter of Object.keys(chapters)) {
        const section = document.getElementById(chapter);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        // If the middle of the scroll position is within the section, activate this chapter
        if (
          scrollPosition + sectionHeight / 2 >= sectionTop &&
          scrollPosition + sectionHeight / 2 < sectionBottom
        ) {
          foundChapter = chapter;
          break;
        }
      }

      // Ensure that scrolling back to the very top triggers the 'header' chapter
      if (scrollPosition === 0) {
        foundChapter = "header";
      }

      // Update active chapter if it has changed
      if (activeChapter !== foundChapter) {
        setActiveChapter(foundChapter);
      }
    };

    // Attach the scroll event listener
    const currentElement = featureElement.current;
    currentElement?.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      featureElement.current?.removeEventListener("scroll", handleScroll);
    };
  }, [activeChapter]);

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
  }, [activeChapter, map]);

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
      <section
        id="header"
        className={activeChapter === "header" ? "active" : ""}
      >
        <h3>
          Studi Validasi Hasil Pemodelan Spasial Infrastruktur Irigasi Permukaan
          di Gorontalo 2024
        </h3>

        <h4>Latar Belakang</h4>
        <ul>
          <li>
            Gorontalo diarahkan menjadi salah satu sentra pertanian untuk
            mendukung pasokan pangan di regional Pulau Sulawesi dan KTI (RPIW
            Prov. Gorontalo 2025 – 2034).
          </li>
          <li>
            Terdapat tren panen padi yang berbanding terbalik antara
            produktivitas dan luas panen (BPS 2023).
          </li>
          <li>
            Ada indikasi kendala berupa ketidakselarasan infrastruktur pertanian
            yang menyebabkan produktivitas lahan tidak optimal (RPIW Prov.
            Gorontalo 2025 – 2034).
          </li>
        </ul>

        <h4>Tujuan</h4>
        <ul>
          <li>
            Validasi identifikasi kesesuaian hasil analisis spasial dengan
            kondisi lapangan.
          </li>
          <li>Evaluasi parameter yang digunakan dalam analisis spasial.</li>
          <li>
            Identifikasi permasalahan di daerah irigasi yang belum optimal.
          </li>
        </ul>

        <h4>Manfaat Hasil Studi</h4>
        <ul>
          <li>
            Mendukung integrasi irigasi primer (pusat) dan irigasi tersier
            (daerah) untuk meningkatkan produktivitas lahan pertanian.
          </li>
          <li>
            Mendukung pengembangan hilirisasi tanaman pangan Gorontalo,
            memberikan nilai tambah terhadap komoditas unggulan dari hasil
            pemodelan spasial.
          </li>
        </ul>
      </section>

      <section id="bws" className={activeChapter === "bws" ? "active" : ""}>
        <h3>Balai Wilayah Sungai Sulawesi II Gorontalo</h3>

        <p>
          Balai Wilayah Sungai Sulawesi II Gorontalo merupakan lembaga yang
          berperan dalam pengelolaan sumber daya air dan infrastruktur irigasi
          di wilayah Gorontalo. Pada Juli 2024, diadakan pemaparan dan diskusi
          terkait dengan pemodelan spasial yang dihadiri oleh Kepala BWS
          Sulawesi II Gorontalo, Kepala Seksi Pelaksanaan BWS Sulawesi II
          Gorontalo, dan Staf Pusat Pengembangan Infrastruktur Wilayah Nasional
          BPIW.
        </p>

        <h4>Rangkuman Diskusi</h4>
        <ul>
          <li>
            Pemodelan spasial dapat digunakan untuk pengambilan keputusan.
          </li>
          <li>
            Resolusi piksel yang lebih baik meningkatkan akurasi pemodelan.
          </li>
          <li>
            Evaluasi infrastruktur irigasi sebaiknya menggunakan Indeks Kinerja
            Sistem Irigasi (IKSI) yang terdiri dari 8 parameter penilaian.
          </li>
          <li>
            Data menunjukkan peningkatan luas lahan panen, tetapi penurunan
            produktivitas.
          </li>
          <li>
            Penyebab penurunan produktivitas tidak hanya faktor irigasi, tetapi
            juga pupuk dan tenaga kerja.
          </li>
          <li>Pihak BWS hanya dapat memenuhi kebutuhan air.</li>
          <li>
            Infrastruktur yang belum optimal perlu dilakukan rehabilitasi dan
            perbaikan.
          </li>
          <li>
            Kesulitan dalam pemodelan terkait sensitivitas; perubahan parameter
            dapat membuat model menjadi tidak optimal.
          </li>
          <li>
            Model yang baik dapat digunakan di seluruh Indonesia dan perlu
            diperbaiki seiring perkembangan teknologi.
          </li>
        </ul>
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
