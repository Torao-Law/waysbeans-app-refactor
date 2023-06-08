import React from 'react'
import formatNumber from "../utils/formatNumber"
import discount from "../utils/discount"
import { Link } from 'react-router-dom'

export default function CardProduct(props) {
  return props.data.map((data) => {
    return (
      <div className="w-60 h-96 container mx-auto mt-2" key={data.id_}>
        <Link to={`/detail-product/${data.id_}`}>
          <div className="h-full">
              <div className="w-60 h-60">
                  <img className="object-cover h-full w-full rounded-t-lg" src={data.image} alt="product" />
              </div>
              <div className="bg-red-200 rounded-b-lg p-4">
                  <p className="text-xl font-semibold m-0 text-lime-950">{data.name}</p>
                  <p className=" text-lime-800">
                    <span className="line-through">{formatNumber(data.price)}</span>
                    <span className=" text-red-800 font-bold ml-2">{formatNumber(discount(data.price))}</span>
                    </p>
                  <p className="text-lime-800">STOK : {data.stok} pcs</p>
              </div>
          </div>
        </Link>
      </div>
    )
  })
}
