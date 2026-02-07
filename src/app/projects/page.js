// projects/page.js 
// Components 
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

import { SiJavascript, SiWebgl, SiNextdotjs } from "react-icons/si"
import { RxGithubLogo } from "react-icons/rx"
import { PiFileCpp } from "react-icons/pi"
import { FaReact } from "react-icons/fa"
import { MdOutlineHtml } from "react-icons/md"
import { RiTailwindCssFill } from "react-icons/ri"

export default function Projectpage() {
    const projects = [
        {
            title: "Food Logger",
            description: "Program that contains personal health data and tracks nutritional intake from food information from a CSV file.",
            technologies: [
            { name: "C++", icon: <PiFileCpp key="cpp" className='inline mr-1 text-lg' /> }
            ],
            githuburl: "https://github.com/hnklua/Food-Logger"
        },
        {
            title: "Brainfuck Intepreter",
            description: "School project that interprets Brainfuck (.BF) files", 
            technologies: [
                { name: "C++", icon: <PiFileCpp key="cpp" className='inline mr-1 text-lg' /> }
            ],
            githuburl: "https://github.com/hnklua/BrainFuck-Intepreter"
        },
        {
            title: "Multithreaded Quicksort",
            description: "Paragraph placeholder information",
            technologies: [
                { name: "C++", icon: <PiFileCpp key="cpp" className='inline mr-1 text-lg' />}
            ],
            githuburl: "https://github.com/hnklua/MultiThreaded-Quicksort"
        },
        {
            title: "3D Graphics Engine", 
            description: "3D graphics engine primarily for gaming...",
            technologies: [
            { name: "JavaScript", icon: <SiJavascript key="js" className='inline mr-1 text-lg' /> },
            { name: "WebGL", icon: <SiWebgl key="webgl" className='inline mr-1 text-lg' /> },
            { name: "HTML", icon: <MdOutlineHtml key="html" className='inline mr-1 text-lg' /> }
            ], 
            githuburl: "https://github.com/hnklua/Game-Engine-" 
        },
        {
            title: "Personal Website",
            description: "The very website you're on!", 
            technologies: [
                {name: "Javascript", icon: <SiJavascript key="js" className='inline mr-1 text-lg' />},
                {name: "React", icon: <FaReact key="react" className='inline mr-1 text-lg' />},
                {name: "Tailwind", icon: <RiTailwindCssFill key="tailwind" className='inline mr-1 text-lg'/>},
                {name: "Next", icon: <SiNextdotjs key="next" className='inline mr-1 text-lg' />}
            ],
            githuburl: "https://github.com/hnklua/portfolio-website"
        }
    ]

    return (
        <div className='min-h-screen py-8 px-4'>
            <div className='max-w-6x1 mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-4x1 font-bold mb-4'>My Projects</h1>
                    <p className='text-gray-600 max-w-2x1 mx-auto'>
                        A collection of my personal programming projects.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap 6'>
                    {projects.map((project, index) => (
                        <Card key={index} className='h-full flex flex-col'>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className='text-gray-700 mb-4'>{project.description}</p>

                                <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant='secondary'>
                                            {tech.icon}
                                            {tech.name}
                                        </Badge>
                                    ))}
                                    </div>
                            </CardContent>

                            <CardFooter>
                                <Button asChild variant='outline' className="w-full">
                                    <Link 
                                    href={project.githuburl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <RxGithubLogo className='h-4 w-4'/>
                                        Github Repository
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
    )
}