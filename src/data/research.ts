// Public academic records from the owner-supplied October 2026 CV.
// Conference dates alone do not establish acceptance, presentation, or publication.
export type ResearchPaper = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
  status: "Published" | "Accepted" | "Conference paper";
  role: string;
};

export const publications: ResearchPaper[] = [
  {
    "title": "AI-based disease detection for cacao black pod rot (p. palmivora): a scoping review",
    "authors": "Balayon, N. C. P., Castor, P. R. P., & Galido, A. P.",
    "venue": "Procedia Computer Science, 284, 1150–1157.",
    "year": 2026,
    "url": "https://doi.org/10.1016/j.procs.2026.07.102",
    "status": "Published",
    "role": "Co-author"
  },
  {
    "title": "My.BoardHub: Development of a Single-Board Computer-Based Security System Using Artificial Intelligence of Things for Boarding Houses",
    "authors": "Valdepeñas, R. M., Generalao, M. G. C., Suario, S. B., Alce, A. R. B., Castor, P. R. P., Villanueva, J. F. B., Alindayo, L. A., & Empig, E. E.",
    "venue": "In Lecture Notes in Networks and Systems (pp. 59–70). Springer Nature Switzerland.",
    "year": 2025,
    "url": "https://doi.org/10.1007/978-3-032-06634-3_6",
    "status": "Published",
    "role": "Co-author"
  },
  {
    "title": "Developing a Computer Vision Model to Classify Abaca Fibers Using YOLOv8",
    "authors": "Ligutom, K. D., Alindayo, L. A., Castor, P. R. P., & Bahinting, M. F. P.",
    "venue": "Journal of Information Systems Engineering and Management, 10(19s), 352–361.",
    "year": 2025,
    "url": "https://doi.org/10.52783/jisem.v10i19s.3035",
    "status": "Published",
    "role": "Co-author"
  },
  {
    "title": "Design and Development of a University Outdoor Air Quality Monitoring System",
    "authors": "Castor, P. R. P., Nabua, M. A., Bokingkito, Jr., P. B., Alce, A. R. B., & Galido, A. P.",
    "venue": "Procedia Computer Science, 234, 1697–1704.",
    "year": 2024,
    "url": "https://doi.org/10.1016/j.procs.2024.03.175",
    "status": "Published",
    "role": "First author"
  },
  {
    "title": "Development of an Image-Based Reverse Vending Machine Using Raspberry Pi",
    "authors": "Colaljo, F. M., Basit, K. R., Jaudian, R. J., Alce, A. R., Castor, P. R., Bokingkito, P., Marajas, A., Caparida, S. M., & Galido, A.",
    "venue": "In Lecture Notes in Networks and Systems (pp. 102–112). Springer Nature Switzerland.",
    "year": 2024,
    "url": "https://doi.org/10.1007/978-3-031-73344-4_8",
    "status": "Published",
    "role": "Co-author"
  },
  {
    "title": "Eyeway: An Artificial Intelligence Of Things Pothole Detection System With Map Visualization",
    "authors": "Fortin, L. V., Santos, A. R. V. D., Cagud, P. J. B., Castor, P. R., & Llantos, O. E.",
    "venue": "Procedia Computer Science, 251, 216–223.",
    "year": 2024,
    "url": "https://doi.org/10.1016/j.procs.2024.11.103",
    "status": "Published",
    "role": "Co-author"
  }
];

