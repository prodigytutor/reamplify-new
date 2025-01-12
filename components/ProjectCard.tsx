import React from 'react'
import { ProjectType } from '@/lib/types'


const ProjectCard = (props: ProjectType) => {
    return (
        <div>
            <div className="py-8 bg-oklch(0.967 0.003 264.542)">
                <div className="px-4">
                    <ul className="grid-cols-1 grid-rows-1 grid list-none gap-6">
                        <li className="bg-white list-item rounded-lg col-span-1">
                            <div className="items-center border-b-oklch(0.928 0.006 264.531) border-b-2 justify-between flex border-solid p-6">
                                <div className="flex-grow text-ellipsis">
                                    <div className="items-center flex font-medium">
                                        <h3 className="text-oklch(0.21 0.034 264.665) text-sm">{props.reName}</h3>
                                        <span className="text-oklch(0.527 0.154 150.069) bg-oklch(0.982 0.018 155.826) items-center text-xs py-1 px-1.5 flex rounded-full">{props.status}</span>
                                    </div>
                                    <p className="text-oklch(0.551 0.027 264.364) text-sm">{props.tone}</p>
                                    <p className="text-oklch(0.551 0.027 264.364) text-sm">{props.audience}</p>
                                </div>
                                <img className="bg-oklch(0.872 0.01 258.338) w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" />
                            </div>
                            <div className="flex text-sm text-oklch(0.21 0.034 264.665) font-semibold">
                                <div className="border-r-oklch(0.928 0.006 264.531) border-r-2 flex-grow flex border-solid">
                                    <a className="items-center rounded-bl-lg gap-x-3 flex-grow justify-center py-4 flex" href="https://tailwindui.com/mailto:janecooper@example.com">
                                        <svg className="text-oklch(0.707 0.022 261.325) cursor-pointer w-5 h-5" fill="oklch(0.707 0.022 261.325)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" fill="oklch(0.707 0.022 261.325)" />
                                            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" fill="oklch(0.707 0.022 261.325)" />
                                        </svg>
                                        {props.channels}
                                    </a>
                                </div>
                                <div className="flex-grow flex">
                                    <a className="items-center rounded-br-lg gap-x-3 flex-grow justify-center py-4 flex" href="https://tailwindui.com/tel:+1-202-555-0170">
                                        <svg className="text-oklch(0.707 0.022 261.325) cursor-pointer w-5 h-5" fill="oklch(0.707 0.022 261.325)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" fill="oklch(0.707 0.022 261.325)" fillRule="evenodd" />
                                        </svg>
                                        {props.formats}
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default ProjectCard