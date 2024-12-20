import React from "react";
import Link  from "next/link";


const NavBar = () => {
    return (
        <div>
            <header className="bg-black text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex items-center mb-8">
                        <div className="bg-white text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                            <span className="font-bold text-3xl text-black">J</span>
                        </div>
                    </div>
                    <div className="text-sm">
                        <span>Deliver to</span>
                        <div className="font-bold">Nigeria</div>
                    </div>
                </div>
                <div className="flex-grow mx-4">
                    <input type="text" placeholder="Search Jojo" className="w-full p-2 rounded" />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-sm">
                        <Link href={'/user/signin'}>
                            <span>Hello, sign in</span>
                        </Link>
                        <Link
                            href={'/user/'}>
                            <div className="font-bold">Account & Lists</div>
                        </Link>
                    </div>
                    <Link href={'/user/'}>
                        <div className="text-sm">
                            <span>Returns</span>
                            <div className="font-bold">& Orders</div>
                        </div>
                    </Link>
                    <div>
                        <i className="fas fa-shopping-cart text-2xl"></i>
                    </div>
                </div>
            </header>
            <nav className="bg-black text-white p-2 flex space-x-4 pointers">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-bars"></i>
                    <span><Link href={'/catalog/'}>All</Link></span>
                </div>
                <span><Link href={'/catalog/'}>Today's Deals</Link></span>
                <span><Link href={'/catalog/'}>Flash Deals</Link></span>
                <span><Link href={'/catalog/'}>Special Deals</Link></span>
                <span><Link href={'/contactus/'}>Sell</Link></span>
            </nav>
        </div>
    )
}

export default NavBar ;