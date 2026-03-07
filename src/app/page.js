import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

import { PiReadCvLogoDuotone } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";

export default function HomeCard() {
  const homeCard = [
    {
      title: "Introductions", 
      description: "Undergraduate Computer Science student at Washington State University. I specialize in full stack development, game development and developing fun, functional software.",
      icon: <GiGraduateCap className='text-2xl'/>,
      buttonText: "Learn More",
      buttonLink: "/about",
      external: false
    },
    {
      title: "Featured Project",
      description: "My WebGL based 3D Game engine features real time lighting and procedural terrain generation.",
      icon: <FaGamepad className='text-2xl'/>,
      buttonText: "View on Github",
      buttonLink: "https://github.com/hnklua/Game-Engine-", 
      external: true
    },
    {
      title: "My CV", 
      description: "Here is my official Resume for a detailed overview of all the projects I've worked on!",
      icon: <PiReadCvLogoDuotone className='text-2xl'/>,
      buttonText: "View CV",
      buttonLink: "/Software Engineer Resume.pdf", 
      external: true,
      download: true
    },
    {
      title: "Contact Me", 
      description: "Want to reach out to me? Feel free to contact me and I'll respond to you! (Professional Inquiries Only).",
      icon: <MdConnectWithoutContact className='text-2xl'/>,
      buttonText: "Contact Me",
      buttonLink: "/contact",
      external: false
    }
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-emerald-300 font-bold mb-4">Turning imagination into software!</h1>
          <p className='text-amber-200 text-shadow-md'>Here you can explore my work and get to know me.</p>
        </div>

        {/* Card Grid */}
        <div className='flex flex-col gap-6'>
          {homeCard.map((card, index) =>
          <Card key={index} className='h-full flex flex-col'>
              <CardHeader className="flex items-center gap-3">
                <span className="text-3xl">{card.icon}</span>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>

            <CardContent className="flex-grow">
              <p className='text-white-200 mb-4'>{card.description}</p>
            </CardContent>

            <CardFooter>
              {card.external ? (
                // External link button 
                <Button asChild variant='ghost' className="w-full hover:bg-amber-200 hover:!bg-amber-200 hover:text-black transition-colors">
                  <a
                    href={card.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.buttonText} ↗
                  </a>
                </Button>
              ) : card.download ? (
                // Download button 
                <Button asChild variant='ghost' className="w-full hover:bg-amber-200 hover:!bg-amber-200 hover:text-black transition-colors">
                  <Link href={card.buttonLink}>
                    {card.buttonText} →
                  </Link>
                </Button>
              ) : (
                <Button asChild variant='ghost' className="w-full hover:bg-amber-200 hover:!bg-amber-200 hover:text-black transition-colors">
                  <Link href={card.buttonLink}>
                    {card.buttonText} →
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>)}
        </div>
      </div>
    </div>
  )
}
