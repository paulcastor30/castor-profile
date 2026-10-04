import { publications, conferencePapers } from "./research";

export type ResearchOutput = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: "Published" | "Accepted" | "Presented" | "Conference paper";
  url?: string;
};

export type ThesisGroup = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  program: "MS" | "BS";
  adviser: string | null;
  coAdviser: string | null;
  additionalCoAdvisers?: string[];
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
const groupRecords: ThesisGroup[] = [
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
      "Jess Michael S. Padogdog",
      "Ral Angelo S. Lluisma",
      "Fatima Tahira M. Asaali"
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
    "outputs": []
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
      "Kim D. Kundiman",
      "Jaydee A. Gomera",
      "Glyn Bryan I. Ebardo"
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
      "David James E. Arat",
      "Jasmin Clair A. Collamar",
      "Julina C. Ybañez"
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
      "Crischan G. Larita",
      "Errol Jade Carcedo",
      "Kirk Zyke Dream A. Gentiles"
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
      "Keann F. Jumalon",
      "Edrian Abilay",
      "Janin C. Bihag"
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
      "Darel James A. Narvasa",
      "Jehan Oswald T. Colao",
      "Generyll Rose C. Jalbuna"
    ],
    "graduationYear": 2025,
    "outputs": []
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
      "Khatleen Kate C. Carvajal",
      "Carla Jay F. Millang",
      "Armando M. Salud"
    ],
    "graduationYear": 2025,
    "outputs": []
  },
  {
    "slug": "rice-tungro",
    "shortTitle": "Rice tungro disease detection",
    "title": "Real-Time Detection of Rice Tungro Disease Using Attention-Enhanced MobileNetV3 on an Edge Computing Platform",
    "summary": "An ongoing project using a small computer and image recognition to detect rice tungro disease.",
    "program": "MS",
    "adviser": "Harreez Villaruz-Quimque",
    "coAdviser": "Paul Rodolf P. Castor",
    "additionalCoAdvisers": [
      "Apple Rose B. Alce"
    ],
    "researchers": [
      "Crischan G. Larita"
    ],
    "graduationYear": null,
    "outputs": []
  },
  {
    "slug": "bell-pepper-aphid-damage",
    "shortTitle": "Aphid damage detection in bell peppers",
    "title": "Development of an Edge-IoT-Based Aphid Damage Detection using YOLOv8n and Offline Monitoring using Flask Web Interface for Bell Pepper (Capsicum annuum) on a Raspberry Pi 5",
    "summary": "An ongoing project using image recognition to detect aphid damage in bell peppers, with a monitoring page that works offline.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Apple Rose B. Alce",
    "additionalCoAdvisers": [
      "Dr. Slamet Riyadi"
    ],
    "researchers": [
      "Tristan E. Listanco",
      "Shanice Reih H. Tanque",
      "Phoebien D. Cañete"
    ],
    "graduationYear": null,
    "outputs": []
  },
  {
    "slug": "smart-goat-profiling",
    "shortTitle": "Goat profiling and direct trading",
    "title": "Smart G-ID: Design and Development of a Goat Profiling and Trading System for Direct Farmer-to-Consumer Transactions",
    "summary": "An ongoing system for recording goat information and supporting direct transactions between farmers and consumers.",
    "program": "BS",
    "adviser": "Dr. Ernesto E. Empig, DSDS",
    "coAdviser": "Paul Rodolf P. Castor",
    "researchers": [
      "Princess April E. Castillo",
      "John Benedict D. Bernal",
      "Andrew Earl L. Andres"
    ],
    "graduationYear": null,
    "outputs": []
  },
  {
    "slug": "geosentry-landslide-warning",
    "shortTitle": "Landslide monitoring and early warnings",
    "title": "GeoSentry: An IoT-based Landslide Monitoring and Early Warning System using Explainable AI",
    "summary": "An ongoing project using connected sensors and artificial intelligence to monitor landslide conditions and support early warnings.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Dr. Ganapathy Pattukandan Ganapathy",
    "additionalCoAdvisers": [
      "Dr. Slamet Riyadi"
    ],
    "researchers": [
      "Renato G. Beroy",
      "Sherie Grace L. Lupoz",
      "Arianne G. Mecarsos"
    ],
    "graduationYear": null,
    "outputs": []
  },
  {
    "slug": "carbon-dioxide-adsorption",
    "shortTitle": "Carbon dioxide monitoring and adsorption",
    "title": "Development of a Real-Time Carbon Dioxide Monitoring System Integrated with a Zeolite-Based Adsorption Bed: A Pilot Study",
    "summary": "An ongoing pilot study combining carbon dioxide monitoring with a zeolite material that captures gas on its surface.",
    "program": "BS",
    "adviser": "Paul Rodolf P. Castor",
    "coAdviser": "Ralf Ruffel M. Abarca",
    "researchers": [
      "Karl Vincent C. Remo",
      "Cassandra Khan P. Mendoza",
      "Khara Myka T. Concepcion"
    ],
    "graduationYear": null,
    "outputs": []
  },
{
  "slug": "coin-operated-energy-meter",
  "shortTitle": "Coin-operated electricity meter",
  "title": "Developing a Coin-Operated Energy Power Consumption Meter: An Innovative Solution for Energy Poverty (ISEP)",
  "summary": "A coin-operated meter designed to measure electricity consumption and support access to energy.",
  "adviser": "Paul Rodolf P. Castor",
  "coAdviser": "Apple Rose B. Alce",
  "researchers": [
    "Jyresa Mae M. Amboang",
    "Frances Nicole S. Gigataras",
    "Jullifer D. Llegado"
  ],
  "program": "BS",
  "graduationYear": 2024,
  "outputs": []
},
{
  "slug": "outdoor-particulate-monitoring",
  "shortTitle": "Outdoor particulate matter monitoring",
  "title": "Development of Raspberry Pi-Based University Outdoor Airborne Particulate Matter (PM2.5) Acquisition System Using Yolov5",
  "summary": "A Raspberry Pi-based system designed to collect information about fine airborne particles outdoors at a university.",
  "adviser": "Paul Rodolf P. Castor",
  "coAdviser": "Dr. Adrian P. Galido",
  "researchers": [
    "Norol-Izza Y. Abdullah",
    "Crishelle A. Agopitac",
    "Alyssa M. Usman"
  ],
  "program": "BS",
  "graduationYear": 2024,
  "outputs": []
},
{
  "slug": "aerosense-air-quality",
  "shortTitle": "Aerosense: drone air quality monitoring",
  "title": "Aerosense: Development and Evaluation of a Drone-Based Air Quality Harvesting System Utilizing LoRa Technology in Kiwalan, Iligan City, Philippines",
  "summary": "A drone-based system designed to collect air quality data and transmit it using LoRa wireless technology.",
  "adviser": "Paul Rodolf P. Castor",
  "coAdviser": "Dr. Adrian P. Galido",
  "researchers": [
    "Salman H. Ali",
    "Neil Christian P. Balayon",
    "Ethan C. Duhaylungsod"
  ],
  "program": "BS",
  "graduationYear": 2024,
  "outputs": []
},
{
  "slug": "floodsense-river-warning",
  "shortTitle": "FloodSense: river monitoring and flood warning",
  "title": "FloodSense: Development of Near Real-Time IoT-based Water Level Monitoring and Early Flood Warning System for Iligan City Tubod River, Philippines",
  "summary": "Connected sensors designed to monitor water levels and provide early flood warnings for the Tubod River in Iligan City.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": "Paul Rodolf P. Castor",
  "researchers": [
    "Joshua Mangca",
    "Jae Shai April Orilloza",
    "John Vincent Ramirez"
  ],
  "program": "BS",
  "graduationYear": 2024,
  "outputs": []
},
{
  "slug": "coffee-berry-borer",
  "shortTitle": "Coffee berry borer detection",
  "title": "Vision-Based Coffee Berry Borer Detection Using MobileNet Convolutional Neural Network",
  "summary": "An image-based system using MobileNet to detect coffee berry borer pests.",
  "adviser": "Maria Fe P. Bahinting",
  "coAdviser": "Paul Rodolf P. Castor",
  "researchers": [
    "Ashari M. Acmad",
    "Mark Joceph A. Apao",
    "Mathew Karl M. Asidillo"
  ],
  "program": "BS",
  "graduationYear": 2024,
  "outputs": []
},
{
  "slug": "smartpipes-leak-detection",
  "shortTitle": "Smartpipes: underground pipe leak detection",
  "title": "Simulation of IoT-Enabled Smartpipes: Prototyping Underground Potential Leak Detection Method in Small-Diameter Plastic Pipes Using Larawan",
  "summary": "A simulation and prototype exploring ways to detect potential leaks in small underground plastic pipes.",
  "adviser": null,
  "coAdviser": "Paul Rodolf P. Castor",
  "researchers": [
    "Michael Angelo L. Natingga Jr.",
    "Aira Mae I. Sumile",
    "Kent Brian H. Villacorta"
  ],
  "graduationYear": 2024,
  "program": "BS",
  "outputs": []
},
{
  "slug": "rfid-room-scheduling",
  "shortTitle": "RFID access and room scheduling",
  "title": "RFID Login Using Esp8266 and Web-Based Scheduling System for Classroom and Laboratory Utilization",
  "summary": "RFID-based login and a web scheduling system designed to manage classroom and laboratory use.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": "Paul Rodolf P. Castor",
  "researchers": [
    "Leah S. Apatan",
    "Krizel Joy A. Atillo",
    "Renz Patrick D. Santillan"
  ],
  "graduationYear": 2023,
  "program": "BS",
  "outputs": []
},
{
  "slug": "scallion-hydroponics",
  "shortTitle": "Scallion growth monitoring",
  "title": "ESP32 Hydroponic Bed System for Growth Monitoring of Scallion (Allium fistulosum) Spices",
  "summary": "An ESP32-based hydroponic bed system designed to monitor scallion growth.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": null,
  "researchers": [
    "Justin Jay B. Esconde",
    "Christian Noel C. Eslit",
    "Junesep Cagas"
  ],
  "graduationYear": 2023,
  "program": "BS",
  "outputs": []
},
{
  "slug": "rids-reverse-vending",
  "shortTitle": "RIDS-RVM: reverse vending and recycling",
  "title": "Development of RIDS - RVM: a Reverse Vending Machine with Integrated Points System and Image-Based Detection and Segregation for Plastic Bottles and Aluminum Cans",
  "summary": "A reverse vending machine designed to recognize and sort plastic bottles and aluminum cans, with an integrated points system.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": null,
  "researchers": [
    "Kent Roian R. Basit",
    "Rochelle James C. Jaudian",
    "Francis Miguel C. Colaljo"
  ],
  "graduationYear": 2023,
  "program": "BS",
  "outputs": []
},
{
  "slug": "rainwater-harvesting-filtration",
  "shortTitle": "Rainwater collection, filtration and monitoring",
  "title": "Development and Evaluation of a Sustainable Rainwater Harvesting, Filter, and Monitoring System",
  "summary": "A system designed to collect, filter and monitor rainwater.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": null,
  "researchers": [
    "Charlie A. Figuracion",
    "Marichu O. Gaite",
    "Jason Cuajao"
  ],
  "graduationYear": 2023,
  "program": "BS",
  "outputs": []
},
{
  "slug": "rainwater-aeroponics",
  "shortTitle": "Rainwater harvesting and aeroponics monitoring",
  "title": "Real-Time Monitoring System for Integrated Rainwater Harvesting and Aeroponics: an IoT Applications",
  "summary": "Connected sensors designed to monitor an integrated rainwater harvesting and aeroponics system.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": "Antonio S. Marajas",
  "researchers": [
    "Kilsey Deannielle G. Javier",
    "Desirie Nicole C. Daligdig",
    "Jasiel Emro S. Anasco"
  ],
  "graduationYear": 2023,
  "program": "BS",
  "outputs": []
},
{
  "slug": "onion-garlic-vertical-farming",
  "shortTitle": "Vertical farming for onion and garlic",
  "title": "Smart Vertical Farming for (Allium Cepa) Onion and (Allium Sativum) Garlic Spices Using ESP8266",
  "summary": "An ESP8266-based system designed to support vertical farming of onion and garlic.",
  "adviser": "Apple Rose B. Alce",
  "coAdviser": null,
  "researchers": [
    "Kyle Christian P. Belono",
    "Teward G. Celesio",
    "Jezryl Ann F. Colanse"
  ],
  "graduationYear": 2023,
  "program": "BS",
  "outputs": []
}
];

