import Image from 'next/image'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

function NftDetails (){
    return (
        
        <div className="mt-10 ml-10 flex">
            <div className="flex-col">
                <div className='flex border border-grey  rounded-t-lg h-10 w-96+10 drop-shadow-md justify-end'>
                    <p className='mt-2 mr-2'>count</p>
                    <FavoriteBorderOutlinedIcon className='mr-4 mt-2'/>            
                </div>
                <Image className='rounded-b-lg' src={"/lufy.jpg"} height="400" width="450"/>
            </div>
            <div className='flex-col'> 
                <div className='ml-5 mt-2'> 
                    <a href="" className='text-blue-500'>T20</a>
                </div>
                <div className='mt-4 ml-5'>
                    <p className='text-2xl'>IND vs ENG</p>
                </div>  
                <div className='ml-5'>
                    <div className='font-bold'>Owned By <a href="" className='text-blue-500'>XYZ</a></div>
                </div> 
                <div className='flex'>
                    <div className='border h-auto w-auto border-black ml-5 mt-4 p-0 rounded-md'>
                        <p className='p-0.5'>#135</p>                    
                    </div>

                    <div className='hover:text-red-500 flex'>
                        <FavoriteBorderOutlinedIcon fontSize="large" className='ml-5 mt-3'/>
                        <p className='ml-2 mt-4 font-bold'>count</p>
                    </div>
                    
                </div> 
                

                <div className="flex-col ml-5 mt-5">
                    <div className='flex border border-grey rounded-t-lg h-14 w-[96+30] drop-shadow-md justify-end'>
                        <p className='ml-5 mt-4 mr-40'>Sales ends December 14, 2022 at 10:57 AM GMT+5:30</p>
                    </div>
                    <div className='border rounded-b-lg border-grey drop-shadow-md'>
                        <div className='mt-2 ml-5'>
                            Current price
                        </div>
                        <div className='mt-2 ml-5'>
                            <p className='text-2xl font-bold'>0.029 ETH
$36.52</p>
                        </div>
                        <div className='mt-3 ml-5 mb-5 flex'>
                            <button className='bg-blue-500 w-52 h-12 rounded-md'>
                                <p className='text-white font-bold'>Add to cart</p>
                            </button>
                            <button className='flex ml-10 w-52 h-12 rounded-md border border-grey drop-shadow-sm hover:drop-shadow-xl justify-center'>
                                <LocalOfferOutlinedIcon color="action" className='mt-3 mr-2'/>
                                <p className='text-blue-500 font-bold mt-3'>Make offer</p>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NftDetails;