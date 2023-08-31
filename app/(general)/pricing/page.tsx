import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Pricing',
 description: 'SEO Pagina del precio',
};

export default function PricingPage(){
    return (
        <>
            <span className="text-4xl">Pricing Page</span>
        </>
    )
}