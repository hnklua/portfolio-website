"use client"; 

import * as React from "react"
import * as z from "zod"
import { useForm as useFormspree, ValidationError } from '@formspree/react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'react-hot-toast'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address")
        .max(100, "Email must be less that 100 characters")
        .transform(email => email.trim().toLowerCase()),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters")
        .refine(
            (text) => {
                const words = text.trim().split(/\s+/).filter(word => word.length > 0); 
                return words.length >= 3; 
            },
            { message: "Please provide more details (at least 3 words" }
        )
        .refine(
            (text) => {
                const urlPattern = /(https?:\/\/[^\s]+)/g;
                const urls = text.match(urlPattern); 
                return !urls || urls.length <= 2; 
            },
            { message: "Too many links detected" }
        ),
        
    name: z
        .string()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name must be less than 50 characters")
        .optional()
        .or(z.literal("")),

    subject: z
        .string()
        .min(3, "Subject must be at least 3 characters long")
        .max(50, "Subject must be less than 50 characters")
        .optional()
        .or(z.literal("")),

});

export default function Contactpage() {
    // Formspree hook
    const [formspreeState, handleFormSpreeSubmit] = useFormspree("xlgwbqqp");

    const form = useForm({
        resolver: zodResolver(formSchema), 
        defaultValues: {
            email: "",
            message: "", 
            name: "",
            subject: ""  
        },
    });

    async function onSubmit(data) {
        try {
            await handleFormSpreeSubmit(data);

            toast("Message sent successfully!", {
                description: "Thanks for reaching out! I will get back to you ASAP!",
                postion: "bottom-right",
            });

            form.reset(); 
        } catch (error) {
            toast("Something went wrong!", {
                description: "Please try again later or email me directly using the link on the bottom of the website.",
                position: "bottom-right",
            });
        }
    };

    if (formspreeState.succeeded) {
        return <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">Thank you!</CardTitle>
                    <CardDescription className="text-center">
                        Your message has been sent. I'll get back to you ASAP!
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Contact Me!</CardTitle>
                    <CardDescription>
                        Send me a message! (Professional inquiries only)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        {/* Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                {...form.register("name")}
                                placeholder="Your name"
                            />
                            {form.formState.errors.name && (
                                <p className="text-sm text-red-600">
                                    {form.formState.errors.name.message}
                                </p>
                            )}
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={formspreeState.errors}
                                className="text-sm text-red-600"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email"
                                {...form.register("email")}
                                placeholder="your.email@email.com"
                            />
                            {form.formState.errors.email && (
                                <p className="text-sm text-red-600">
                                    {form.formState.errors.email.message}
                                </p>
                            )}
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={formspreeState.errors}
                                className="text-sm text-red-600"
                            />
                        </div>

                        {/* Subject Field */}
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject (Optional)</Label>
                            <Input
                                id="subject"
                                {...form.register("subject")}
                                placeholder="Topic of email"
                            />
                            {form.formState.errors.subject && (
                                <p className="text-sm text-red-600">
                                    {form.formState.errors.subject.message}
                                </p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                rows={5}
                                {...form.register("message")}
                                placeholder="Your Message..."
                            />
                            {form.formState.errors.message && (
                                <p className="text-sm text-red-600">
                                    {form.formState.errors.message.message}
                                </p>
                            )}
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={formspreeState.errors}
                                className="text-sm text-red-600"
                            />
                        </div>

                        {/* Submit */}
                        <Button type="submit" className="w-full" disabled={formspreeState.submitting || form.formState.isSubmitting}>
                            {formspreeState.submitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )

}