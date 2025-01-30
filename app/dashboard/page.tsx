'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileText, BarChart, Users, ArrowUpRight, Plus } from 'lucide-react'
import { fadeIn, staggerChildren, scaleIn } from '../../utils/animations'
import Link from 'next/link'
import { fetchProjects, saveProjectWithDefaults } from '@/lib/actions/project'
import CurrentProjects from '@/components/CurrentProjects'

// Mock data for the dashboard
const projectsData = [
  { id: 1, name: "Blog to Social Media", progress: 75, status: "In Progress" },
  { id: 2, name: "Podcast to Newsletter", progress: 100, status: "Completed" },
  { id: 3, name: "YouTube to Twitter Thread", progress: 30, status: "In Progress" },
  { id: 4, name: "Webinar to LinkedIn Posts", progress: 0, status: "Not Started" },
]

const recentActivities = [
  { id: 1, action: "Project Created", project: "Webinar to LinkedIn Posts", time: "2 hours ago" },
  { id: 2, action: "Content Repurposed", project: "Podcast to Newsletter", time: "5 hours ago" },
  { id: 3, action: "Progress Update", project: "Blog to Social Media", time: "1 day ago" },
]

export default function Dashboard() {
const projects = fetchProjects()
  console.log("Dashboard")
  function handleClick() {
    console.log("New Project")
    const newProject = saveProjectWithDefaults()
    console.log("New Project", newProject)
  } 
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <motion.div 
          className="text-2xl font-bold text-gray-900 dark:text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          ReAmplify Dashboard
        </motion.div>
      </header>
      
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <motion.div 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div variants={scaleIn}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Content Pieces Created</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,678</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
         {/* current orojects */}
         <CurrentProjects projectsData={projects} />
          <motion.div className="col-span-3" variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {recentActivities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell className="font-medium">{activity.action}</TableCell>
                        <TableCell>{activity.project}</TableCell>
                        <TableCell className="text-right">{activity.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Link href="/content-wizard">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
          </Link>
          <Button onClick={handleClick} className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="mr-2 h-4 w-4" /> New Default Project
          </Button>
        </motion.div>
      </main>

      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white/30 dark:bg-gray-800/30 backdrop-blur-md">
        <p className="text-xs text-center text-gray-700 dark:text-gray-300">© 2023 ContentAI. All rights reserved.</p>
      </footer>
    </div>
  )
}


/* "use client"
import NoProjects from '@/components/NoProjects'
import React, { useState } from 'react'
import { ProjectType, sampleProjects } from '@/lib/types'
import ProjectCard from '@/components/ProjectCard'


const DsahboardPage = (props: ProjectType) => {
  const [noProjects, setNoProjects] = useState(false)
  const [projects, setProjects] = useState<ProjectType[]>([])
    React.useEffect(() => {
        setProjects(sampleProjects)
        if (projects.length > 0) {
            setNoProjects(true)
        }
    }, [])
  return (
    <div className='grid gap-4 grid-cols-3 grid-rows-3 bg-gradient-to-br from-indigo-50 to-cyan-50'>
        {noProjects && (
            <NoProjects />
        )}
        {projects.length > 0 && (
            projects.map((project) => (
                <div className='border' key={project.id}>
                   <ProjectCard {...project} />
                </div>
            )
        ))}
       
    </div>
  )
}
export default DsahboardPage */