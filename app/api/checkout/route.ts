import Stripe from "stripe"
import '../../../envConfig'

export async function POST(request: Request) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!)
  try {
    const { lineItems } = await request.json()
    console.log(lineItems)
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: process.env.NEXT_PUBLIC_BASE_URL + '/success',
      cancel_url: process.env.NEXT_PUBLIC_BASE_URL + '/'
    })
    return Response.json(session)
  } catch (err) {
    console.error('Error creating cart checkout', err instanceof Error ? err.message : err)
    return Response.json({ error: 'Failed to create stripe checkout page' })
  }
}
