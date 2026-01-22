import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";



export function CartItemDetails({ cartItem, loadCart }) {

    const [isQuantityUpdate, setIsQuantityUpdate] = useState(false)

    const [quantity, setQuantity] = useState(cartItem.quantity)

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.product.id}`)
        await loadCart();
    }

    const updateQuantity = async () => {
        if (isQuantityUpdate) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity)
            })
            await loadCart()
            setIsQuantityUpdate(false)
        }
        else {
            setIsQuantityUpdate(true)
        }
    }

    


    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>

                        Quantity: {isQuantityUpdate ?
                            <input className="quantity-label-update" type="text" value={quantity}
                                onChange={(event) => {
                                    setQuantity(event.target.value)
                                }} 
                                onKeyDown={(event)=>{
                                    if(event.key == 'Enter'){
                                        updateQuantity()
                                    }
                                    else if (event.key == 'Escape'){
                                        setQuantity(cartItem.quantity)
                                        setIsQuantityUpdate(false)
                                    }
                                }}/> :
                            <span className="quantity-label">{cartItem.quantity}</span>}
                    </span>
                    <span onClick={updateQuantity} className="update-quantity-link link-primary">
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}