import { CustomBr } from "@/components/atoms/custom-br";
import { Blocks } from "@/components/svgs/blocks";
import { Brush } from "@/components/svgs/brush";

export default {
  phone: {
    text: "Nummer",
    number: "+41 76 752 11 53",
    link: "tel:+41767521153",
  },
  help: "Wie können wir helfen?",
  mail: {
    text: "Schreibe uns ein E-mail",
    email: "info@mzmaler.ch",
    link: "mailto:info@mzmaler.ch ",
  },
  location: {
    text: "Location",
    address: "Bleicherstrasse 39, 8953 Dietikon",
    link: "https://maps.app.goo.gl/c3Mcarc9jNETq7Yc6",
  },
  categories: [
    { title: "Home", href: "/" },
    { title: "Dienstleistungen", href: "/#dienstleistungen" },
    { title: "Kontakt", href: "/#kontakt" },
  ],
  hero: {
    bg: {
      src: "/videos/bg.mp4",
      type: "video/mp4",
      fallbackImage: "/videos/thumb.png",
    },
    container: {
      image: {
        src: "/imgs/home/hero/tag.jpeg",
        alt: "Img",
        title: "Img",
      },
      text: "Maximale Qualität",
    },
    title: (
      <>
        Ihr Raum, unsere
        <CustomBr byViewport="mobile" /> Farben –<br /> Malerarbeiten,
        <CustomBr byViewport="mobile" /> die inspirieren
      </>
    ),
    description: (
      <>
        Wir bringen Ihre Vision in
        <CustomBr byViewport="mobile" /> Farbe – mit Präzision,
        <CustomBr byViewport="mobile" /> Verlässlichkeit
        <CustomBr byViewport="desktop" /> und einem
        <CustomBr byViewport="mobile" /> Auge für das Besondere.
      </>
    ),
    button: { title: "Mehr erfahren", href: "/#kontakt" },
    slider: [
      { src: "/imgs/slider/slider2.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider3.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider4.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider6.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider7.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider8.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider5.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider9.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider1.png", alt: "Img 01", title: "Img 01" },
      { src: "/imgs/slider/slider10.png", alt: "Img 01", title: "Img 01" },
    ],
    deals: {
      text: <>Unsere Zusammenarbeit spricht für sich</>,
      img: [
        {
          src: "/imgs/home/hero/deals.png",
          alt: "Bauunternehmung",
          title: "Deal",
        },
        {
          src: "/imgs/home/hero/gipser.png",
          alt: "gipser.png",
          title: "gipser.png",
        },
      ],
    },
  },
  services: {
    title: (
      <>
        Darin sind wir
        <br /> unschlagbar
      </>
    ),
    description: (
      <>
        Klare Leistungen, auf die Sie zählen können.
        <CustomBr byViewport="desktop" /> Entdecken Sie unsere Dienstleistungen.
      </>
    ),
    button: { title: "Mehr dazu", href: "/dienstleistungen" },
    bg: {
      src: "/imgs/home/services/bg.png",
      alt: "Services Background",
      title: "Services Background",
    },
    img: {
      desktop: {
        src: "/imgs/home/services/img.png",
        alt: "Services Image",
        title: "Services Image",
      },
      mobile: {
        src: "/imgs/home/services/mobile/img.png",
        alt: "Services Image",
        title: "Services Image",
      },
    },
    tags: [
      <>
        <Blocks />
        <span>Gipserarbeiten</span>
      </>,
      <>
        <Brush fill="red" />
        <span>Malerarbeiten</span>
      </>,
    ],
  },
  aboutUs: {
    title: <>Was Uns Besonders Macht</>,
    button: { title: "Kontakt ", href: "/#kontakt" },
    list: [
      {
        text: (
          <>
            Unser erfahrenes Team liefert Ergebnisse auf höchstem Niveau –
            <CustomBr byViewport="desktop" /> zuverlässig, professionell und detailgenau.
          </>
        ),
      },
      {
        text: (
          <>
            Ob Farbgestaltung, Reinigung oder Transport – wir passen
            <CustomBr byViewport="desktop" /> unsere Leistungen genau an Ihre Bedürfnisse an.
          </>
        ),
      },
      {
        text: (
          <>
            Wir stehen Ihnen von Anfang bis Ende zur Seite und sorgen
            <CustomBr byViewport="desktop" /> dafür, dass jedes Projekt termingerecht und präzise
            <CustomBr byViewport="desktop" />
            abgeschlossen wird.
          </>
        ),
      },
    ],
    imgs: [{ src: "/imgs/home/about-us/img1.jpeg", alt: "Img 01", title: "Img 01" }],
  },
  sayAboutUs: {
    span: <>Unsere Dienstleistungen</>,
    list: [
      <>
        <strong>Fachkundige Beratung und Planung</strong>
        <br />
        “Von der Farbwahl bis zur Umsetzung begleiten wir Sie mit umfassender Beratung und einem
        klaren Plan – für Ergebnisse, die Ihre Erwartungen übertreffen.
      </>,
      <>
        <strong>Fachkundige Beratung und Planung</strong>
        <br />
        “Von der Farbwahl bis zur Umsetzung begleiten wir Sie mit umfassender Beratung und einem
        klaren Plan – für Ergebnisse, die Ihre Erwartungen übertreffen.
      </>,
      <>
        <strong>Fachkundige Beratung und Planung</strong>
        <br />
        “Von der Farbwahl bis zur Umsetzung begleiten wir Sie mit umfassender Beratung und einem
        klaren Plan – für Ergebnisse, die Ihre Erwartungen übertreffen.
      </>,
      <>
        <strong>Fachkundige Beratung und Planung</strong>
        <br />
        “Von der Farbwahl bis zur Umsetzung begleiten wir Sie mit umfassender Beratung und einem
        klaren Plan – für Ergebnisse, die Ihre Erwartungen übertreffen.
      </>,
    ],
  },
  whyChooseUs: {
    title: (
      <>
        <strong>
          MZ MALER
          <CustomBr byViewport="mobile" /> GmbH
        </strong>{" "}
        – Qualität
        <br /> und Präzision in jedem Projekt
      </>
    ),
    description: (
      <>
        Seit unserer Gründung stehen wir für handwerkliche Perfektion
        <CustomBr byViewport="desktop" /> und Verlässlichkeit. Mit Hingabe und Erfahrung bringen wir
        <CustomBr byViewport="desktop" />
        Farbe, Sauberkeit und Sicherheit in jeden Raum. Unsere Arbeit
        <CustomBr byViewport="desktop" /> ist unser Versprechen – für Ergebnisse, die überzeugen.
      </>
    ),
    list: [
      {
        title: <>Höchste Qualitätsstandards</>,
        text: (
          <>
            Wir setzen auf Qualität ohne Kompromisse. Jedes Detail zählt, und wir verwenden nur die
            besten Materialien, um langlebige Ergebnisse zu gewährleisten.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover1.png",
      },
      {
        title: <>Erfahrung und Expertise</>,
        text: (
          <>
            Mit jahrzehntelanger Erfahrung im Gepäck wissen wir genau, wie wir Ihre Wünsche in die
            Tat umsetzen.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover2.png",
      },
      {
        title: <>Transparente Kommunikation</>,
        text: (
          <>
            Bei uns wissen Sie immer, woran Sie sind. Wir halten Sie in jeder Phase des Projekts auf
            dem Laufenden und stehen Ihnen für alle Fragen zur Verfügung.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover3.png",
      },
      {
        title: <>Vertrauenswürdigkeit</>,
        text: (
          <>
            Wir stehen zu unserem Wort. Pünktlichkeit und Sauberkeit sind bei uns nicht nur
            Versprechen, sondern eine Selbstverständlichkeit.
          </>
        ),
        bg: "/imgs/home/why-choose-us/hover4.png",
      },
    ],
    callAction: {
      text: (
        <>
          Erleben Sie den Unterschied. Lassen Sie <CustomBr byViewport="desktop" /> uns gemeinsam
          Ihr Projekt starten.
        </>
      ),
      img: {
        src: "/imgs/home/why-choose-us/img.jpeg",
        alt: "Img",
        title: "Img",
      },
      button: { title: "Kontaktieren Sie uns", href: "/kontakt" },
    },
  },
  contact: {
    title: <>Kontaktieren Sie uns</>,
    subtitle: (
      <>
        Wir sind für Sie da – Lassen Sie
        <CustomBr byViewport="mobile" /> uns Ihr Projekt
        <CustomBr byViewport="desktop" /> gemeinsam
        <CustomBr byViewport="mobile" /> besprechen
      </>
    ),

    form: {
      inputs: [
        {
          label: "Name",
          type: "text",
          name: "name",
          placeholder: "z.B. Jonn Wyss",
        },
        {
          label: "Nummer",
          type: "text",
          name: "phone",
          placeholder: "+41 00 000 00 00",
        },
        {
          label: "Email",
          name: "email",
          placeholder: "Jhon@gmail.com",
          type: "email",
        },
        {
          label: "Gewünschter Service",
          name: "message",
          placeholder: "Ich hätte gerne eine Offerte bezüglich…",
          type: "textarea",
        },
      ],
      button: "Senden",
    },
    map: <>Lerchenstrasse 22, 8754 Netstal</>,
  },
  service: {
    banner: {
      title: <>Unsere Dienstleistungen</>,
      description: <>Ihre Experten für präzise und zuverlässige Arbeit.</>,
      background: {
        src: "/imgs/service/bg.png",
        alt: "Background Header",
      },
      breadcrumb: "Dienstleistungen",
      tags: {
        content: [<>Qualität</>, <>Präzision</>],
      },
    },
  },
  content: [
    {
      title: <>Gipserarbeiten</>,
      texts: [
        {
          title: <>Innen- und Aussenputzarbeiten</>,
          content: (
            <>
              „Glatter Putz für ein perfektes Finish – innen wie aussen.“ Ob Innen- oder Aussenputz,
              wir sorgen dafür, dass Ihre Wände und Fassaden den optimalen Schutz und die gewünschte
              Optik erhalten. Unser Team verwendet hochwertige Materialien und moderne Techniken, um
              glatte Oberflächen zu schaffen, die sowohl funktional als auch ästhetisch ansprechend
              sind.
            </>
          ),
        },
        {
          title: <>Trockenbau</>,
          content: (
            <>
              „Flexible Raumgestaltung mit stabilen Leichtbauwänden.“ Der Trockenbau bietet flexible
              Möglichkeiten zur Raumgestaltung und Modernisierung. Ob Trennwände, abgehängte Decken
              oder spezielle Designlösungen – mit stabilen Leichtbauwänden gestalten wir Räume ganz
              nach Ihren individuellen Vorstellungen, schnell und effizient.
            </>
          ),
        },
        {
          title: <>Stuck- und Dekorationsarbeiten</>,
          content: (
            <>
              „Kreative Stuckelemente für ein stilvolles Ambiente.“ Stuckarbeiten verleihen jedem
              Raum eine besondere Note. Von klassischen Stilelementen bis hin zu modernen Designs
              setzen wir auf kreative Akzente, die das Gesamtbild Ihrer Innenräume aufwerten. Unsere
              handwerkliche Präzision garantiert dabei, dass Ihre Wände und Decken zu einem echten
              Blickfang werden.
            </>
          ),
        },
      ],
      video: {
        src: "/videos/video01.mp4",
        type: "video/mp4",
      },
      img: {
        src: "/imgs/service/img-content01.png",
        alt: "Img 01",
        title: "Img 01",
        css: `
          height: 35.2rem;
        `,
      },
      icon: <Blocks />,
    },
    {
      title: <>Malerarbeiten</>,
      texts: [
        {
          title: <>Fassadenarbeiten</>,
          content: (
            <>
              „Langlebiger Schutz und ansprechende Gestaltung Ihrer Fassade.“ Ihre Fassade ist nicht
              nur das Gesicht Ihres Gebäudes, sondern auch ein wichtiger Schutz vor
              Witterungseinflüssen. Mit hochwertigen Fassadenfarben und -beschichtungen sorgen wir
              dafür, dass Ihr Haus nicht nur gut aussieht, sondern auch langfristig geschützt ist –
              gegen Feuchtigkeit, UV-Strahlung und andere Umwelteinflüsse.
            </>
          ),
        },
        {
          title: <>Malerarbeiten</>,
          content: (
            <>
              „Farbe, die Räume zum Leben erweckt – innen und aussen.“ Egal, ob Sie Ihre Wohnräume
              oder Fassaden neu gestalten möchten – unsere professionellen Malerarbeiten verleihen
              jedem Projekt den gewünschten Charakter. Wir setzen Ihre Vorstellungen in die Tat um
              und schaffen durch gekonnte Farbwahl und Präzision ein harmonisches Gesamtbild, das
              Ihren Räumen oder Ihrer Fassade Leben einhaucht.
            </>
          ),
        },
      ],
      video: {
        src: "/videos/video02.mp4",
        type: "video/mp4",
      },
      img: {
        src: "/imgs/service/img-content02.png",
        alt: "Img 02",
        title: "Img 02",
        css: `
          height: 27.4rem;
        `,
      },
      icon: <Brush />,
    },
  ],
  gallery: {
    title: <>Unsere Arbeiten im Überblick</>,
    subtitle: (
      <>
        Entdecken Sie unsere abgeschlossenen Projekte und lassen Sie sich
        <CustomBr byViewport="desktop" /> von der Qualität unserer Handwerkskunst inspirieren
      </>
    ),
    icon: {
      src: "/imgs/service/brush.png",
      alt: "Brush",
      title: "Brush",
    },
  },
  aboutUsContent: {
    title: <> Warum MZ MALER GmbH?</>,
    description: (
      <>
        Perfektion bis ins Detail und ein Team, auf das Sie zählen können. Wir setzen jedes Projekt
        mit Leidenschaft und Sorgfalt um – für Ergebnisse, die nicht nur überzeugen, sondern
        begeistern.
      </>
    ),
    list: [
      {
        title: <>Erfahrung & Fachwissen</>,
        text: <>Unsere Expertise steht für höchste Qualität.</>,
        icon: {
          src: "/svgs/crown.svg",
          alt: "Quality",
          title: "Quality",
        },
      },
      {
        title: <>Zuverlässiger Service</>,
        text: <>Ihr Vertrauen ist unser Anspruch.</>,
        icon: {
          src: "/svgs/crown.svg",
          alt: "Quality",
          title: "Quality",
        },
      },
      {
        title: <>Massgeschneiderte Lösungen</>,
        text: <>Ihre Wünsche stehen im Mittelpunkt.</>,
        icon: {
          src: "/svgs/crown.svg",
          alt: "Quality",
          title: "Quality",
        },
      },
    ],

    imgs: {
      src: "/imgs/uber-uns/big.jpeg",
      alt: "Big",
      title: "Big",
    },
  },
  team: {
    images: [
      {
        src: "/imgs/uber-uns/team/unser-team.png",
        alt: "Unser Team",
        title: "Unser Team",
      },
      {
        src: "/imgs/uber-uns/team/unsere-philosophie.png",
        alt: "Unsere Philosophie",
        title: "Unsere Philosophie",
      },
    ],
    content: [
      {
        title: <>Unser Team</>,
        content: (
          <>
            Wir sind stolz auf unser engagiertes Team, das jeden Tag sein Bestes gibt, um Ihre
            Projekte in höchster Qualität umzusetzen. Bei Andrade Gipser + Maler GmbH setzen wir auf
            ein starkes Miteinander, bei dem Erfahrung und Leidenschaft Hand in Hand gehen. Unser
            Team besteht aus erfahrenen Fachleuten, die ihr Handwerk verstehen und mit Leidenschaft
            und Präzision an jedes Projekt herangehen.
          </>
        ),
      },
      {
        title: <>Unsere Philosophie</>,
        content: (
          <>
            Gemeinsam schaffen wir mehr. Jeder in unserem Team bringt individuelle Stärken und
            jahrelange Expertise mit, um Ihre Visionen in die Realität umzusetzen. Wir glauben
            daran, dass grossartige Ergebnisse nur durch Teamarbeit entstehen, und genau das ist
            unser Ansatz bei Andrade Gipser + Maler GmbH.
          </>
        ),
      },
      {
        title: <>Warum unser Team?</>,
        list: [
          {
            title: <>Erfahrung und Kompetenz</>,
            text: (
              <>
                Unsere Mitarbeiter haben nicht nur die nötige Qualifikation, sondern auch die
                Leidenschaft für das Handwerk.
              </>
            ),
          },
          {
            title: <>Verlässlichkeit und Engagement</>,
            text: (
              <>
                Unser Team steht für Qualität und Sorgfalt – wir behandeln jedes Projekt so, als
                wäre es unser eigenes.
              </>
            ),
          },
          {
            title: <>Kontinuierliche Weiterbildung</>,
            text: (
              <>
                Wir legen grossen Wert darauf, dass unser Team stets auf dem neuesten Stand der
                Technik ist, um Ihnen die bestmöglichen Ergebnisse zu liefern.
              </>
            ),
          },
        ],
      },
    ],
    members: [
      {
        photo: {
          src: "/imgs/uber-uns/team/01.png",
          alt: "Person 01",
          title: "Person 01",
        },
        name: "Raimundo Santos",
        text: "Gipser",
      },
      {
        photo: {
          src: "/imgs/uber-uns/team/02.png",
          alt: "Person 02",
          title: "Person 02",
        },
        name: "Diogo Almada",
        text: "Gipser",
      },
      {
        photo: {
          src: "/imgs/uber-uns/team/03.png",
          alt: "Person 03",
          title: "Person 03",
        },
        name: "Lizuarte Ornelas",
        text: "Gipser",
      },
      {
        photo: {
          src: "/imgs/uber-uns/team/04.png",
          alt: "Person 04",
          title: "Person 04",
        },
        name: "Camilo Almada",
        text: "Gipser",
      },
    ],
  },
  footer: {
    title: (
      <>
        Wer wir sind und was uns
        <CustomBr byViewport="desktop" /> antreibt
      </>
    ),
    categoriesText: "Navigation ",
    servicesText: "Unsere Leistungen",
    description: (
      <>
        Vertrauen, Erfahrung und <CustomBr byViewport="desktop" />
        Handwerk – das sind wir.
      </>
    ),
    copyrigth: {
      text: <>Copyright © 2024 MZ Maler</>,
      fiber: (
        <>
          Mit 💚 entwickelt von <a href="https://www.fiberweb.ch/">FiberWeb.ch</a>
        </>
      ),
    },
    categories: [
      "Innen- und Aussenputzarbeiten",
      "Trockenbau",
      "Stuck- und Dekorationsarbeiten",
      "Fassadenarbeiten",
      "Malerarbeiten",
    ],
  },
};
