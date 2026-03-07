import * as React from "react"
import { RxGithubLogo } from "react-icons/rx"
import { HiOutlineMail } from "react-icons/hi"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t mt-12 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="text-md text-gray-300">
                        © {currentYear} hnklua
                    </div>

                    <div className="flex itmes-center gap-4">
                        <a
                            href="https://github.com/hnklua"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-emerald-300 transition-colors"
                            aria-label="Github"
                            >
                                <RxGithubLogo className="h-6 w-6"/>
                        </a>

                        <a
                            href="mailto:chinedu.ohiri@proton.me"
                            className="text-gray-300 hover:text-emerald-300 transition-colors"
                            aria-label="Email"
                            >
                                <HiOutlineMail className="h-6 w-6"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }