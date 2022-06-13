import React from 'react'
import Sidebar from '../components/dashboard/Sidebar';
import HomeDib from '../components/HomeDib/HomeDib';

type Props = {}

const HomeLayout = (props: Props) => {
    return (
        <>
          <div className="grid grid-cols-5">
            <Sidebar />
         <div className="col-span-4">
              
             
            <HomeDib/>
            </div> 
          </div>
        </>
      );
}

export default HomeLayout