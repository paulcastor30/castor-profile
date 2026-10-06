import { thesisGroups, type ThesisGroup } from "./laboratory";
export type LabPerson = { name: string; memberships: ThesisGroup[] };
export const normalizeSearch = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const directory = new Map<string, LabPerson>();
for (const group of thesisGroups) for (const name of group.researchers) {
  const person = directory.get(name) || { name, memberships: [] };
  person.memberships.push(group);
  directory.set(name, person);
}
export const compareMemberships = (a: ThesisGroup, b: ThesisGroup) => Number(a.graduationYear !== null) - Number(b.graduationYear !== null) || (b.graduationYear || 0) - (a.graduationYear || 0) || Number(a.program === "BS") - Number(b.program === "BS");
export const people = [...directory.values()].map(person => ({ ...person, memberships: [...person.memberships].sort((a, b) => compareMemberships(a, b)) }));
export const surname = (name: string) => name.replace(/\s+(Jr\.|III)$/i, "").trim().split(/\s+/).at(-1) || name;
export const membershipHeading = (group: ThesisGroup) => `${group.graduationYear ? `Graduates · Class of ${group.graduationYear}` : "Current researchers"} · ${group.program}CA`;

export function surnameFirst(name: string) {
  const suffix = name.match(/\s+(Jr\.|III)$/i)?.[0] || "";
  const fullName = suffix ? name.slice(0, -suffix.length) : name;
  const familyName = surname(name);
  const givenNames = fullName.slice(0, -(familyName.length)).trim();
  return givenNames ? `${familyName}, ${givenNames}${suffix}` : name;
}
