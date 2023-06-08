import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Headers from '../components/headers'
import Button from '../elements/button'
import Product from '../json/product.json'
import formatNumber from "../utils/formatNumber"
import discount from "../utils/discount"
import Footer from "../components/footer"

export default function DetailProduct() {
  const { id } = useParams()
  const [state, setState] = useState(1)
  const [product, setProduct] = useState({})
  const [subAmount, setSubAmount] = useState(product.price)

  const decrement = () => {
    // eslint-disable-next-line
    if(state == 1) {
      return setState(state)
    }
    setState(state - 1)
  }

  const increment = () => {
    // eslint-disable-next-line
    if(state == product.stok) {
      return setState(state)
    }
    setState(state + 1)
  }

  // eslint-disable-next-line
  const dataProduct = () => Product.listProduct.map((data) => {
      // eslint-disable-next-line
      if (id == data.id_) {
        return setProduct(data)
      }
    })  

  useEffect(() => {
    dataProduct()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setSubAmount(formatNumber(discount(product.price) * state))
  }, [product])
  useEffect(() => {
    setSubAmount(formatNumber(discount(product.price) * state))
  }, [state])
  // console

  return (
    <div>
      <div>
        <Headers />
      </div>

      <div className="container-lg mx-28 mt-16 grid">
        <div className="grid grid-flow-col content-center" key={product.id_}>
          <div style={{width: "350px", height: "569px"}}>
            <img className="w-fit h-fit" src={product.image} alt="product" />
          </div>

          <div className="ml-14 h-4/5 grid content-between">
            <div>
              <p className="font-bold text-isPrimary text-5xl">{product.name}</p>
              <p className="break-words text-justify mt-6">{product.description}</p>
            </div>

            <div className={"text-xl"}>
              <p className={"font-bold"}>Stock : {product.stok}</p>
              <p className="text-isPrimary">
                <span className="line-through">{formatNumber(product.price)}</span>
                <span className="text-red-800 font-bold ml-2">{formatNumber(discount(product.price))}</span>
              </p>
            </div>

            <div> 
              <span className={"font-bold"}>Sub Amount : </span>
              <span >{subAmount}</span>
            </div>
            
            <div className={"drop-shadow grid grid-cols-10 text-center"}>
              <div onClick={decrement} className={"bg-red-800  px-6 py-2 rounded-l-lg font-bold text-white cursor-pointer"}> - </div>
              <div className={"bg-gray-200 px-6 py-2 font-bold"}> {state} </div>
              <div onClick={increment} className={"bg-isPrimary px-6 py-2 rounded-r-lg text-white font-bold cursor-pointer"}> + </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button isSecondary onClick className={'py-3'}>Add Cart</Button>
              <Button isPrimary onClick className={'py-3'}>BUY</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
