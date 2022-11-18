import Image from 'next/image'

function Nav() {
    return (
      <header className='w-full h-20 bg-gradient-to-r from-indigo-500'>
        <div className='flex'>
          <div className='ml-10 mt-5'>
            <Image
              src="/vercel.svg"
              width={100}
              height={40}
            />
          </div>
          <div className='ml-12 mt-5'>
            <div className='flex-1 flex items-center'>
                <input type="text" className='block border-1 border-grey shadow-xl rounded-md w-96 h-10 mb-5 p-3 place-items-center' placeholder='Search Events, Shows'/>
            </div>
          </div>

          <div className='flex-1 flex ml-56 mt-1'>
            <div className='flex space-x-8 text-xl decoration-8 cursor-pointer ml-76 mt-5'>
              <p>
                Explore
              </p>
              <p>
                Trending
              </p>
              <p>
                Events
              </p>
              <p>
                Connect
              </p>
            </div>
          </div>
        </div> 

    </header>

    )
}

export default Nav;