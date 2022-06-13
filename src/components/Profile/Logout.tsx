import React from 'react'
sessionStorage.setItem("lastname", "dahal");
type Props = {}

const Logout = (props: Props) => {
    const handleLogOut = () => {
          sessionStorage.clear()
    }
  return (
    <div>
        <div className="mt-3 flex flex-row mt-3 cursor-pointer" onClick={handleLogOut}>
                        Logout
        </div>
    </div>
  )
}

export default Logout