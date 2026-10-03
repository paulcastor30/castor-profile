export type ResearchOutput = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: "Published" | "Accepted" | "Presented";
  url?: string;
};

export type ThesisGroup = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  program: "MS" | "BS";
  adviser: string;
  coAdviser: string | null;
  researchers: string[];
  graduationYear: number | null;
  outputs: ResearchOutput[];
};

export const laboratory = {
  name: "Edge Intelligence and AIoT Research Laboratory",
  department: "Department of Computer Applications",
  college: "College of Computer Studies",
  university: "Mindanao State University – Iligan Institute of Technology",
};

export const labHeads = [
  {
    "name": "Paul Rodolf P. Castor",
    "email": "paulrodolf.castor@g.msuiit.edu.ph"
  },
  {
    "name": "Apple Rose B. Alce",
    "email": "applerose.alce@g.msuiit.edu.ph"
  }
];

// Graduation describes the researchers, not the publication or completion status of a thesis.
// Add research outputs only after the group association and acceptance/publication status are confirmed.
export const thesisGroups: ThesisGroup[] = [
  {
    "slug": "pedestrian-warning",
    "shortTitle": "Portable pedestrian warning system",
    "title": "Design and Development of SWiPS: A Portable AI-powered Pedestrian Warning System for Unsignalized Campus Crosswalks",
    "summary": "A portable system using artificial intelligence to help warn pedestrians at campus crosswalks without traffic signals.",
    "program": "MS",
    "adviser": "Dr. Adrian P. Galido",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "Jyresa Mae M. Amboang"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "avian-diversity",
    "shortTitle": "Bird diversity monitoring",
    "title": "Design and Development of an Integrated Computer Vision and BirdNET-based Avian Diversity Monitoring System",
    "summary": "A monitoring system combining image analysis and BirdNET bird-sound recognition to study bird diversity.",
    "program": "MS",
    "adviser": "Dr. Adrian P. Galido",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "Alyssa M. Usman"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "hyperlocal-monitoring",
    "shortTitle": "Local environmental monitoring",
    "title": "Design and Development of a Hyperlocal Monitoring System Using Multi-sensor Networks and Scalable Technologies",
    "summary": "A network of sensors designed to monitor conditions within a small local area.",
    "program": "MS",
    "adviser": "Dr. Adrian P. Galido",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Mark Joceph A. Apao"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "cacao-disease",
    "shortTitle": "Cacao disease detection",
    "title": "Design and Development of Lantaw Kakaw: An Assisted Ground-based Computer Vision System for Detection of Black Pod Rot on Cacao Pods",
    "summary": "An image-based system designed to help detect black pod rot disease on cacao pods.",
    "program": "MS",
    "adviser": "Dr. Adrian P. Galido",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Neil Christian P. Balayon"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "smart-shelf",
    "shortTitle": "Shelf stock and price display",
    "title": "Smart Shelf: A Modular IoT-Based On-Shelf Stock Monitoring and Pricing Display System",
    "summary": "Connected shelf modules designed to monitor available stock and display product prices.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": null,
    "researchers": [
      "Jess Michael Padogdog",
      "Ral Angelo Llusima",
      "Fatima Tahira Asaali"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "calamansi-disease",
    "shortTitle": "Calamansi disease detection",
    "title": "Development and Evaluation of a XIAO ESP32S3-Based Edge AIoT System for Huanglongbing (Citrus Greening) Detection in Calamansi",
    "summary": "A small connected device that uses artificial intelligence to help detect citrus greening disease in calamansi.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "John Heri P. Contrivida",
      "Sheila Marie T. Cañoneo",
      "Vanessa Ann A. Arocha"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "fish-vendor-ice",
    "shortTitle": "Ice monitoring for fish vendors",
    "title": "Smart Ice Monitoring System with Quality Index for Fish Vendors in Barangay Poblacion Linamon Lanao Del Norte",
    "summary": "An ongoing project developing ice monitoring and a quality index for fish vendors.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Excel Van Jondonero",
    "researchers": [
      "Mike Carlo T. Navarro",
      "Marie Irish S. Amil",
      "Jaime E. Cortado Jr."
    ],
    "graduationYear": null,
    "outputs": []
  },
  {
    "slug": "rice-growth",
    "shortTitle": "Rice crop growth monitoring",
    "title": "Rice Crop Growth Monitoring Through Panicle Detection and RS485 5-in-1 Soil Sensor",
    "summary": "A system combining rice flower-head detection and soil measurements to monitor crop growth.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "Adeline A. Bendula",
      "Martin III R. Canoy",
      "Mireille Joy R. Dayandayan"
    ],
    "graduationYear": 2026,
    "outputs": []
  },
  {
    "slug": "goat-geofencing",
    "shortTitle": "Goat location monitoring",
    "title": "Design and Development of IoT-Based Goat Geofencing Collar",
    "summary": "A connected collar designed to monitor goats in relation to a defined area.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": null,
    "researchers": [
      "Michael Jibrell J. Escolano",
      "Yke Cedrick C. Tenecio",
      "Israfeel Mikhail A. Tagorda"
    ],
    "graduationYear": 2026,
    "outputs": [
      {
        "title": "Geo-Goat: Evaluation of a LoRaWAN-Enabled Geofencing Collar for Smallholder Goat Monitoring",
        "authors": "Escolano, M. J. J.; Tagorda, I. M. A.; Tenecio, Y. C. C.; Alce, A. R. B.; Castor, P. R. P.",
        "venue": "2026 13th International Conference on Electrical Engineering, Computer Science and Informatics (EECSI), Yogyakarta, Indonesia, September 2–3, 2026",
        "year": 2026,
        "status": "Accepted"
      }
    ]
  },
  {
    "slug": "fish-container-temperature",
    "shortTitle": "Fish transport temperature monitoring",
    "title": "Integration of Temperature Monitoring System to Fish Containers for Fish Distribution",
    "summary": "Temperature monitoring integrated into fish containers during distribution.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "Kim Kundiman",
      "Jaydee Gomera",
      "Glyn Bryan Ebardo"
    ],
    "graduationYear": 2025,
    "outputs": []
  },
  {
    "slug": "bantay-dagat",
    "shortTitle": "Weather warnings for small-scale fishermen",
    "title": "BantayDagat: Development of Weather Monitoring as an Early Warning System for Small-scale Fishermen",
    "summary": "A weather-monitoring system designed to provide early warnings for small-scale fishermen.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "David James Arat",
      "Jasmin Clair Collamar",
      "Julina Ybanez"
    ],
    "graduationYear": 2025,
    "outputs": []
  },
  {
    "slug": "smart-swine-feeding",
    "shortTitle": "Automated feed mixing and dispensing",
    "title": "Smart Swine Feeding: An IoT-Enabled Feed Mixer and Dispenser for Piggeries Using ESP32",
    "summary": "A connected system designed to mix and dispense feed in piggeries.",
    "program": "BS",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Crischan Larita",
      "Errol Jade Carcedo",
      "Kirk Zyke Dream Gentiles"
    ],
    "graduationYear": 2025,
    "outputs": []
  },
  {
    "slug": "campus-navigation",
    "shortTitle": "Assistive campus navigation",
    "title": "Smart Campus Navigation for MSU-IIT: Development of an Embedded GUI for Assistive Digital Mapping",
    "summary": "A device-based visual interface designed to help people navigate the MSU-IIT campus.",
    "program": "BS",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Keann Jumalon",
      "Edrian Abilay",
      "Janin Bihag"
    ],
    "graduationYear": 2025,
    "outputs": []
  },
  {
    "slug": "energy-management",
    "shortTitle": "Energy monitoring and billing",
    "title": "Development of Real-Time IoT-Based Energy Management and Billing System for Boarding Houses",
    "summary": "A connected system designed to monitor energy use and support billing in boarding houses.",
    "program": "BS",
    "adviser": "Apple Rose B. Alce",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Prinnie Boy D. Torregoza",
      "Darlene Krissa G. Zapatos",
      "Jevon Karl A. Tuba"
    ],
    "graduationYear": 2025,
    "outputs": []
  },
  {
    "slug": "sign-language-headset",
    "shortTitle": "Assistive sign-language headset",
    "title": "Development of a Wearable AR Assistive Headset for Real-Time Sign Language Translation",
    "summary": "A wearable augmented-reality headset project focused on sign-language translation.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "Darel James Narvasa",
      "Jehan Oswald Colao",
      "Generyll Rose Jalbuna"
    ],
    "graduationYear": 2025,
    "outputs": [
      {
        "title": "Development and Evaluation of a Wearable Headband-Based ASL Letter Recognition Prototype: A Pilot Feasibility, Usability, and Acceptance Study",
        "authors": "Narvasa, D. J. A.; Colao, J. O. T.; Jalbuna, G. R. C.; Castor, P. R. P.; Alce, A. R. B.",
        "venue": "6th International Conference on Novel & Intelligent Digital Systems (NiDS 2026), Athens, Greece, September 24–26, 2026",
        "year": 2026,
        "status": "Accepted"
      }
    ]
  },
  {
    "slug": "document-delivery",
    "shortTitle": "Automated campus document delivery",
    "title": "Design and Development of an Automated Campus Document Delivery System",
    "summary": "An automated system designed to deliver documents within a campus.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "researchers": [
      "Khatleen Kate Carvajal",
      "Carla Jay Millang",
      "Armando Salud"
    ],
    "graduationYear": 2025,
    "outputs": []
  }
];

export const programName = (program: ThesisGroup["program"]) => `${program} in Computer Applications`;
export const groupStatus = (group: ThesisGroup) => group.graduationYear ? `Graduates · Class of ${group.graduationYear}` : "Current researchers · Ongoing project";
