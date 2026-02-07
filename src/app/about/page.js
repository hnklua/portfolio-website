import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

import { HiComputerDesktop } from "react-icons/hi2";
import { RxGithubLogo } from "react-icons/rx"
import { FaPaintBrush } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

export default function AboutPage() {
    const biography = [
        {
            title: "A quick background",
            paragraph: "I am an undergraduate student studying Computer Science at Washington State University with a good foundation in coding, testing, and full-stack development. I am passionate about creating intuitive, engaging, and fun.",
            icon: [<HiComputerDesktop key="cmp" className='text-2xl'/>]
        },
        {
            title: "Frontend Development",
            paragraph: "My frontend proficiency stems from experience in using numerous JavaScript frameworks and APIs, including React (Next.js) for web development and libGDX for game development.",
            icon: [<FaPaintBrush key="fnd" className='text-2xl'/>]
        },
        {
            title: "Backend & Systems",
            paragraph: "My backend proficiency stems from game development, including WebGL for my Game engine and systems programming utilizing multi-threaded applications.",
            icon: [<FaScrewdriverWrench key="bnd" className='2xl'/>],
        },
    ]

    const githuburl = "https://github.com/hnklua"
    
    return (
        <div className='min-h-screen py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold mb-4'>About Me</h1>
                    <p className='text-gray-600 text-lg'>
                        Computer Science undergraduate passionate about building software thats fun and functional!
                    </p>
                </div>

                {/*Profile*/}
                <Card className='mb-8'>
                <CardContent className='pt-6'>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                    {/* Profile picture */}
                    <Avatar className='size-24 md:size-32'>
                        <AvatarImage src="https://github.com/hnklua.png" alt="GitHub Profile" />
                        <AvatarFallback className='text-2xl'>CO</AvatarFallback>
                    </Avatar>
                    
                    {/* Text content */}
                    <div className='text-center md:text-left'>
                        <h2 className='text-2xl font-bold mb-2'>Washington State University</h2>
                        <p className='text-gray-700 mb-4'>
                        B.S. Computer Science | Expected Graduation: 2027
                        </p>
                        <p className='text-gray-600'>
                        Focus on full-stack development, game development, and systems architecture.
                        </p>
                    </div>
                </div>
                </CardContent>
                <CardFooter>
                    <Button asChild variant='outline' className='w-full gap-2'>
                        <Link
                            href={githuburl}
                            target="_blank"
                            rel="noopener noreferrer">
                            <RxGithubLogo className='h-4 w-4'/>
                            Github 
                        </Link>
                    </Button>
                </CardFooter>
                </Card>

                {/* Skills and experience */} 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                    {biography.map((section, index) => (
                        <Card key={index} className='h-full'>
                            <CardHeader className='flex items-center gap-3'>
                                <span className='text-2xl'>{section.icon}</span>
                                <CardTitle>{section.title}</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className='text-gray-700'>{section.paragraph}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}