import React from 'react'

type Props = {
  header: string
  body: string
  hashtags: string[]
  image?: string
}

const GeneratedContent = (props: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={props.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.header}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{props.body}</p>
    <div className="card-actions justify-end">
      {props.hashtags.map((hashtag) => (
        <div className="badge badge-outline">{hashtag}</div>
      ))}
    </div>
  </div>
</div>
  )
}