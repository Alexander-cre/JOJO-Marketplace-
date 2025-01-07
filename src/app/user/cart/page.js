"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Link from "next/link";
import { useCart } from "@/app/user/cart/context/CartContext";

const Cart = () => {
    const { cart } = useCart();

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row justify-between border border-2 cart-con ">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-gray-500">{item.price}</p>
                                            <p className={`text-sm ${item.status === 'In stock' ? 'text-green-500' : 'text-red-500'}`}>{item.status}</p>
                                            <div className="flex items-center mt-2">
                                                <span className="text-gray-500 text-sm mr-2">{item.selectedSize || 'Size: Not selected'}</span>
                                                <span className="text-gray-500 text-sm mr-2">{item.selectedColor || 'Color: Not selected'}</span>
                                                <div className="flex items-center border rounded-lg">
                                                    <button className="px-2 py-1">-</button>
                                                    <span className="px-2 py-1">1</span>
                                                    <button className="px-2 py-1">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-0 items-center">
                                        <p className="text-lg font-semibold mr-4">{item.price}</p>
                                        <button className="text-gray-500">
                                            <i className="fas fa-trash"></i>
                                            <img src="https://www.svgrepo.com/show/488148/delete.svg" alt="Delete" width={20} height={20} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="w-full lg:w-1/3 mt-4 lg:mt-0 lg:ml-4">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
                            <div className="flex justify-between mb-4">
                                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white">Free</button>
                                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-black hover:text-white">Express: $9.99</button>
                            </div>
                            <p className="text-gray-500 mb-4">Delivery date: June 24, 2022</p>
                            <div className="mb-4">
                                <input type="text" placeholder="Promocode" className="w-full p-2 border rounded-lg mb-2" />
                                <button className="w-full px-4 py-2 bg-gray-200 rounded-lg">Apply</button>
                            </div>
                            <p className="text-gray-500 mb-4">20% off discount</p>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-500">Subtotal</p>
                                <p>${cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-500"> Discount</p>
                                <p>($16.19)</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-500">Delivery</p>
                                <p>$0.00</p>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-500">Tax</p>
                                <p>$14.00</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p className="text-lg font-semibold">Total</p>
                                <p className="text-lg font-semibold">${(78.76).toFixed(2)}</p>
                            </div>
                            <Link href={'cart/orderdetails/'}>
                                <button className="w-full px-4 py-2 bg-black text-white rounded-lg mb-4">Proceed to checkout</button>
                            </Link>
                            <Link href={'/'}>
                                <button className="w-full px-4 py-2 bg-gray-200 rounded-lg">Continue shopping</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;