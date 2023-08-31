import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
    keywords: ['About Page', 'Sergio Adrian', 'Informacion:']
};

export default function AboutPage(){
    return (
        <span className="text-4xl">About Page</span>
    )
}