export const conferencePapers: ResearchPaper[] = [
  {
    "title": "Integrated Machine Connectivity and High-Frequency Spindle Current Acquisition for CNC Command-Guided Process Segmentation toward Tool Wear Prediction",
    "authors": "Castor, P. R. P., Castillo, P. A. E., Macogay, K. C., Paciteng, J. S., & Chu, H.-Y.",
    "venue": "International Conference on Engineering Tribology and Applied Technology 2026 (ICETAT 2026), Tainan, Taiwan, November 6–8, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "First author"
  },
  {
    "title": "Computational Approaches, Evidence Maturity, and Research Gaps in Bell-Pepper Disease and Pest Monitoring: A Systematic Literature Review",
    "authors": "Listanco, T., Cañete, P., Tanque, S. R., Alce, A. R. B., & Castor, P. R. P.",
    "venue": "17th International Conference on Emerging Ubiquitous Systems and Pervasive Networks (EUSPN 2026), Almaty, Kazakhstan, October 28–30, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Design and Development of a MobileNetV3-Based Rice Tungro Disease Detection Model for Raspberry Pi 5 Edge",
    "authors": "Larita, C. G., Castor, P. R. P., Alce, A. R., & Villaruz–Quimque, H. M.",
    "venue": "17th International Conference on Emerging Ubiquitous Systems and Pervasive Networks (EUSPN 2026), Almaty, Kazakhstan, October 28–30, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Embedded IoT-Based Real-Time Room-Level Energy Monitoring, Load Control and Automated Billing System",
    "authors": "Alce, A. R. B., Shanmugam, M., Torregoza, P. B. D., Zapatos, D. K. G., Tuba, J. K. A., Castor, P. R. P., & Zaman, H. B.",
    "venue": "2026 IEEE International Conference on Computing (ICOCO), Langkawi, Kedah, Malaysia, October 12–14, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "A Systematic Review on AI-Based Detection of Rubber Tree Leaf Diseases",
    "authors": "Russel, I. S., Castor, P. R. P., & Llantos, O. E.",
    "venue": "6th International Conference on Novel & Intelligent Digital Systems (NiDS 2026), Athens, Greece, September 24–26, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Internet of Things and Sensor-Based Systems for Livestock Profiling: A Systematic Literature Review",
    "authors": "Castillo, P. A. E., Andres, A. E. L., Bernal, J. B. D., Castor, P. R. P., Parmisana, V. R., & Empig, E. E.",
    "venue": "6th International Conference on Novel & Intelligent Digital Systems (NiDS 2026), Athens, Greece, September 24–26, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Designing and Developing a Hyperlocal Air Quality Monitoring System for Philippine Urban Environments",
    "authors": "Apao, M. J. A., Castor, P. R. P., & Galido, A. P.",
    "venue": "6th International Conference on Novel & Intelligent Digital Systems (NiDS 2026), Athens, Greece, September 24–26, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Bridging the Tungro Gap: A Systematic Literature Review of Edge-Optimized Deep Learning for Rice Disease Detection",
    "authors": "Larita, C. G., Alce, A. R. B., Castor, P. R. P., & Villaruz–Quimque, H. M.",
    "venue": "6th International Conference on Novel & Intelligent Digital Systems (NiDS 2026), Athens, Greece, September 24–26, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Development and Evaluation of a Wearable Headband-Based ASL Letter Recognition Prototype: A Pilot Feasibility, Usability, and Acceptance Study",
    "authors": "Narvasa, D. J. A., Colao, J. O. T., Jalbuna, G. R. C., Castor, P. R. P., & Alce, A. R. B.",
    "venue": "6th International Conference on Novel & Intelligent Digital Systems (NiDS 2026), Athens, Greece, September 24–26, 2026.",
    "year": 2026,
    "status": "Accepted",
    "role": "Co-author"
  },
  {
    "title": "IoT-Based CO₂ Monitoring for Sustainable Indoor and Outdoor Environments",
    "authors": "Abarca, R. R., Abilay, E., Alce, A. R., & Castor, P. R. P.",
    "venue": "2nd International Conference on UN SDGs and Social Innovation (ICUNSSI 2026), Iligan City, Philippines, September 24–25, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "A Requirement-Driven Architecture for Smart G-ID: Design and Development of a Goat Profiling and Trading System for Direct Farmer-to-Consumer Transactions",
    "authors": "Castillo, P. A. E., Andres, A. E. E., Bernal, J. B. D., Empig, E. E., Castor, P. R. P., Parmisana, V. R., Galido, A. P., & Villanueva, J. F. B.",
    "venue": "2nd International Conference on UN SDGs and Social Innovation (ICUNSSI 2026), Iligan City, Philippines, September 24–25, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  },
  {
    "title": "Geo-Goat: Evaluation of a LoRaWAN-Enabled Geofencing Collar for Smallholder Goat Monitoring",
    "authors": "Escolano, M. J. J., Tagorda, I. M. A., Tenecio, Y. C. C., Alce, A. R. B., & Castor, P. R. P.",
    "venue": "2026 13th International Conference on Electrical Engineering, Computer Science and Informatics (EECSI), Yogyakarta, Indonesia, September 2–3, 2026.",
    "year": 2026,
    "status": "Accepted",
    "role": "Co-author"
  },
  {
    "title": "Bunchy Top Virus Detection from UAV Imagery Using DeepLabv3+ with MobileNetV2: A Semantic Segmentation Approach",
    "authors": "Repulle, J., Alindayo, L. A., Castor, P. R. P., Bahinting, M. F., & Alce, A. R. B.",
    "venue": "4th International Conference on Computer, Cybernetics and Education (ICCCE), Bali, Indonesia, February 27–28, 2026.",
    "year": 2026,
    "status": "Conference paper",
    "role": "Co-author"
  }
];
