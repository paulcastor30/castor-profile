import { profile } from "@/lib/profile";

const pubs = [
  {
    title: "Design and Development of a University Outdoor Air Quality Monitoring System",
    doi: "https://doi.org/10.1016/j.procs.2024.03.175",
    venue: "Procedia Computer Science, 2024",
    year: "2024",
    role: "First author",
    indexed: "Scopus indexed",
    category: "IoT",
  },
  {
    title: "Developing a computer vision model to classify abaca fibers using YOLOv8",
    doi: "https://doi.org/10.52783/jisem.v10i19s.3035",
    venue: "Journal of Information Systems Engineering and Management, 2025",
    year: "2025",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "Computer Vision",
  },
  {
    title: "My.BoardHub: Development of a Single-Board Computer-Based Security System Using Artificial Intelligence of Things for Boarding Houses",
    doi: "https://doi.org/10.1007/978-3-032-06634-3_6",
    venue: "Lecture Notes in Networks and Systems, 2025",
    year: "2025",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "AIoT",
  },
  {
    title: "Development of an Image-Based Reverse Vending Machine Using Raspberry Pi",
    doi: "https://doi.org/10.1007/978-3-031-73344-4_8",
    venue: "Lecture Notes in Networks and Systems, 2024",
    year: "2024",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "Computer Vision",
  },
  {
    title: "Eyeway: An Artificial Intelligence Of Things Pothole Detection System With Map Visualization",
    doi: "https://doi.org/10.1016/j.procs.2024.11.103",
    venue: "Procedia Computer Science, 2024",
    year: "2024",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "AIoT",
  },
];


export default function Publications() {
  return (
    <div className="publication-list">
      <p>Selected papers from my research and collaborations. Select a paper’s title to open its publisher page.</p>
      {pubs.map(paper => (
        <article key={paper.title}>
          <h3><a href={paper.doi}>{paper.title}</a></h3>
          <p>{paper.venue} · {paper.role}</p>
        </article>
      ))}
      <a className="text-link" href={`mailto:${profile.email}?subject=Question%20about%20your%20research`}>Email me about a research paper <span aria-hidden="true">↗</span></a>
    </div>
  );
}
