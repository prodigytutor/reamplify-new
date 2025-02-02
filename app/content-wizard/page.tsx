import Wizard from '@/components/wizard'
import React from 'react'

type Props = {
  projectId: number
}

const ContentWizard = (props: Props) => {
  return (
    <div className='bg-gradient-to-br from-indigo-50 to-cyan-50'>
        <Wizard projectId={props.projectId} />
    </div>
  )
}
export default ContentWizard