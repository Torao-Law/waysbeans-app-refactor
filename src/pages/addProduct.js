import React, { useState } from 'react'
import Headers from '../components/headers'
import Footer from "../components/footer"
import Button from "../elements/button"
import AddImg from "../assets/add_product.png"

export default function AddProduct() {
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    productName: '',
    price: '',
    qty: '',
    image: '',
    description: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  return (
    <div>
      <div>
        <Headers />
      </div>

      <div className="container-lg mx-28 my-16 ">   
        <form className="grid grid-cols-2 h-full content-center">
          <div className="grid content-center justify-items-center">
            {preview ? (
              <img src={preview} alt="image add" className="object-cover w-96" />
            ) : (
                <div>
                  <input type="file" id="upload" name="image" hidden onChange={handleChange} />
                  <label htmlFor="upload" className="label-file-add-product">
                    <img src={AddImg} alt="image add" />
                  </label>
                </div>  
            )}
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-isPrimary text-lg font-bold mb-1" for="productname">Product Name</label>
              <input className="shadow appearance-none border border-isPrimary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="productname" type="text"/>
            </div>
            <div className="mb-4">
              <label className="block text-isPrimary text-lg font-bold mb-1" for="price">Price</label>
              <input className="shadow appearance-none border border-isPrimary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" />
            </div>

            <div className="mb-4">
              <label className="block text-isPrimary text-lg font-bold mb-1" for="quantity">Quatity</label>
              <input className="shadow appearance-none border border-isPrimary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text"/>
            </div>

            <div className="mb-4">
              <label className="block text-isPrimary text-lg font-bold mb-1" for="description">Description</label>
              <textarea className="resize-none rounded-md shadow appearance-none border border-isPrimary rounded w-full py-2 px-3 text-gray-700 h-40 leading-tight focus:outline-none focus:shadow-outline" id="description"></textarea>
            </div>
            
            <div className="mt-8">
              <Button isPrimary className="w-full py-2 font-bold">ADD PRODUCT</Button>
            </div>
          </div>
        </form>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  )
}
