import React from 'react'
import formatNumber from "../utils/formatNumber"

export default function cardProduct(props) {
  console.log(props)
  return props.data.map((data) => {
    return (
      <div className="w-60 h-96 container mx-auto mt-2" key={data.id_}>
          <div className="h-full">
              <div className="w-60 h-60">
                  <img className="object-cover h-full w-full rounded-t-lg" src={data.image} alt="product" />
              </div>
              <div className="bg-red-200 rounded-b-lg p-4">
                  <p className="text-xl font-semibold m-0 text-lime-950">{data.name}</p>
                  <p className="text-lime-800">{formatNumber(data.price)}</p>
                  <p className="text-lime-800">STOK : {data.stok} pcs</p>
              </div>
          </div>
      </div>
    )
  })
}
