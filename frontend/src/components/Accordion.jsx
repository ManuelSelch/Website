import React from "react"

export default function Accordion({children}) {
  return (
    <section className="w-full bg-white divide-y rounded shadow-md divide-slate-200 shadow-slate-200">
      {children}
    </section>
  )
}

export function AccordionItem({name, description, icon, open}) {
  return (
    <details className="p-4 group" open={open}>
      <summary className="relative flex items-center cursor-pointer list-none gap-4 pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
        <i className={`fa-solid ${icon}`}></i>
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-ac06 desc-ac06"
        >
          <title id="title-ac06">Open icon</title>
          <desc id="desc-ac06">
            icon that represents the state of the summary
          </desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </summary>
      <p className="mt-4 text-slate-500">{description}</p>
    </details>
  );
}