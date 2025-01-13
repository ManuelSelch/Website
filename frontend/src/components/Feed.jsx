import React from "react"

export default function Feed({children}) {
  return (
    <>
      {/*<!-- Component: Activity feed --> */}
      <ul
        aria-label="Activity feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
      >
        {children}
      </ul>
      {/*<!-- End Activity feed --> */}
    </>
  )
}

export function FeedItem({name, description, year, icon}) {
  return (
    <li role="article" className="relative pl-8 ">
      <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
        <i className={`text-xl fa-solid ${icon}`}></i>
      </span>
      <div className="flex flex-col flex-1 gap-0">
        <h4 className="text-base font-medium text-slate-700">
          {name}
        </h4>
        <p className="text-sm text-slate-500">{year}</p>
      </div>
    </li>
  )
}