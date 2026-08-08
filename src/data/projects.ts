export interface Project {
  slug: string;
  title: string;
  location: string | null;
  completionDate: string | null;
  status: "tamamlandi" | "devam-ediyor" | null;
  unitCount: number | null;
  description: string | null;
  coverImage: string | null;
}

// No verified project data has been provided yet.
// Do not invent project names, locations, dates, or statistics.
export const projects: Project[] = [];