// Explicit project associations; citation content and status come from one shared record.
const outputAssignments: Record<string, string[]> = {
  "avian-diversity": [
    "BirdNET in avian diversity monitoring: capabilities and challenges",
    "AvianTech: An Edge-AI IoT Architecture for Real-Time Multimodal Visual-Acoustic Avian Biodiversity Monitoring"
  ],
  "pedestrian-warning": [
    "From problem analysis to design thinking: Developing the SWiPS system for urban pedestrian safety",
    "ICT-enabled technologies for pedestrian safety: A scoping review"
  ],
  "hyperlocal-monitoring": [
    "Designing and Developing a Hyperlocal Air Quality Monitoring System for Philippine Urban Environments"
  ],
  "cacao-disease": [
    "AI-based disease detection for cacao black pod rot (p. palmivora): a scoping review"
  ],
  "goat-geofencing": [
    "Geo-Goat: Evaluation of a LoRaWAN-Enabled Geofencing Collar for Smallholder Goat Monitoring"
  ],
  "energy-management": [
    "Embedded IoT-Based Real-Time Room-Level Energy Monitoring, Load Control and Automated Billing System"
  ],
  "sign-language-headset": [
    "Development and Evaluation of a Wearable Headband-Based ASL Letter Recognition Prototype: A Pilot Feasibility, Usability, and Acceptance Study"
  ],
  "rice-tungro": [
    "Design and Development of a MobileNetV3-Based Rice Tungro Disease Detection Model for Raspberry Pi 5 Edge",
    "Bridging the Tungro Gap: A Systematic Literature Review of Edge-Optimized Deep Learning for Rice Disease Detection"
  ],
  "smart-goat-profiling": [
    "Internet of Things and Sensor-Based Systems for Livestock Profiling: A Systematic Literature Review",
    "A Requirement-Driven Architecture for Smart G-ID: Design and Development of a Goat Profiling and Trading System for Direct Farmer-to-Consumer Transactions"
  ],
  "bell-pepper-aphid-damage": [
    "Computational Approaches, Evidence Maturity, and Research Gaps in Bell-Pepper Disease and Pest Monitoring: A Systematic Literature Review"
  ]
};
// Lab papers are separate from Castor's personal publications: authorship is not implied by lab leadership.
const labPublications: ResearchOutput[] = [
  {
    title: "BirdNET in avian diversity monitoring: capabilities and challenges",
    authors: "Usman, A. M., Alce, A. R. B., & Galido, A. P.",
    venue: "Procedia Computer Science, 284, 1215–1223.",
    year: 2026,
    status: "Published",
    url: "https://doi.org/10.1016/j.procs.2026.07.109"
  },
  {
    title: "From problem analysis to design thinking: Developing the SWiPS system for urban pedestrian safety",
    authors: "Amboang, J. M. M., Alce, A. R. B., & Galido, A. P.",
    venue: "Procedia Computer Science, 284, 295–301.",
    year: 2026,
    status: "Published",
    url: "https://doi.org/10.1016/j.procs.2026.07.006"
  },
  {
    title: "ICT-enabled technologies for pedestrian safety: A scoping review",
    authors: "Amboang, J. M., Galido, A., & Alce, A. R. B.",
    venue: "PACIS 2025 Proceedings, Paper 7.",
    year: 2025,
    status: "Published",
    url: "https://aisel.aisnet.org/pacis2025/iot_smartcity/iot_smartcity/7/"
  }
];
// Owner-supplied conference record; acceptance, presentation and publication are not confirmed.
const labConferencePapers: ResearchOutput[] = [
  {
    title: "AvianTech: An Edge-AI IoT Architecture for Real-Time Multimodal Visual-Acoustic Avian Biodiversity Monitoring",
    authors: "Usman, A., Galido, A., Amboang, J. M., & Alce, A. R.",
    venue: "17th International Conference on Emerging Ubiquitous Systems and Pervasive Networks (EUSPN 2026), Almaty, Kazakhstan, October 28–30, 2026.",
    year: 2026,
    status: "Conference paper"
  }
];
const paperRecords = [...publications, ...conferencePapers, ...labPublications, ...labConferencePapers];
function findOutput(title: string): ResearchOutput {
  const paper = paperRecords.find(item => item.title === title);
  if (!paper) throw new Error(`Missing research citation: ${title}`);
  return paper;
}
export const thesisGroups: ThesisGroup[] = groupRecords.map(group => ({ ...group, outputs: (outputAssignments[group.slug] || []).map(findOutput) }));

export const programName = (program: ThesisGroup["program"]) => `${program} in Computer Applications`;
export const groupStatus = (group: ThesisGroup) => group.graduationYear ? `Graduates · Class of ${group.graduationYear}` : "Current researchers · Ongoing project";
