import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { portraits } from "@/data/portraits";
import { people } from "@/data/people";
import { labHeads, thesisGroups } from "@/data/laboratory";
import { labPageMetadata } from "@/lib/labMetadata";

it("matches every portrait to a known person and a nonempty local asset", () => {
  const names = new Set([...people.map(person => person.name), ...labHeads.map(head => head.name)]);
  for (const [name, asset] of Object.entries(portraits)) {
    expect(names.has(name), name).toBe(true);
    expect(readFileSync(resolve("public", asset.src.slice(1))).length, name).toBeGreaterThan(0);
    expect(asset.width).toBeGreaterThan(0);
    expect(asset.height).toBeGreaterThan(0);
  }
  for (const name of ["Khara Myka T. Concepcion", "Karl Vincent C. Remo", "Cassandra Khan P. Mendoza"]) expect(portraits[name], name).toBeDefined();
});

it("keeps research URLs unique", () => {
  expect(new Set(thesisGroups.map(group => group.slug)).size).toBe(thesisGroups.length);
});

describe("sharing previews", () => {
  for (const path of ["/", "/lab", "/lab/research", ...thesisGroups.map(group => `/lab/research/${group.slug}`)]) {
    it(`provides an existing 1200 by 630 PNG for ${path}`, () => {
      const metadata = labPageMetadata(path);
      const file = resolve("public", new URL(metadata.image).pathname.slice(1));
      expect(existsSync(file)).toBe(true);
      const png = readFileSync(file);
      expect(png.toString("ascii", 1, 4)).toBe("PNG");
      expect(png.readUInt32BE(16)).toBe(1200);
      expect(png.readUInt32BE(20)).toBe(630);
      if (path.startsWith("/lab")) expect(metadata.image).not.toBe(labPageMetadata("/").image);
    });
  }
});
