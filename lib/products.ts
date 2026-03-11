export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecGroup {
  title: string;
  items: ProductSpec[];
}

export interface Product {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  specifications: ProductSpecGroup[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const products: Product[] = [
  {
    slug: "luksuzni-klizni-sistem",
    title: "Luksuzni Klizni Sistem",
    category: "Klizni Sistemi",
    description:
      "Elegantni klizni sistemi bez praga za maksimalnu funkcionalnost i estetiku. Idealno rješenje za moderne stambene i poslovne prostore.",
    longDescription:
      "Naš luksuzni klizni sistem bez praga predstavlja vrhunac modernog dizajna i funkcionalne arhitekture. Sistem nudi potpunu slobodu kretanja između unutrašnjih i vanjskih prostora, eliminišući fizičke barijere i stvarajući besprijekorni vizualni kontinuitet. Svaki element sistema je pažljivo odabran od vodećih europskih proizvođača, garantujući dugotrajnost i pouzdanost čak i pri intenzivnoj svakodnevnoj upotrebi. Idealan za savremene stambene objekte, poslovne prostore, hotele i ugostiteljske objekte koji traže premium estetiku uz funkcionalnost.",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/Izrezak.png",
    heroImage: "https://fenesbh.com/wp-content/uploads/2022/02/Izrezak.png",
    features: [
      "Dizajn bez praga za nesmetan prolaz i modernu estetiku",
      "Aluminijski profili visoke čvrstoće otporni na koroziju",
      "Termička izolacija s toplinskim mostom od 1,0 W/m²K",
      "Dostupno u svim RAL bojama i drvo-dekorima",
      "Sistem samozatvaranja i mekog zaustavljanja",
      "Antiprovala zaštita – klasa RC2",
      "Jednostavno i brzo čišćenje profila i kliznog mehanizma",
      "Garancija 5 godina na mehanizam, 10 godina na profile",
    ],
    specifications: [
      {
        title: "Tehnički podaci profila",
        items: [
          { label: "Materijal", value: "Aluminij 6060 T5" },
          { label: "Dubina profila", value: "80 mm" },
          { label: "Maks. dimenzija krila", value: "3000 × 3000 mm" },
          { label: "Maks. težina krila", value: "300 kg" },
          { label: "Broj kliznih vodilica", value: "1 ili 2 (po tipu)" },
        ],
      },
      {
        title: "Termičke karakteristike",
        items: [
          { label: "Uw vrijednost", value: "od 1,0 W/m²K" },
          { label: "Staklo", value: "Trostruko izolaciono 4/16/4/16/4 mm" },
          { label: "Punjenje", value: "Argon 90%" },
          { label: "Zvučna izolacija", value: "do 42 dB" },
        ],
      },
      {
        title: "Sigurnost i certifikati",
        items: [
          { label: "Klasa probojnosti", value: "RC2 (EN 1627)" },
          { label: "CE certifikat", value: "Da" },
          { label: "Propusnost zraka", value: "Klasa 4" },
          { label: "Vodootpornost", value: "Klasa E1500" },
        ],
      },
    ],
    metaTitle: "Luksuzni Klizni Sistem bez Praga | FENES BH Živinice",
    metaDescription:
      "Premium ALU klizni sistem bez praga za moderan dom i poslovni prostor. Termička izolacija Uw 1,0, antiprovala RC2, garancija 10 god. Besplatna ponuda.",
    keywords: [
      "klizni sistem",
      "klizna vrata",
      "klizni sistem bez praga",
      "alu klizni sistem",
      "staklena klizna vrata",
      "FENES BH",
      "Živinice",
    ],
  },
  {
    slug: "stakleni-balkoni-rukohvati",
    title: "Stakleni Balkoni s Rukohvatima",
    category: "Stakleni Balkoni",
    description:
      "Sigurni stakleni balkoni opremljeni čeličnim rukohvatima visoke kvalitete. Kombinacija sigurnosti i modernog dizajna.",
    longDescription:
      "Stakleni balkoni s integriranim rukohvatima od nehrđajućeg čelika kombinuju maksimalnu sigurnost s minimalističkim dizajnom koji ne remeti pogled. Sistem je razvijen u skladu s najstrožim europskim sigurnosnim standardima i idealan je za stanove, kuće i poslovne zgrade. Prozirno kaljeno staklo pruža osjećaj prostora i otvorenosti, dok čelični rukohvati dodaju modernu industrijsku notu. Svaki sistem se radi po mjeri i prilagođen je specifičnim arhitektonskim zahtjevima vašeg objekta.",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/Izrezak1.png",
    heroImage: "https://fenesbh.com/wp-content/uploads/2022/02/Izrezak1.png",
    features: [
      "Kaljeno sigurnosno staklo debljine 10 ili 12 mm (VSG laminat)",
      "Rukohvat od nehrđajućeg čelika AISI 316L (morska otpornost)",
      "Sistem bez vidljivih vijaka za čist, minimalistički izgled",
      "Modularni dizajn prilagodljiv svakoj dužini balkona",
      "Otpornost na vjetar do klase WL5 (2000 Pa)",
      "Ugradnja na novogradnju i rekonstrukciju",
      "Dostupno s LED integracijom u rukohvatu",
      "Certifikat EN 1991-1-4 (otpornost na opterećenje)",
    ],
    specifications: [
      {
        title: "Staklo",
        items: [
          { label: "Vrsta stakla", value: "VSG/ESG kaljeno i laminatno" },
          { label: "Debljina", value: "10 mm ili 12 mm" },
          { label: "Visina panela", value: "900–1200 mm (po normi)" },
          { label: "Maks. širina panela", value: "1500 mm" },
        ],
      },
      {
        title: "Rukohvat",
        items: [
          { label: "Materijal", value: "Inox AISI 316L" },
          { label: "Promjer cijevi", value: "Ø 42,4 mm" },
          { label: "Površinska obrada", value: "Brušena mat / Ogledalo" },
          { label: "Nosač", value: "Zidni ili podna nosača" },
        ],
      },
      {
        title: "Opterećenje i sigurnost",
        items: [
          { label: "Horizontalno opterećenje", value: "1000 N/m" },
          { label: "Klasa otpornosti na vjetar", value: "WL5 (2000 Pa)" },
          { label: "CE standard", value: "EN 1991-1-4 / EN 13200" },
          { label: "Garancija", value: "10 godina" },
        ],
      },
    ],
    metaTitle: "Stakleni Balkoni s Inox Rukohvatima | FENES BH Živinice",
    metaDescription:
      "Premium stakleni balkoni s rukohvatima od nehrđajućeg čelika. Kaljeno VSG staklo, otpornost na vjetar WL5, ugradnja diljem BiH i EU. Besplatna ponuda.",
    keywords: [
      "stakleni balkon",
      "staklena ograda balkona",
      "inox rukohvat",
      "balkon staklo",
      "staklene ograde",
      "FENES BH",
    ],
  },
  {
    slug: "balkoni-izolaciono-staklo",
    title: "Balkoni s Izolacionim Staklom",
    category: "Stakleni Balkoni",
    description:
      "Stakleni balkoni s kliznim sistemom i termički izolacionim staklom. Štite od buke i osiguravaju odlične termičke karakteristike.",
    longDescription:
      "Balkoni s kliznim sistemom i pragom predstavljaju idealno rješenje za potpuno zatvaranje terasa i balkona uz vrhunsku termičku i zvučnu izolaciju. Izolaciono staklo u kombinaciji s aluminijskim profilima s prekinutim toplinskim mostom pruža zaštitu od hladnoće, buke i vremenskih neprilika, pretvarajući otvoreni prostor u ugodnu zimsku baštu ili dodatnu stambenu sobu. Sistem se potpuno otvara ljeti zahvaljujući kliznim krilima, dok zimi osigurava toplinsku zaštitu visokog nivoa.",
    image:
      "https://fenesbh.com/wp-content/uploads/2021/07/KLIZNI-SISTEM-S-PRAGOM.png",
    heroImage:
      "https://fenesbh.com/wp-content/uploads/2021/07/KLIZNI-SISTEM-S-PRAGOM.png",
    features: [
      "Dvostruko ili trostruko izolaciono staklo s Low-E premazom",
      "Aluminijski profili s prekinutim toplinskim mostom",
      "Klizni mehanizam koji se potpuno otvara ljeti",
      "Prag s termalnom izolacijom i odvodom kondenzata",
      "Zvučna izolacija do 38 dB",
      "Uw vrijednost cijelog sistema od 1,4 W/m²K",
      "Idealno za pretvaranje balkona u zimsku baštu",
      "Mogućnost ugradnje roleta ili tenda iznutra",
    ],
    specifications: [
      {
        title: "Staklo",
        items: [
          {
            label: "Tip",
            value: "Dvostruko ili trostruko izolaciono s Low-E",
          },
          { label: "Kompozicija", value: "4/16/4 ili 4/14/4/14/4 mm" },
          { label: "Punjenje međuprostora", value: "Argon 90%" },
          { label: "g-vrijednost", value: "0,36 (zaštita od sunca)" },
        ],
      },
      {
        title: "Profili i sistem",
        items: [
          { label: "Materijal profila", value: "Aluminij s PTM" },
          { label: "Dubina krila", value: "50–70 mm" },
          { label: "Uw sistema", value: "od 1,4 W/m²K" },
          { label: "Zvučna izolacija", value: "do 38 dB" },
        ],
      },
      {
        title: "Prag i vodotightnost",
        items: [
          { label: "Visina praga", value: "20–40 mm (niska ili visoka)" },
          { label: "Vodootpornost", value: "EN 12208 – klasa 9A" },
          { label: "Propusnost zraka", value: "EN 12207 – klasa 4" },
          { label: "Otpornost na vjetar", value: "EN 12210 – klasa C5" },
        ],
      },
    ],
    metaTitle: "Balkoni s Izolacionim Staklom – Zimska Bašta | FENES BH",
    metaDescription:
      "Pretvorite balkon u zimsku baštu. Izolacioni stakleni balkonski sistem Uw 1,4, zvučna zaštita 38 dB, klizni mehanizam. Ugradnja diljem BiH i EU.",
    keywords: [
      "izolacioni balkon",
      "zimska bašta",
      "stakleni balkon s pragom",
      "klizni sistem s pragom",
      "balkon izolacija",
      "FENES BH Živinice",
    ],
  },
  {
    slug: "komarnici-za-prozore",
    title: "Komarnici za Prozore",
    category: "Komarnici",
    description:
      "Kvalitetni komarnici za sve tipove prozora i vrata. Efikasna zaštita od insekata uz nesmetano prozračivanje prostora.",
    longDescription:
      "Komarnici FENES BH nude kompletno rješenje za zaštitu od insekata na svim tipovima prozora, vrata i kliznih sistema. Naša ponuda uključuje fiksne, klizne, savijajuće i plisé komarničke sisteme, prilagođene svakoj vrsti otvora i arhitektonskom stilu. Svi komarnici se prave po mjeri na osnovu vaših dimenzija i isporučuju se u bojama koje odgovaraju stolariji. Fiberglas mreža visoke gustoće efikasno blokira insekte, prašinu i pelud, a propušta svjež zrak i prirodnu svjetlost.",
    image:
      "https://fenesbh.com/wp-content/uploads/2022/02/Komarnici-za-prozore_slika_O_71410897.jpg",
    heroImage:
      "https://fenesbh.com/wp-content/uploads/2022/02/Komarnici-za-prozore_slika_O_71410897.jpg",
    features: [
      "Četiri tipa: fiksni, klizni, savijajući (Fly-door) i plisé",
      "Aluminijski okvir u svim RAL bojama po mjeri",
      "Fiberglas mreža gustoće 18×16 mesh za optimalan protok zraka",
      "Laka montaža i demontaža za čišćenje",
      "Dostupno i s mrezom za alergičare (Ultra-Fine mesh)",
      "Kompatibilno s PVC, ALU i drvo stolarijom",
      "Klizni komarnici za teraska i balkonska vrata",
      "Garancija 3 godine na okvir i mehanizam",
    ],
    specifications: [
      {
        title: "Tipovi i dimenzije",
        items: [
          {
            label: "Fiksni komarnik",
            value: "Do 1800 × 2400 mm",
          },
          {
            label: "Klizni komarnik",
            value: "Do 2500 × 2400 mm",
          },
          {
            label: "Plisé komarnik",
            value: "Do 1500 × 2200 mm",
          },
          {
            label: "Fly-door (savijajući)",
            value: "Do 1200 × 2200 mm",
          },
        ],
      },
      {
        title: "Mreža",
        items: [
          { label: "Materijal", value: "Fibreglas PVC obložen" },
          { label: "Gustoća mreže", value: "18×16 mesh (standardna)" },
          { label: "Fine-mesh (alergičari)", value: "20×20 mesh" },
          { label: "Propusnost svjetla", value: "85%" },
        ],
      },
      {
        title: "Okvir",
        items: [
          { label: "Materijal okvira", value: "Aluminij 1,2 mm" },
          {
            label: "Površinska obrada",
            value: "Poliesterski prah (sve RAL boje)",
          },
          { label: "Ugradnja", value: "Na čeone, bočne ili periferne nosače" },
          { label: "Garancija", value: "3 godine" },
        ],
      },
    ],
    metaTitle: "Komarnici za Prozore i Vrata po Mjeri | FENES BH Živinice",
    metaDescription:
      "Kvalitetni komarnici po mjeri za PVC i ALU stolariju: fiksni, klizni, plisé, fly-door. Aluminijski okvir, fiberglas mreža. Ugradnja diljem BiH.",
    keywords: [
      "komarnici za prozore",
      "komarnik za vrata",
      "komarnik po mjeri",
      "klizni komarnik",
      "plisé komarnik",
      "FENES BH",
    ],
  },
  {
    slug: "garazna-vrata",
    title: "Garažna Vrata",
    category: "Garažna Vrata",
    description:
      "Moderna sekcijska garažna vrata s automatskim pogonom visokog kvaliteta. Pouzdana i sigurna rješenja za svaki prostor.",
    longDescription:
      "Sekcijska garažna vrata FENES BH kombinuju robusnu konstrukciju od čelika s modernim dizajnom i visokim stupnjem izolacije. Sustav automatskog pogona od vodećih europskih proizvođača osigurava tihi i pouzdani rad čak i pri ekstremnim temperaturama. Vrata se dostupna u velikom broju dizajna, boja i površinskih obrada, od klasičnih do ultra-modernih, s mogućnošću integracije prozorskih elemenata. Električni pogon se može upravljati putem daljinskog upravljača, tipkovnice ili pametnog telefona putem Wi-Fi modula.",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/POCETNA-SLIKA.jpg",
    heroImage:
      "https://fenesbh.com/wp-content/uploads/2022/02/POCETNA-SLIKA.jpg",
    features: [
      "Sekcijska konstrukcija od dvostruke čelične ploče debljine 40 mm",
      "Poliuretanska pjena za izvrsnu termičku izolaciju (Ud = 0,9 W/m²K)",
      "Tihi električni pogon s mekom početnom i završnom fazom",
      "Upravljanje daljinskim, tipkovnicom i pametnim telefonom (Wi-Fi)",
      "Sigurnosni senzor zaustavljanja pri prepreci",
      "Dostupno u EuroGroove, Sandgrain i Woodgrain teksturama",
      "Integralni prozorski panel opcija u više dizajna",
      "Antiprovala sigurnosna zaključanica klase 2",
    ],
    specifications: [
      {
        title: "Konstrukcija panela",
        items: [
          { label: "Materijal", value: "Dvostruki čelik DX51D Z275" },
          { label: "Debljina panela", value: "40 mm" },
          { label: "Izolacijska pjena", value: "Poliuretan CFC-free" },
          { label: "Termička vrijednost", value: "Ud = 0,9 W/m²K" },
        ],
      },
      {
        title: "Dimenzije i kapacitet",
        items: [
          { label: "Maks. širina", value: "6000 mm" },
          { label: "Maks. visina", value: "3000 mm" },
          { label: "Maks. površina", value: "18 m²" },
          { label: "Zvučna izolacija", value: "23 dB" },
        ],
      },
      {
        title: "Električni pogon",
        items: [
          { label: "Snaga motora", value: "750 W" },
          { label: "Buka pogona", value: "< 65 dB(A)" },
          { label: "Wi-Fi upravljanje", value: "Opcija (modul)" },
          { label: "Garancija pogona", value: "5 godina" },
        ],
      },
    ],
    metaTitle: "Sekcijska Garažna Vrata s Automatskim Pogonom | FENES BH",
    metaDescription:
      "Premium sekcijska garažna vrata s automatskim pogonom. Čelični panel 40mm, Ud=0,9, Wi-Fi upravljanje, sigurnost klase 2. Ugradnja diljem BiH i EU.",
    keywords: [
      "garažna vrata",
      "sekcijska garažna vrata",
      "automatska garažna vrata",
      "garažna vrata s motorom",
      "FENES BH Živinice",
    ],
  },
  {
    slug: "alu-roletne",
    title: "ALU Roletne",
    category: "ALU Roletne",
    description:
      "Aluminijske roletne za maksimalnu zaštitu od sunca i toplote. Dostupne u raznim bojama i dimenzijama po mjeri.",
    longDescription:
      "Aluminijske roletne FENES BH pružaju vrhunsku zaštitu od sunca, toplote, buke i nezvanih pogleda, a ujedno poboljšavaju energetsku efikasnost vašeg doma. Dostupne su u integriranom, nadžbuknom i podzidnom sistemu, što ih čini prikladnim i za novogradnju i za rekonstrukciju. Električni pogon s termostatskim kontrolerom automatski regulira poziciju roletne prema temperaturi ili dobu dana. Sve roletne se prave po mjeri, a dostupne su u više od 40 boja i u drvo-dekor površinskim obradama.",
    image: "https://fenesbh.com/wp-content/uploads/2022/02/featuredimage.jpg",
    heroImage:
      "https://fenesbh.com/wp-content/uploads/2022/02/featuredimage.jpg",
    features: [
      "Aluminijska lamela debljine 8 mm punjenu poliuretanskom pjenom",
      "Tri sistema ugradnje: integrirani, nadžbukni, podzidni",
      "Električni pogon s daljinskim ili termostatskom kontrolom",
      "Smanjenje ulaska topline do 70% (solarna zaštita)",
      "Zvučna izolacija do 6 dB pri spuštenom roletniku",
      "Antiprovala spajalice za blokadu rolete iznutra",
      "Dostupno u 40+ boja i 3 drvo-dekora",
      "Garancija 5 godina na lamele, 3 godine na pogon",
    ],
    specifications: [
      {
        title: "Lamela",
        items: [
          { label: "Materijal", value: "Aluminij EN AW-3105" },
          { label: "Debljina lamele", value: "8 mm" },
          { label: "Ispuna", value: "Poliuretan CFC-free" },
          { label: "Termički otpor", value: "R = 0,22 m²K/W" },
        ],
      },
      {
        title: "Dimenzije",
        items: [
          { label: "Maks. širina", value: "3500 mm" },
          { label: "Maks. visina", value: "3000 mm" },
          { label: "Kaseta (integrirani)", value: "Ø 89 / 110 / 140 mm" },
          { label: "Min. visina kutije", value: "70 mm" },
        ],
      },
      {
        title: "Pogon i upravljanje",
        items: [
          { label: "Ručni pogon", value: "Traka ili kolutni mehanizam" },
          { label: "Električni pogon", value: "230V, 20–60 W motor" },
          { label: "Smart upravljanje", value: "Wi-Fi / Zigbee modul" },
          { label: "Garancija pogona", value: "3 godine" },
        ],
      },
    ],
    metaTitle: "ALU Roletne po Mjeri – Integrirane i Nadžbukne | FENES BH",
    metaDescription:
      "Premium aluminijske roletne po mjeri. Solarna zaštita 70%, električni pogon, 40+ boja. Integrirani i nadžbukni sistem. Ugradnja diljem BiH i EU.",
    keywords: [
      "alu roletne",
      "aluminijske roletne",
      "roletne po mjeri",
      "električne roletne",
      "integrirane roletne",
      "FENES BH Živinice",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
