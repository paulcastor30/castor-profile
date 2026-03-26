import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

type Pub = {
  title: string;
  venue: string;
  year: string;
  role: string;
  indexed: string;
  category: string;
};

const pubs: Pub[] = [
  {
    title: "Design and Development of a University Outdoor Air Quality Monitoring System",
    venue: "Procedia Computer Science, 2024",
    year: "2024",
    role: "First author",
    indexed: "Scopus indexed",
    category: "IoT",
  },
  {
    title: "Developing a computer vision model to classify abaca fibers using YOLOv8",
    venue: "Journal of Information Systems Engineering and Management, 2025",
    year: "2025",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "Computer Vision",
  },
  {
    title: "My.BoardHub: Development of a Single-Board Computer-Based Security System Using Artificial Intelligence of Things for Boarding Houses",
    venue: "Lecture Notes in Networks and Systems, 2025",
    year: "2025",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "AIoT",
  },
  {
    title: "Development of an Image-Based Reverse Vending Machine Using Raspberry Pi",
    venue: "Lecture Notes in Networks and Systems, 2024",
    year: "2024",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "Computer Vision",
  },
  {
    title: "Eyeway: An Artificial Intelligence Of Things Pothole Detection System With Map Visualization",
    venue: "Procedia Computer Science, 2024",
    year: "2024",
    role: "Co-author",
    indexed: "Scopus indexed",
    category: "AIoT",
  },
];

const categories = ["All", ...Array.from(new Set(pubs.map((p) => p.category)))];

export default function Publications() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? pubs : pubs.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="publications" alt>
      <SectionHeading title="Publications" subtitle="Peer-reviewed research indexed in Scopus and international conferences." />

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-1.5 text-sm rounded-full font-medium transition-colors ${
              filter === c
                ? "bg-teal text-accent-foreground"
                : "bg-card border border-border text-text-secondary hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((p, i) => (
          <article
            key={i}
            className="p-5 rounded-xl border border-border bg-card hover:border-teal/30 hover:shadow-sm transition-all"
          >
            <h3 className="text-base font-semibold text-foreground leading-snug">{p.title}</h3>
            <p className="text-sm text-text-secondary mt-2">{p.venue}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-teal-muted text-teal font-medium">{p.role}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-medium">{p.indexed}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-medium">{p.category}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://scholar.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:text-teal-light font-medium text-sm transition-colors"
        >
          View full publication profile on Google Scholar ↗
        </a>
      </div>
    </SectionWrapper>
  );
}
