"use client";

import { useEffect, useRef } from "react";

const FeaturesComponent = () => {
  const featureElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chapters = {
      baker: {
        bearing: 27,
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        pitch: 20,
      },
      aldgate: {
        duration: 6000,
        center: [-0.07571203, 51.51424049],
        bearing: 150,
        zoom: 15,
        pitch: 0,
      },
      "london-bridge": {
        bearing: 90,
        center: [-0.08533793, 51.50438536],
        zoom: 13,
        pitch: 40,
      },
      woolwich: { bearing: 90, center: [0.05991101, 51.48752939], zoom: 12.3 },
      gloucester: {
        bearing: 45,
        center: [-0.18335806, 51.49439521],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5,
      },
      "caulfield-gardens": {
        bearing: 180,
        center: [-0.19684993, 51.5033856],
        zoom: 12.3,
        pitch: 20,
        speed: 0.5,
      },
    };

    let activeChapterName = "baker"; // Start with 'baker'

    const setActiveChapter = (chapterName: string) => {
      if (chapterName === activeChapterName) return;
      // Fly to the map location associated with the new chapter (implement this)
      document.getElementById(chapterName)?.classList.add("active");
      document.getElementById(activeChapterName)?.classList.remove("active");
      activeChapterName = chapterName;
    };

    const handleScroll = () => {
      const scrollPosition = featureElement.current!.scrollTop;
      const sectionHeight = featureElement.current!.clientHeight;

      // Determine which chapter is active based on scroll position
      for (const chapter of Object.keys(chapters)) {
        const section = document.getElementById(chapter);
        const sectionTop = section!.offsetTop;
        const sectionBottom = sectionTop + section!.clientHeight;

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

    // Activate 'baker' on load
    setActiveChapter("baker");
    return () => {
      featureElement.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <section id="baker" className="active">
        <h3>221b Baker St.</h3>
        <p>
          November 1895. London is shrouded in fog and Sherlock Holmes and
          Watson pass time restlessly awaiting a new case. "The London criminal
          is certainly a dull fellow," Sherlock bemoans. "There have been
          numerous petty thefts," Watson offers in response. Just then a
          telegram arrives from Sherlock's brother Mycroft with a mysterious
          case.
        </p>
      </section>
      <section id="aldgate">
        <h3>Aldgate Station</h3>
        <p>
          Arthur Cadogan West was found dead, head crushed in on train tracks at
          Aldgate Station at 6AM Tuesday morning. West worked at Woolwich
          Arsenal on the Bruce-Partington submarine, a secret military project.
          Plans for the submarine had been stolen and seven of the ten missing
          papers were found in West's possession. Mycroft implores Sherlock to
          take the case and recover the three missing papers.
        </p>
      </section>
      <section id="london-bridge">
        <h3>London Bridge</h3>
        <p>
          Holmes and Watson's investigations take them across London. Sherlock
          deduces that West was murdered elsewhere, then moved to Aldgate
          Station to create the illusion that he was crushed on the tracks by a
          train. On their way to Woolwich Sherlock dispatches a telegram to
          Mycroft at London Bridge: "Send list of all foreign spies known to be
          in England, with full address."
        </p>
      </section>
      <section id="woolwich">
        <h3>Woolwich Arsenal</h3>
        <p>
          While investigating at Woolwich Arsenal Sherlock learns that West did
          not have the three keys—door, office, and safe—necessary to steal the
          papers. The train station clerk mentions seeing an agitated West
          boarding the 8:15 train to London Bridge. Sherlock suspects West of
          following someone who had access to the Woolwich chief's keyring with
          all three keys.
        </p>
      </section>
      <section id="gloucester">
        <h3>Gloucester Road</h3>
        <p>
          Mycroft responds to Sherlock's telegram and mentions several spies.
          Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's eye. He
          heads to the nearby Gloucester Road station to investigate and learns
          that the windows of Caulfield Gardens open over rail tracks where
          trains stop frequently.
        </p>
      </section>
      <section id="caulfield-gardens">
        <h3>13 Caulfield Gardens</h3>
        <p>
          Holmes deduces that the murderer placed West atop a stopped train at
          Caulfield Gardens. The train traveled to Aldgate Station before West's
          body finally toppled off. Backtracking to the criminal's apartment,
          Holmes finds a series of classified ads from
          <em>The Daily Telegraph</em> stashed away. All are under the name
          Pierrot: "Monday night after nine. Two taps. Only ourselves. Do not be
          so suspicious. Payment in hard cash when goods delivered."
        </p>
      </section>
    </div>
  );
};

export default FeaturesComponent;
