import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";
import LabResearch from "@/pages/LabResearch";
import LabPeople from "@/pages/LabPeople";
import { AppRoutes } from "@/App";
import { thesisGroups } from "@/data/laboratory";

const routerOptions = { v7_startTransition: true, v7_relativeSplatPath: true };
afterEach(cleanup);

it("offers a working app and selected publications on the text-first homepage", () => {
  const { container } = render(<MemoryRouter future={routerOptions}><Index /></MemoryRouter>);
  expect(container.querySelector(".hero img")).toBeNull();
  const featured = container.querySelector(".featured-work") as HTMLElement;
  expect(within(featured).getByRole("link", { name: "Open the time record generator" })).toHaveAttribute("href", "https://paulcastor30.github.io/dtr-fdtr-generator/");
  const publications = screen.getByRole("region", { name: "Research publications" });
  expect(within(publications).getByRole("link", { name: "Design and Development of a University Outdoor Air Quality Monitoring System" })).toBeVisible();
  expect(within(publications).getByRole("link", { name: /AI-based disease detection for cacao/ })).toBeVisible();
  expect(screen.getByRole("link", { name: "Publications" })).toHaveAttribute("href", "#publications");
});

it("combines topic, program, and cohort filters and recovers from no results", () => {
  const { container } = render(<MemoryRouter future={routerOptions} initialEntries={["/lab/research?q=goat"]}><LabResearch /></MemoryRouter>);
  const search = screen.getByRole("searchbox");
  expect(search).toHaveValue("goat");
  expect(container.querySelectorAll(".research-card")).toHaveLength(2);
  fireEvent.change(screen.getByLabelText("Status / graduation class"), { target: { value: "current" } });
  expect(container.querySelectorAll(".research-card")).toHaveLength(1);
  fireEvent.change(screen.getByLabelText("Program"), { target: { value: "MS" } });
  expect(screen.getByRole("heading", { name: "No groups match these filters" })).toBeVisible();
  fireEvent.click(screen.getByRole("button", { name: "Show all research" }));
  expect(search).toHaveValue("");
  expect(container.querySelectorAll(".research-card")).toHaveLength(thesisGroups.length);
});

it("finds researcher names without requiring accents", () => {
  render(<MemoryRouter future={routerOptions} initialEntries={["/lab/people?q=canete"]}><LabPeople /></MemoryRouter>);
  expect(screen.getByRole("heading", { name: "Cañete, Phoebien D." })).toBeVisible();
  expect(screen.getByRole("link", { name: "Research: Aphid damage detection in bell peppers" })).toHaveAttribute("href", "/lab/research/bell-pepper-aphid-damage");
});

describe("direct project routes", () => {
  for (const group of thesisGroups) {
    it(`renders ${group.slug} with its team and contact`, () => {
      render(<MemoryRouter future={routerOptions} initialEntries={[`/lab/research/${group.slug}`]}><AppRoutes /></MemoryRouter>);
      expect(screen.getByRole("heading", { level: 1, name: group.shortTitle })).toBeVisible();
      for (const name of group.researchers) expect(screen.getByRole("heading", { name })).toBeVisible();
      expect(screen.getByRole("link", { name: `Email about ${group.shortTitle}` }).getAttribute("href")).toMatch(/^mailto:/);
    });
  }
});
