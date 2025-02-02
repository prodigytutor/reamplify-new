import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Link from "next/link"
import { saveProjectWithDefaults } from '@/lib/actions/project'

const NewProject = () => {
  const [projectReady, setProjectReady] = useState(false);
  try {
    const newProject = saveProjectWithDefaults()
    console.log("New Project", newProject)
  }
  catch (error) {
    console.error('Failed to save new project:', error);
  }
  return (
    <Dialog>
  <DialogTrigger>New Project</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create a new project</DialogTitle>
      <DialogDescription>
        This action creates a new project.
      </DialogDescription>
    </DialogHeader>
    <Link href="/content-wizard">Go To Content Wizard</Link>
  </DialogContent>
</Dialog>
  )
}
export default NewProject