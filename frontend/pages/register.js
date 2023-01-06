/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slice/authSlice"
import Router from 'next/router'

const Register = () => {
      const dispatch = useDispatch();
      const [warning, setWarning] = useState(false);
      const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
      });

      const InputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
      };
    
      const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(signup(data));
        console.log(data);
        // hideSignUp();
      };
    
      return (
        <div>
          <section className="h-full gradient-form bg-gray-200 md:h-screen">
            <div className="container py-12 px-6 h-full">
              <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">                
                  <div className="block bg-white shadow-lg rounded-lg">                
                        <div className="md:p-12 md:mx-6">
                          <form>
                            <p className="mb-4">Create your new account</p>
                            <div className="mb-4">
                            <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            name="username"
                            value={data.username}
                            onChange={InputChange}
                            placeholder="Enter your Name"
                          />
                            </div>
                            <div className="mb-4">
                              <input
                                type={"text"}
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="email"
                                value={data.email}
                                placeholder="Email"
                                onChange={InputChange}
                              />
                            </div>
                            <div className="mb-4">
                              <input
                                type="password"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="password"
                                
                                placeholder="Password"
                                value={data.password}   
                                onChange={InputChange}
                              />
                            </div>
                            <div className="mb-4">
                              <input
                                type="password"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="cpassword"
                                onChange={(e) => {
                                    if(e.target.value !== data.password) setWarning(true);
                                    else setWarning(false);                                    
                                }}
                                placeholder="Confirm Password"
                              />
                                {warning && (
                                    <p className="text-alert">
                                        Password does not match
                                    </p>
                                )}
                            </div>
                            <div className="text-center pt-1 mb-12 pb-1">
                              <button
                                className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-indigo-500 to-indigo-200"
                                type="submit"
                                onClick={(e) => {                                  
                                  handleSignUp(e)                                  
                                }
                                }
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"                                
                              >
                              Register
                              </button>
                            </div>
                            <div className="flex items-center justify-between pb-6">
                              <p className="mb-0 mr-2">Already Registered!!</p>
                              <button
                                type="button"
                                className="inline-block px-6 py-2 border-2 border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={() => Router.push('/login')}
                              >
                                Login Here
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      
                    </div>
                  </div>
          </section>
        </div>
      );
    };
    
    export default Register;