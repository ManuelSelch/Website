import React from "react";
import * as motion from "motion/react-client"

export default function Card({name, description, img}) {
  return (
    <motion.div
      className="p-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { type: "spring", duration: 0.8 }
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <CardImageOverlay name={name} description={description} img={img}/>
    </motion.div>
  )
}

function CardHorizontal({name, description, img}) {
  return (
    <>
      {/*<!-- Component: Horizontal card--> */}
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src={img}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                {name}
              </h3>
              
            </div>
          </header>
          <p>
            {description}
          </p>
        </div>
      </div>
      {/*<!-- End Horizontal card--> */}
    </>
  )
}

function CardImageOverlay({name, description, img}) {
  return (
    <>
      {/*<!-- Component: Image overlay card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure className="relative">
          <img
            src={img}
            alt={name}
            className="object-cover aspect-auto w-full"
          />
         
          <figcaption className="bg-red h-full opacity-100 hover:opacity-100 absolute bottom-0 left-0 w-full p-6 text-white">
              <div className="w-full flex bg-black/50">
                <div className="self-end">
                  <h3 className="display-inline align-bottom text-lg font-medium ">{name}</h3>
                  <p className="text-sm opacity-75">{description}</p>
                </div>
              </div>
           
          </figcaption>
        </figure>
      </div>
      {/*<!-- End Image overlay card --> */}
    </>
  )
}
