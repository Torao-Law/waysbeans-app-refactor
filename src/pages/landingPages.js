import React from 'react'
import Header from "../components/headers"
import Hero from "../components/hero"
import Product from "../components/productCard"
import Footer from "../components/footer"
import DataProduct from '../json/product.json'

export default function landingPages() {
  return (
    <>
        <div>
            <Header />
        </div>

        <div className="container mx-auto mt-16 px-10">
            <Hero />
        </div>

        <div className="container mx-auto my-20 px-16">
            <h1 className="text-center mb-2 font-semibold text-4xl text-lime-950">HOT PROMO !!!</h1>
            <hr className="w-48 h-1 mx-auto mb-1 bg-gray-100 border-0 rounded md:my-10 bg-green-600"></hr>
            <div className="flex">
                <Product data={DataProduct.listProduct}/>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </>
  )
}
