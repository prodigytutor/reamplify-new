export type GeneratedContentType = {
  [x: string]: any
  header: string
  body: string
  hashtags: string[]
  image?: string
}
export type ProjectType = {
    reName: string
    audience: string
    keywords: string
    brand: string
    existing: string
    tone: string
    channels: string
    formats: string
    status: "active" | "inactive" | "completed";
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    id: string
}


export const sampleProjects: ProjectType[] = [
    {
      reName: "Project Alpha",
      audience: "Tech Enthusiasts",
      keywords: "technology, innovation",
      brand: "TechBrand",
      existing: "Existing campaign details for Project Alpha",
      tone: "Professional",
      channels: "Social Media, Email",
      formats: "Video, Blog Post",
      status: "active",
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-10"),
      id: "1"
    },
    {
      reName: "Project Beta",
      audience: "Health Conscious Individuals",
      keywords: "health, wellness",
      brand: "HealthBrand",
      existing: "Existing campaign details for Project Beta",
      tone: "Friendly",
      channels: "Website, Email",
      formats: "Article, Infographic",
      status: "inactive",
      createdAt: new Date("2023-02-01"),
      updatedAt: new Date("2023-02-10"),
      id: "2"
    },
    {
      reName: "Project Gamma",
      audience: "Fitness Enthusiasts",
      keywords: "fitness, exercise",
      brand: "FitBrand",
      existing: "Existing campaign details for Project Gamma",
      tone: "Motivational",
      channels: "Social Media, Website",
      formats: "Video, Podcast",
      status: "completed",
      createdAt: new Date("2023-03-01"),
      updatedAt: new Date("2023-03-10"),
      id: "3"
    }
  ];