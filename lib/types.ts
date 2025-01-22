export type GeneratedContentType = {
  [x: string]: any
  header: string
  body: string
  hashtags: string[]
  image?: string
}
export type ProjectType = {
    name: string
    userId: number
    audience: string
    keywords: string
    brand: string
    existingContent: string
    tone: string
    channels: string
    format: string
    status: "ACTIVE" | "INACTIVE" | "COMPLETED" | "CANCELLED";
    avatar?: string;
}


export const sampleProjects: ProjectType[] = [
    {
      name: "Project Alpha",
      userId: 1,
      audience: "Tech Enthusiasts",
      keywords: "technology",
      brand: "TechBrand",
      existingContent: "Existing campaign details for Project Alpha",
      tone: "Professional",
      channels: "Email",
      format: "Video, Blog Post",
      status: "ACTIVE",

    },
    {
      name: "Project Beta",
      userId: 1,
      audience: "Health Conscious Individuals",
      keywords: "technology",
      brand: "TechBrand",
      existingContent: "Existing campaign details for Project Alpha",
      tone: "Professional",
      channels: "Email",
      format: "Video, Blog Post",
      status: "INACTIVE",
    },
    {
      name: "Project Gamma",
      userId: 1,
      audience: "Fitness Enthusiasts",
      keywords: "fitness",
      brand: "FitBrand",
      existingContent: "Existing campaign details for Project Gamma",
      tone: "Motivational",
      channels: "Social Media",
      format: "Image, Video",
      status: "COMPLETED",
    }
  ];