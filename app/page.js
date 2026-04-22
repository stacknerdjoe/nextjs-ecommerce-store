import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

async function getProducts() {
    const products = await stripe.products.list({ active: true })
    const prices = await stripe.prices.list({ active: true })

    return products.data.map((product) => ({
        ...product,
        prices: prices.data
            .filter((price) => price.product === product.id)
            .map((price) => ({
                id: price.id,
                unit_amount: price.unit_amount,
                currency: price.currency,
                recurring: price.recurring
            }))
    }))
}

export default async function Home() {
    const products = await getProducts()

    let planner = null
    let stickers = []

    for (let product of products) {
        if (product.name === 'Quest & Campaigns Planner') {
            planner = product
            continue
        }
        stickers.push(product)
    }

    return (
        <>
            <ImageBanner/>
            <section>
                <Products planner={planner} stickers={stickers} />
            </section>
        </>
    );
}