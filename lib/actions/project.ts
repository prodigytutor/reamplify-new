"use server";
import { ProjectType } from "../types";
import { prisma } from "../prisma";


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
    console.log("Projects fetched from database", projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects from database:", error);
    throw error;
  }
}




export async function saveProject(project: ProjectType) {
  // Save project to database
  console.log("Saving project to database", project);
  try {
    const newProject = await prisma.project.create({
      data: {
        name: project.name,
        userId: project.userId,
        audience: project.audience,
        keywords: project.keywords,
        brand: project.brand,
        existingContent: project.existingContent,
        tone: project.tone,
        channels: project.channels,
        format: project.format,
        status: project.status,
        //
        // 
        // vatar: project.avatar
      }
    });
    console.log("Project saved to database", newProject);
    return newProject;
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