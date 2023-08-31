import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Contact',
 description: 'SEO Pagina de contacto',
};

export default function ContactPage(){
    return (
        <>
            <span className="text-4xl">Contact Page</span>
        </>
    )
}