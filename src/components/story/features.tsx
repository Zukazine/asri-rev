"use client";

import { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

// Define the types for the chapters
interface Chapter {
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
}

interface FeaturesComponentProps {
  map: Map; // Type can be improved if you have a specific type for your map
}

const FeaturesComponent = ({ map }: FeaturesComponentProps) => {
  const featureElement = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<string>("header"); // Default active chapter

  const chapters: Record<string, Chapter> = {
    header: {
      center: [122.83143527925823, 0.6778139712794039],
      zoom: 9,
      pitch: 10,
      bearing: 5,
    },
    bws: {
      center: [122.98561828091697, 0.629789365803766],
      zoom: 17,
      pitch: 10,
      bearing: 5,
    },
    alopohu_1: {
      center: [122.9235867, 0.5965877],
      zoom: 16.5,
      pitch: 5,
      bearing: 150,
    },
    alopohu_2: {
      center: [122.9260419, 0.6033611],
      zoom: 16.5,
      pitch: 40,
      bearing: 90,
    },
    lomaya_1: {
      center: [123.0855, 0.602306],
      zoom: 16.3,
      pitch: 12,
      bearing: 90,
    },
    lomaya_2: {
      center: [123.072194, 0.605417],
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

  const pointsData: { coordinates: [number, number]; title: string }[] = [
    {
      coordinates: [122.98569986875489, 0.6296795796776695],
      title: "BWS Location - Balai Wilayah Sungai Sulawesi II Gorontalo",
    },
    {
      coordinates: [122.9235867, 0.5965877],
      title: "Alopohu 1 - D.I. Alopohu - First Point",
    },
    {
      coordinates: [122.9260419, 0.6033611],
      title: "Alopohu 2 - D.I. Alopohu - Second Point",
    },
    {
      coordinates: [123.0855, 0.602306],
      title: "Lomaya 1 - D.I. Lomaya - First Point",
    },
    {
      coordinates: [123.072194, 0.605417],
      title: "Lomaya 2 - D.I. Lomaya - Second Point",
    },
    {
      coordinates: [123.1141975, 0.5389722],
      title: "Ekstensifikasi - Ekstensifikasi Area",
    },
  ];

  useEffect(() => {
    if (map) {
      map.on("load", () => {
        // Load the Gorontalo GeoJSON file from the public directory
        fetch("/data/Gorontalo.geojson")
          .then((response) => response.json())
          .then((geojson) => {
            // Create features from pointsData
            const pointFeatures = pointsData.map(({ coordinates, title }) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates,
              },
              properties: {
                id: title.split(" - ")[0], // Extract ID from the title
                description: title.split(" - ")[1], // Extract description from the title
              },
            }));

            // Add the GeoJSON source to the map
            map.addSource("gorontalo", {
              type: "geojson",
              data: {
                ...geojson,
                features: [
                  ...geojson.features,
                  ...pointFeatures, // Include dynamically created features
                ],
              },
            });

            // Add the fill layer with a transparent color
            map.addLayer({
              id: "gorontalo-polygon",
              type: "fill",
              source: "gorontalo",
              layout: {},
              paint: {
                "fill-color": "#ffffff",
                "fill-opacity": 0.1,
              },
            });

            // Add the outline with a white line
            map.addLayer({
              id: "gorontalo-outline",
              type: "line",
              source: "gorontalo",
              layout: {},
              paint: {
                "line-color": "#ffffff",
                "line-width": 2,
              },
            });

            // Load custom marker image
            map.loadImage(
              "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
              (error: Error | undefined | null, image: HTMLImageElement | ImageBitmap | ImageData | null | undefined ) => {
                if (error) throw error;
                map.addImage("custom-marker", image as HTMLImageElement | ImageBitmap | ImageData);
              }
            );

            // Fetch the irrigation areas GeoJSON
            fetch("/data/diGorontalo.geojson")
              .then((response) => response.json())
              .then((irrigationGeojson) => {
                // Add the irrigation areas source
                map.addSource("irrigation-areas", {
                  type: "geojson",
                  data: irrigationGeojson,
                });

                // Define styles for each nm_inf value
                const styles = {
                  "D.I. Paguyaman": { color: "#ff0000", opacity: 0.5 },
                  "D.I. Lomaya Alale Pilohayanga": {
                    color: "#00ff00",
                    opacity: 0.5,
                  },
                  "D.I. Alopohu": { color: "#0000ff", opacity: 0.5 },
                };

                // Add a layer for each nm_inf with the corresponding style
                for (const [nm_inf, style] of Object.entries(styles)) {
                  map.addLayer({
                    id: `irrigation-${nm_inf
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`,
                    type: "line",
                    source: "irrigation-areas",
                    layout: {},
                    paint: {
                      "line-color": style.color,
                      "line-width": 2,
                      "line-opacity": style.opacity,
                    },
                    filter: ["==", ["get", "nm_inf"], nm_inf], // Filter by nm_inf property
                  });
                }
              })
              .catch((error) => {
                console.error("Error loading irrigation GeoJSON:", error);
              });
          })
          .catch((error) => {
            console.error("Error loading GeoJSON:", error);
          });
      });
    }
  }, [map]);

  useEffect(() => {
    // When the active chapter changes, manage the visibility of the points layer
    if (map) {
      if (activeChapter !== "header") {
        // Add the points layer if not in the header chapter
        if (!map.getLayer("gorontalo-points")) {
          map.addLayer({
            id: "gorontalo-points",
            type: "symbol",
            source: "gorontalo",
            layout: {
              "icon-image": "custom-marker",
              "icon-size": 1, // Adjust size as needed
              "text-field": ["get", "id"], // Display the 'id' property as label
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
              "icon-allow-overlap": true,
              "text-allow-overlap": true,
            },
            filter: ["==", "$type", "Point"],
          });
        }
      } else {
        // Remove the points layer when in the header chapter
        if (map.getLayer("gorontalo-points")) {
          map.removeLayer("gorontalo-points");
        }
      }
    }
  }, [activeChapter, map]);

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
      className="w-1/2 h-full bg-[#E5ECEF] overflow-y-auto"
    >
      <section
        id="header"
        className={`${activeChapter === "header" ? "active" : ""} flex flex-col gap-4`}
      >
        <p className="story-section-title">
          Studi Validasi Hasil Pemodelan Spasial Infrastruktur Irigasi Permukaan di Gorontalo 2024
        </p>

        <img
          src="/images/judul.jpeg"
          alt="Survei Validasi"
          className="w-full h-auto"
        />

        <p className="story-topic"># Latar Belakang</p>
        <p className="story-description">
          Gorontalo diarahkan menjadi salah satu sentra pertanian untuk mendukung pasokan pangan di regional Pulau Sulawesi dan KTI (RPIW Prov. Gorontalo 2025 – 2034). Terdapat tren panen padi yang berbanding terbalik antara produktivitas dan luas panen (BPS 2023). Ada indikasi kendala berupa ketidakselarasan infrastruktur pertanian yang menyebabkan produktivitas lahan tidak optimal (RPIW Prov. Gorontalo 2025 – 2034).
        </p>

        <p className="story-topic"># Tujuan</p>
        <p className="story-description"> 
          Validasi identifikasi kesesuaian hasil analisis spasial dengan kondisi lapangan. Evaluasi parameter yang digunakan dalam analisis spasial. Identifikasi permasalahan di daerah irigasi yang belum optimal.
        </p>

        <p className="story-topic"># Manfaat Hasil Studi</p>
        <p className="story-description">
          Mendukung integrasi irigasi primer (pusat) dan irigasi tersier (daerah) untuk meningkatkan produktivitas lahan pertanian. Mendukung pengembangan hilirisasi tanaman pangan Gorontalo, memberikan nilai tambah terhadap komoditas unggulan dari hasil pemodelan spasial.
        </p>
      </section>

      <section id="bws" className={`${activeChapter === "bws" ? "active" : ""} flex flex-col gap-4`}>
        <p className="story-section-title">Balai Wilayah Sungai Sulawesi II Gorontalo</p>

        <p className="story-description">Balai Wilayah Sungai Sulawesi II Gorontalo merupakan lembaga yang berperan dalam pengelolaan sumber daya air dan infrastruktur irigasi di wilayah Gorontalo. Pada Juli 2024, diadakan pemaparan dan diskusi terkait dengan pemodelan spasial yang dihadiri oleh Kepala BWS Sulawesi II Gorontalo, Kepala Seksi Pelaksanaan BWS Sulawesi II Gorontalo, dan Staf Pusat Pengembangan Infrastruktur Wilayah Nasional BPIW.
        </p>

        <img
          src="/images/bws.png"
          alt="BWS Sulawesi II Gorontalo"
          className="w-full h-auto"
        />

        <p className="story-topic"># Rangkuman Diskusi</p>
        <p className="story-description">
          Pemodelan spasial dapat digunakan untuk pengambilan keputusan. Resolusi piksel yang lebih baik meningkatkan akurasi pemodelan. Evaluasi infrastruktur irigasi sebaiknya menggunakan Indeks Kinerja Sistem Irigasi (IKSI) yang terdiri dari 8 parameter penilaian. Data menunjukkan peningkatan luas lahan panen, tetapi penurunan produktivitas. Penyebab penurunan produktivitas tidak hanya faktor irigasi, tetapi juga pupuk dan tenaga kerja. Pihak BWS hanya dapat memenuhi kebutuhan air. Infrastruktur yang belum optimal perlu dilakukan rehabilitasi dan perbaikan Kesulitan dalam pemodelan terkait sensitivitas; perubahan parameter dapat membuat model menjadi tidak optimal. Model yang baik dapat digunakan di seluruh Indonesia dan perlu diperbaiki seiring perkembangan teknologi.
        </p>
      </section>

      <section
        id="alopohu_1"
        className={`${activeChapter === "alopohu_1" ? "active" : ""} flex flex-col gap-4`}
      >
        <p className="story-section-title">Titik Pertama - D.I. Alopohu</p>
        <p className="story-description">
          Tinjauan titik pertama terletak pada D.I. Alopohu dengan koordinat 0&deg;37&prime;11.8&Prime;N 122&deg;56&prime;29.1&Prime;E. Berdasarkan hasil pemodelan, piksel pada koordinat tersebut menunjukkan bahwa wilayah ini tergolong dalam kategori sangat kurang optimal. Survei lapangan menunjukkan bahwa kategori evaluasi infrastruktur irigasi di wilayah ini sesuai dengan hasil pemodelan yakni sangat kurang optimal. Tidak adanya saluran pembuang serta kondisi topografi wilayah ini menyebabkan terjadinya banjir pada musim hujan, yang merusak tanaman padi. Selain itu, pada musim kemarau, wilayah ini kekurangan air hingga mencapai dua minggu.
        </p>

        <img
          src="/images/alopohu_1.png"
          alt="Survei Validasi"
          className="w-full h-auto mt-4"
        />
      </section>
      <section
        id="alopohu_2"
        className={`${activeChapter === "alopohu_2" ? "active" : ""} flex flex-col gap-4`}
      >
        <p className="story-section-title">Titik Kedua - D.I. Alopohu</p>
        <p className="story-description">
          Tinjauan titik kedua terletak pada D.I. Alopohu pada koordinat 0&deg;36&prime;12.10&Prime;N 122&deg;55&prime;43.04&Prime;E yang merupakan usulan tambahan dari Unit Pengelola Daerah Irigasi Alopohu. Berdasarkan hasil pemodelan, piksel pada area tersebut tergolong sangat kurang optimal. Survei lapangan menunjukkan bahwa kategori evaluasi infrastruktur irigasi di wilayah ini sesuai dengan hasil pemodelan analisis spasial. Masalah yang ditemukan adalah faktor kekeringan ketika tidak pada musim hujan.
        </p>
        {/* Add the image */}
        <img
          src="/images/alopohu_2.jpg"
          alt="Survei Validasi"
          className="w-full h-auto mt-4"
        />
      </section>
      <section
        id="lomaya_1"
        className={`${activeChapter === "lomaya_1" ? "active" : ""} flex flex-col gap-4`}
      >
        <p className="story-section-title">Titik Ketiga - D.I. Lomaya</p>
        <p className="story-description">
          Tinjauan titik ketiga merupakan area D.I. berikutnya yakni D.I. Lomaya yang terletak pada koordinat 0&deg;36&prime;08.3&Prime;N 123&deg;05&prime;07.8&Prime;E sebagai titik tambahan dari usulan pihak BBWS II Sulawesi. Berdasarkan hasil pemodelan, piksel pada area tersebut tergolong cukup optimal. Survei lapangan menunjukkan bahwa kategori evaluasi infrastruktur irigasi di wilayah tersebut sesuai dengan hasil pemodelan. Hal ini ditunjukkan pada area sawah tersebut memiliki produktivitas panen yang baik.
        </p>

        <img
          src="/images/lomaya.jpg"
          alt="Survei Validasi"
          className="w-full h-auto mt-4"
        />
      </section>
      <section
        id="lomaya_2"
        className={`${activeChapter === "lomaya_2" ? "active" : ""} flex flex-col gap-4`}
      >
        <p className="story-section-title">Titik Keempat - D.I. Lomaya</p>
        <p className="story-description">
          Tinjauan titik keempat yang berlokasi di D.I. Lomaya tepatnya pada koordinat 0&deg;36&prime;19.5&Prime;N 123&deg;04&prime;19.9&Prime;E. Berdasarkan hasil pemodelan, piksel pada area tersebut tergolong sudah optimal. Survei lapangan menunjukkan bahwa kategori evaluasi infrastruktur irigasi di wilayah tersebut sesuai dengan hasil pemodelan.
        </p>
        {/* Add the image */}
        <img
          src="/images/lomaya_2.jpg"
          alt="Survei Validasi"
          className="w-full h-auto mt-4"
        />
      </section>
      <section
        id="ekstensifikasi"
        className={`${activeChapter === "ekstensifikasi" ? "active" : ""} flex flex-col gap-4`}
      >
        <p className="story-section-title">Titik Terakhir - Ekstensifikasi</p>
        <p className="story-description">
          Tinjauan titik terakhir sebagai validasi model dalam isu ekstensifikasi irigasi berlokasi di luar area D.I. Lomaya yakni di titik 0&deg;32&prime;20.3&Prime;N 123&deg;07&prime;00.4&Prime;E. Berdasarkan hasil pemodelan, piksel pada area tersebut menunjukkan kawasan yang memiliki rekomendasi yang prioritas untuk dilakukan ekstensifikasi. Survei lapangan menunjukkan kawasan tersebut merupakan area perkebunan yang memiliki akses saluran air yang cukup dan tanah yang subur sehingga menunjukkan bahwa kategori ekstensifikasi di wilayah tersebut sesuai dengan hasil pemodelan. Akan tetapi, perlu dikaji lebih lanjut ketika akan membahas ekstensifikasi atau penambahan area petak sawah baru karena perlu dipertimbangkan faktor lain seperti izin pembebasan lahan, jumlah SDM seperti petani, saluran air sekunder, dan pupuk.
        </p>
        {/* Add the image */}
        <img
          src="/images/ekstensifikasi.jpg"
          alt="Survei Validasi"
          className="w-full h-auto mt-4"
        />
      </section>
    </div>
  );
};

export default FeaturesComponent;
