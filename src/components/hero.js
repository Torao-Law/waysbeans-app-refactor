import React from 'react'
import Hero from '../assets/herobanner.png'
import Icon from '../assets/Icon.png'
import Line from '../assets/line.png'

export default function hero() {
  return (
    <div>
        <div className="container ml-14">
            <div className="w-10/12 bg-green-600 static p-24 flex items-center">
                <div>
                    <div className="max-w-md">
                        <img className="w-full" src={Icon} alt="logo"/>
                    </div>
                    <h1 className="text-2xl font-medium text-lime-950 pt-4">BEST QUALITY COFFEE BEANS</h1>
                    <p className="text-lime-950 pt-2 tracking-wide text-lg">Quality freshly roasted coffee made just for you. <br /> Pour, brew and enjoy</p>
                </div>
                
                <div>  
                    <div className="absolute w-96 h-28 start-2/4 top-96 mt-8">
                        <img className="w-full h-full" src={Line} alt="line"/>
                    </div>
                    <div className="absolute w-2/5 h-2/5 right-16 pr-20 top-36 mt-10">
                        <img className="w-full h-full object-none" src={Hero} alt="hero"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
