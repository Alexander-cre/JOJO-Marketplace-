import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ProductSideBar from "@/components/productsidebar";
import ProfileSideBar from "@/components/profilesidebar";
import Link from "next/link";
import './catalog.css' ;

const Catalog = () => {
    return (
        <body className="bg-gray-100 block ">

            <NavBar />

            <header className="bg-teal-600 text-white text-center py-4">

                <h1 className="text-3xl font-bold">
                    Jojo Store Best Sellers
                </h1>
                <p className="text-sm">
                    Our most popular products based on sales. Updated hourly.
                </p>
            </header>

            <div className="container mx-auto mt-6 px-4">
                
                <div className="flex flex-col md:flex-row">




                    <ProductSideBar />
                    <main className="w-full md:w-3/4 md:ml-6 mt-6 md:mt-0">
                        <h2 className="text-xl font-bold mb-4">
                            Best Sellers in Home Décor Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href={'catalog/product-details'}>
                                <div className="bg-white p-4 shadow-md">
                                    <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                        #1
                                    </span>
                                    <img alt="Utopia Bedding Throw Pillows Insert (Pack of 2, White) - 18 x 18 Inches Bed and Couch Pillows - Indoor Decorative Pillows" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/NchGITMRO1ZBDFs0yJeeXEDCByKgeoJHkwSeqKESkpqryfbfE.jpg" width="200" />
                                    <p className="mt-2 text-sm">
                                        Utopia Bedding Throw Pillows Insert (Pack of 2, White) - 18 x 18 Inches Bed and Couch Pillows - Indoor Decorative Pillows
                                    </p>
                                    <p className="mt-2 text-orange-500 font-bold">
                                        $19.99
                                    </p>
                                </div>
                            </Link>
                            <Link href={'catalog/product-details'}>
                                <div className="bg-white p-4 shadow-md">
                                    <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                        #2
                                    </span>
                                    <img alt="Yankee Candle Balsam &amp; Cedar Scented, classNameic 22oz Large Jar Single Wick Candle, Over 110 Hours Burn Time" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/ntXf5yWnR2VHTK7EC8zHzUnwJkSeXiZjjMJK75QQDqzt8f2nA.jpg" width="200" />
                                    <p className="mt-2 text-sm">
                                        Yankee Candle Balsam &amp; Cedar Scented, classNameic 22oz Large Jar Single Wick Candle, Over 110 Hours Burn Time
                                    </p>
                                    <p className="mt-2 text-orange-500 font-bold">
                                        $17.99
                                    </p>
                                </div>
                            </Link>
                            <div className="bg-white p-4 shadow-md">
                                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                    #3
                                </span>
                                <img alt="Funko Pop! Advent Calendar: Marvel - Holiday, Multicolor, One Size" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/B6prU3pUte2GIiDtbRyRWckd4INWeTKSKAp7X9BczE8l8f2nA.jpg" width="200" />
                                <p className="mt-2 text-sm">
                                    Funko Pop! Advent Calendar: Marvel - Holiday, Multicolor, One Size
                                </p>
                                <p className="mt-2 text-orange-500 font-bold">
                                    $29.99
                                </p>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                    #4
                                </span>
                                <img alt="Utopia Bedding Throw Pillow Inserts (Set of 4, White) - 18 x 18 Inches Pillow Inserts for Sofa, Bed and Couch Decorative Stuffer Pillows" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/4UdYT75mi0pfK6ocstBiQI4aajzeUCaS0SgUu2RN3hIo8f2nA.jpg" width="200" />
                                <p className="mt-2 text-sm">
                                    Utopia Bedding Throw Pillow Inserts (Set of 4, White) - 18 x 18 Inches Pillow Inserts for Sofa, Bed and Couch Decorative Stuffer Pillows
                                </p>
                                <p className="mt-2 text-orange-500 font-bold">
                                    $24.99
                                </p>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                    #5
                                </span>
                                <img alt="Dinosaur Toys for 3-8 Year Old Boys, Create A Dinosaur World Road Race, Flexible Track Playset with 2 pcs Dinosaur Toy Cars for 3 4 5 6 Year Old Boys Girls Best Gift" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/Gpfc3sa2cR0MfEzw00lhQlAdXZtUl6pny3eGkwkgDzCM5ftPB.jpg" width="200" />
                                <p className="mt-2 text-sm">
                                    Dinosaur Toys for 3-8 Year Old Boys, Create A Dinosaur World Road Race, Flexible Track Playset with 2 pcs Dinosaur Toy Cars for 3 4 5 6 Year Old Boys Girls Best Gift
                                </p>
                                <p className="mt-2 text-orange-500 font-bold">
                                    $29.99
                                </p>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                    #6
                                </span>
                                <img alt="Funko Pop! Advent Calendar: Harry Potter - Holiday, Multicolor, One Size" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/xXZ0Dyf46fgtt0w2Sq5DA3CFHXI2s8IF9qChL60GxOlu8f2nA.jpg" width="200" />
                                <p className="mt-2 text-sm">
                                    Funko Pop! Advent Calendar: Harry Potter - Holiday, Multicolor, One Size
                                </p>
                                <p className="mt-2 text-orange-500 font-bold">
                                    $39.99
                                </p>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                    #7
                                </span>
                                <img alt="GeoSwim Flameless Ivory Taper Candles with Remote, 10-Inch Dripless, Battery Operated LED Warm 3D Wick Light Window Candles for Christmas, Wedding, Party, Home Decoration, Set of 6" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/u1frCc180nwOJKabZneobywdNHNjQWuxo8LZ7AzC3mar8f2nA.jpg" width="200" />
                                <p className="mt-2 text-sm">
                                    GeoSwim Flameless Ivory Taper Candles with Remote, 10-Inch Dripless, Battery Operated LED Warm 3D Wick Light Window Candles for Christmas, Wedding, Party, Home Decoration, Set of 6
                                </p>
                                <p className="mt-2 text-orange-500 font-bold">
                                    $19.99
                                </p>
                            </div>
                            <div className="bg-white p-4 shadow-md">
                                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                                    #8
                                </span>
                                <img alt="BYMORE 6000 Clear Water Gel Jelly Beads Vase Filler for Floating Pearls, Floating Candle Making, Wedding Centerpieces, Home Decoration, 1 Pack" className="w-full h-48 object-cover mt-2" height="200" src="https://storage.googleapis.com/a1aa/image/dPEaG2lo2baMMVlEnO2FcfqY2cgxVjI6s2DwleHPdemT5ftPB.jpg" width="200" />
                                <p className="mt-2 text-sm">
                                    BYMORE 6000 Clear Water Gel Jelly Beads Vase Filler for Floating Pearls, Floating Candle Making, Wedding Centerpieces, Home Decoration, 1 Pack
                                </p>
                                <p className="mt-2 text-orange-500 font-bold">
                                    $9.99
                                </p>
                            </div>
                        </div>
                    </main>
                </div><br /><br /><br /><br />
            </div><br /><br />

            <Footer />

        </body>

    )
}

export default Catalog;