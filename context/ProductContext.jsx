'use client'

import { createContext, useContext, useState } from "react"

const productContext = createContext()

export default function ProductsProvider (props) {
    const { children } = props

    const [cart, setCart] = useState([])

    function handleIncrementProduct (price_id, num, data, noIncrement = false) {
        const newCart = {
            ...cart
        }
        if ( price_id in cart ) {
            // turns out the product is already in the cart so take the previous value and increment/decrement it
          //  newCart[price_id] = newCart[price_id] + num
            newCart[price_id] = {
                ...data,
                quantity:noIncrement ? num: newCart[price_id]?.quantity + num
            }

          // product not yet in cart, so add it   
        } else {
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }
        
        // chk if newCart[price_id] is equal to 0, then we delete it
        if (parseInt(newCart[price_id].quantity) <= 0) {
       // the user has set the number to 0, so we need to remove the product from the cart
            delete newCart[price_id]
        }
        // overwrite the cart state with the newCart object
        setCart(newCart)

    }

   
    const value = {
        cart,
        handleIncrementProduct,
       
    }
    
    return(
       <productContext.Provider value={value}>
        {children}
       </productContext.Provider> 
    )
}

export const useProducts = () => useContext(productContext)