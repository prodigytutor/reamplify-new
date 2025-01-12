import React from 'react'
import { GeneratedContentType } from '@/lib/types'

const GeneratedContent = (props: GeneratedContentType) => {
    console.log("generated content props", props)
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={props.image || props.notifications[0].image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {props.header || props.notifications[0].header}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{props.body || props.notifications[0].body}</p>
      <div className="card-actions justify-end">
       
          <div className="badge badge-outline">{props.hashtags || props.notifications[0].hashtags}</div>
        
      </div>
    </div>
  </div>
  )
}
export default GeneratedContent