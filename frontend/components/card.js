import Image from 'next/image'

function Card ()
{
    return (
        <div className="mt-8 ml-9 flex">
            <div className="flex flex-col box-border flex h-80 w-60 p-2 shadow-xl border-black rounded-3xl bg-white">                   
                <Image 
                    className="object-fill border rounded-3xl hover:object-cover" 
                    src={"/lufy.jpg"} 
                    height="220" 
                    width="230"
                    alt="event image"/>
                <div className='mt-3 flex'>
                    <p>BookMyShow Event</p>
                    <div className='border h-auto w-auto border-black ml-10 p-0 rounded-md'>
                        <p className='p-0.5'>#134</p>
                    </div>
                </div>
                <div>
                    <p>0.88 ETH</p>
                </div>
                <div className='items-end'>
                    <button className='w-full bg-blue-500 p-1 border rounded-3xl object-fill'>
                        <p className='font-bold text-white'>Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    )     
}

export default Card;