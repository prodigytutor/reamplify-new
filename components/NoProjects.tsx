import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
type Props = {}

const NoProjects = (props: Props) => {
  return (
    <div>
        <div className="py-12 px-4">
  <div className="text-center">
    <svg className="text-oklch(0.707 0.022 261.325) w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="none" stroke="oklch(0.707 0.022 261.325)" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
    <h3 className="text-oklch(0.21 0.034 264.665) text-sm font-semibold">No projects</h3>
    <p className="text-oklch(0.551 0.027 264.364) text-sm">Get started by creating a new project.</p>
    <Button className="text-white bg-oklch(0.511 0.262 276.966) items-center text-sm font-semibold py-2 px-3 inline-flex w-32 h-9 rounded-md">
      <svg className="w-5 h-5" fill="rgb(255, 255, 255)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" fill="rgb(255, 255, 255)" />
      </svg>
      <Link href='/content-wizard'>New Project</Link>
    </Button>
  </div>
</div>


    </div>
  )
}
export default NoProjects