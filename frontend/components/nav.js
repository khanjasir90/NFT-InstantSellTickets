import Image from 'next/image'
import Router from 'next/router'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../redux/slice/authSlice"


function Nav() {
    
    const [ user_data, setUser ] = useState(useSelector((store) => store.auth))    
    console.log(user_data)
    const handleLogout = () => {
      localStorage.removeItem("userData");
      setUser("")
      Router.push("/")
    };

    return (                
        <header className='w-full h-20 bg-gradient-to-r from-indigo-500'>
          <div className='flex'>
            <div className='ml-10 mt-7'>
              <Image
                alt="logo"
                src="/vercel.svg"
                width={100}
                height={40}
              />
            </div>
            <div className='ml-12 mt-5 mr-40'>
              <div className='flex-1 flex items-center'>
                  <input type="text" className='block border-1 border-grey shadow-xl rounded-md w-96 h-10 mb-5 p-3 place-items-center' placeholder='Search Events, Shows'/>
              </div>
            </div>

            <div className='flex-1 flex ml-36 mr-10 mt-1'>
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
                {user_data.loggedIn && 
                <>
                  <div>                                    
                    <p value="profile">{user_data.username}</p>
                  </div>
                  <div>
                    <button
                    value="logout"
                    onClick={handleLogout}
                    >
                      Logout
                    </button>                  
                  </div>
                  </>
                }
                {!user_data.loggedIn &&
                  <><p
                  onClick={() => Router.push('/login')}
                >
                  Login
                </p><p
                  onClick={() => Router.push('/register')}
                >
                    Register
                  </p></>
                }
              </div>
            </div>
          </div> 

        </header>
    )
}

export default Nav;