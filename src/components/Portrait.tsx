import { useState } from "react";
import { portraits } from "@/data/portraits";

export default function Portrait({ name, className = "", optional = false }: { name: string; className?: string; optional?: boolean }) {
  const asset = portraits[name];
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const available = asset && failedSource !== asset.src;
  if (!available && optional) return null;
  return <div className={`portrait-placeholder ${className}`} aria-hidden="true">
    {available && <img src={asset.src} width={asset.width} height={asset.height} alt="" loading="lazy" decoding="async" onError={() => setFailedSource(asset.src)} />}
  </div>;
}
