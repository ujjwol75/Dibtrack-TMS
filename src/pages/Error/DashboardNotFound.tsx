import React from 'react'
import {Link} from "react-router-dom";

const DashboardNotFound: React.FC<any> = (props) => {
  return (
      <div className=" flex flex-col">
        <main
          className="flex-grow flex flex-col  fy-centerjusti  max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center pt-16">
            <Link to="/" className="inline-flex">
              <span className="sr-only">Workflow</span>
              <img className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt="" />
            </Link>
          </div>
          <div className="pt-5 pb-3">
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
        <footer
          className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-3 mt-24">
          <nav className="flex justify-center space-x-4">
            <Link to="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600">Contact
              Support</Link>
            <span className="inline-block border-l border-gray-300"
              aria-hidden="true" />
            <Link to="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600">Status</Link>
            <span className="inline-block border-l border-gray-300"
              aria-hidden="true" />
            <Link to="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</Link>
          </nav>
        </footer>
      </div>
  )
}

export default DashboardNotFound
