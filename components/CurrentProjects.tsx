import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import motiom from "framer-motion"

import { fadeIn } from '@/utils/animations'
import { Progress } from '@radix-ui/react-progress'
import { Table } from 'lucide-react'
import { CardHeader, CardTitle, CardContent, Card } from './ui/card'
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table'
import { ProjectType } from '@/lib/types'
import { fetchProjects } from '@/lib/actions/project'


export default async function CurrentProjects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const projects = await fetchProjects();
        setProjects(projects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <motion.div className="col-span-4" variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>Current Projects</CardTitle>
              </CardHeader>
              <CardContent>
                 <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project: ProjectType, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>
                          <Progress value={50} className="w-[60%]" />
                        </TableCell>
                        <TableCell>{project.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
  )
}
