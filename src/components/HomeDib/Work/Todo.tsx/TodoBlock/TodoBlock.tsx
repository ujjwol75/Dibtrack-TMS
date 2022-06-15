import React from 'react'
import GroupBy from '../../GroupBy'
import RemainderPopOver from '../../PopOver/RemainderPopOver'

type Props = {}

const TodoBlock = (props: Props) => {
    return (
        <>
            <div className='flex justify-between w-full '>


                <div >
                    {/* <span className='ml-4 text-sm text-gray-400' >+Task</span> <span className='ml-2 text-sm text-gray-400' onClick={()=>{setRemainder(remainder!)}}> +Remainder</span> */}
                    <span className='ml-4 text-sm text-gray-400' >+Task</span> <span><RemainderPopOver rtext={'+ Remainder'} /></span>
                </div>
                <div >

                    <span className=' text-sm text-gray-400'><GroupBy /></span>
                </div>
            </div>
        </>
    )
}

export default TodoBlock