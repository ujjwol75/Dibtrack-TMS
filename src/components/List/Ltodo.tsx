import { CalendarIcon, CheckIcon, FlagIcon, IdentificationIcon } from '@heroicons/react/solid'


type Props = {
    item: string
}

const Ltodo = (props: Props) => {
    const { item } = props
    return (
        <>
            <div className='flex w-[93.333333%] mx-auto h-8 justify-between p-3 shadow-sm mt-1 bg-white  items-center '>
                <div className='flex space-x-2'>
                    <CheckIcon className='w-6 h-6 text-sm text-gray-400 font-light ' />
                    <p className='text-sm text-gray-400 font-light mx-2'>{item}</p>
                </div>

                <div className='flex  w-[16rem] space-x-12  '>
                    <IdentificationIcon className='h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' />
                    <CalendarIcon className='h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' />
                    <FlagIcon className='h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' />
                </div>
            </div>
        </>
    )
}

export default Ltodo