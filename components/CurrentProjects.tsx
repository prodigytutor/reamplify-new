import { motion } from 'framer-motion'
import React from 'react'
import motiom from "framer-motion"

import { fadeIn } from '@/utils/animations'
import { Progress } from '@radix-ui/react-progress'
import { Table } from 'lucide-react'
import { CardHeader, CardTitle, CardContent, Card } from './ui/card'
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table'
import { ProjectType } from '@/lib/types'

const CurrentProjects = (projectsData:  ProjectType[]) => {
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
                    {projectsData.map((project, index) => (
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
export default CurrentProjects