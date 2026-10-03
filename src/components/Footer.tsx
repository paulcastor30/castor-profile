import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="portfolio-container site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <a href="#home">Back to the beginning ↑</a>
    </footer>
  );
}
