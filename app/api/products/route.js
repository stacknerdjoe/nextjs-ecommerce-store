import Stripe from "stripe";
import '../../../envConfig'

const API_KEY = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(API_KEY)

export async function GET() {
    try{
        // fetch all the active products from stripe
        const products = await stripe.products.list({ active: true })

        // fetch all prices that are active
        const prices = await stripe.prices.list({ active: true })

        // combine products and their corresponding prices
        const combinedData = products.data.map((product) => {
            const productPrices = prices.data.filter((price) => {
                return price.product === product.id
            })


            return {
                ...product,
                prices: productPrices.map((price) => {
                    return {
                        id: price.id,
                        unit_amount: price.unit_amount,
                        currency: price.currency,
                        recurring: price.recurring
                    }
                })
            }
        })


        // send the combined data as json
        return Response.json(combinedData)


    }   catch (err) {
            console.error('Error fetching data from stripe:', err.message)
            return Response.json({ error: 'Failed to fetch error from stripe' })
    }
}  