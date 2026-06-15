'use client'

import { useProducts } from "@/context/ProductContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter()
  const { cart, handleIncrementProduct } = useProducts()

  const total = Object.keys(cart).reduce((acc, curr) => {
    const cartItem = cart[curr]
    const cost = cartItem.prices[0].unit_amount ?? 0
    return acc + cost * cartItem.quantity
  }, 0)

  async function createCheckout() {
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL
      const lineItems = Object.keys(cart).map((item) => ({
        price: item,
        quantity: cart[item].quantity
      }))

      const response = await fetch(baseURL + '/api/checkout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ lineItems })
      })
      const data = await response.json()
      if (response.ok) {
        console.log(data)
        router.push(data.url)
      }
    } catch (err) {
      console.log('Error creating checkout', err instanceof Error ? err.message : err)
    }
  }

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>
      {Object.keys(cart).length === 0 && (<p>You have no items in your cart!</p>)}
      <div className="cart-container">
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item]
          const itemQuantity = itemData?.quantity

          const imgName = itemData.name === 'Quest & Campaigns Planner'
            ? 'planner'
            : itemData.name.replaceAll(' Sticker.png', '').replaceAll(' ', '_')
          const imgUrl = 'low_res/' + imgName + '.jpeg'

          return (
            <div key={itemIndex} className="cart-item">
              <Image src={'/' + imgUrl} alt={imgName + '-img'}
                width={200} height={200} style={{ width: '100%', height: 'auto' }} />
              <div className="cart-item-info">
                <h3>{itemData.name}</h3>
                <p>
                  {itemData.description?.slice(0, 100)}
                  {(itemData.description?.length ?? 0) > 100 ? '...' : ''}
                </p>
                <h4>${(itemData.prices[0].unit_amount ?? 0) / 100}</h4>
                <div className="quantity-container">
                  <p><strong>Quantity</strong></p>
                  <input
                    type="number"
                    value={itemQuantity}
                    placeholder="2"
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value)
                      handleIncrementProduct(itemData.default_price, newValue, itemData, true)
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="checkout-container">
        <Link href={'/'}>
          <button>&larr; Continue shopping</button>
        </Link>
        <button onClick={createCheckout}>Checkout &rarr;</button>
      </div>
      {total > 0 && <p className="total">Total: ${total / 100}</p>}
    </section>
  );
}
