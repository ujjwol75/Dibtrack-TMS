import React from 'react'
import {Link} from "react-router-dom";

const NotFound: React.FC<any> = (props) => {
  return (
    <div className=" pt-16  flex flex-col">
      <main
        className="flex-grow flex flex-col  max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img className="h-12 w-auto"
                 src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                 alt=""/>
          </a>
        </div>
        <div className="">
          <div className="text-center">
            <p
              className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404
              error</p>
            <h1
              className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page
              not found.</h1>
            <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t
              find
              the page you’re looking for.</p>
            <div className="mt-6">
              <Link to="#"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500">Go
                back home<span aria-hidden="true"> &rarr;</span></Link>
            </div>
          </div>
        </div>
      </main>
      <div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <nav className="flex justify-center space-x-4">
          <Link to="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600">Contact
            Support</Link>
          <span className="inline-block border-l border-gray-300"
                aria-hidden="true"/>
          <Link to="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600">Status</Link>
          <span className="inline-block border-l border-gray-300"
                aria-hidden="true"/>
          <Link to="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</Link>
        </nav>
      </div>
    </div>
  )
}

export default NotFound
