"use server";
import { ProjectType } from "../types";
import { prisma } from "../prisma";

type SaveProjectType = {
  id: number | null;
  project: ProjectType;
};
export async function saveProjectWithDefaults() {
  const project = {name: 'New Project', userId: 1};
  console.log("Saving project to database", project);
  try {
    const newProject = await prisma.project.create({
      data: {
        name: project.name, 
        userId: project.userId,
        audience: '',
        keywords: '',
        brand: '',
        existingContent: '',
        tone: '',
        channels: '',
        format: '',
        status: 'DRAFT',
        avatar: '', 
      }
    });
    return newProject;
  } catch (error) {
    console.error("Error saving project to database:", error);
    throw error;
  }
  
}
export async function fetchProjects() {
  // Fetch projects from database
  const userId = 1;
  console.log("Fetching projects from database for user", userId);
  try {
    const projects = await prisma.project.findMany({
      where: {
        userId: userId
      }
    });
    //console.log("Projects fetched from database", projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects from database:", error);
    throw error;
  }
}




export async function saveProject(project: SaveProjectType) {
  // Save project to database
  console.log("Saving project to database", project);
  try {
    if (project.id) {
        const updatedProject = await prisma.project.update({
          where: {
            id: project.id
          },
          data: {
            name: project.project.name,
            audience: project.project.audience || '',
            keywords: project.project.keywords,
            brand: project.project.brand,
            existingContent: project.project.existingContent,
            tone: project.project.tone,
            channels: project.project.channels,
            format: project.project.format,
            status: project.project.status,
            //
            // avatar: project.avatar
          }
        });
        console.log("Project updated in database", updatedProject);
    } else {
    const newProject = await prisma.project.create({
      data: {
        name: project.project.name,
        userId: project.project.userId,
        audience: project.project.audience || '',
        keywords: project.project.keywords,
        brand: project.project.brand,
        existingContent: project.project.existingContent,
        tone: project.project.tone,
        channels: project.project.channels,
        format: project.project.format,
        status: project.project.status,
        //
        // 
        // vatar: project.avatar
      }
    });
    console.log("Project saved to database", newProject);
    return newProject;
  }
  } catch (error) {
    console.error("Error saving project to database:", error);
    throw error;
  }
}
export async function fetchWebpageContent(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch the webpage: ${response.statusText}`);
        }
        const content = await response.text();
        return content;
    } catch (error) {
        console.error('Error fetching the webpage content:', error);
        throw error;
    }
}