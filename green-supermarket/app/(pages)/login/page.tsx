'use client'

import React, { useState } from 'react'
import Container from '@/components/container/container'
import {  loginAPICall  } from "@/services/authService"




export default function login() {


  const [email,setEmail] = useState ('')
  const [password,setPassword] = useState('')



  function handleLoginForm(e: any) {
    e.preventDefault();

    loginAPICall(email,password).then((response)=>{
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })

   

  }

  return (
    <>
    <Container>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className=" font-PrimaryFont mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
              <div>
     
        <input
          className="p-5 block w-full rounded-[40px] h-11 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-none focus:ring-Green focus:outline-none sm:text-sm sm:leading-6"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    </div>
              </div>
            </div>

            <div>
              
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" p-5 block w-full focus:outline-none rounded-[40px] h-11  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Green sm:text-sm sm:leading-6"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> 
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick= {(e) => handleLoginForm(e)}

                className="flex w-full h-11 rounded-[40px] justify-center bg-Green  py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-DarkGreen "
              >
                login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           
            <a href="#" className="font-semibold leading-6 text-black hover:text-DarkGreen">
              Create account {''} / {''}
            </a>
            
            <a href="#" className="font-semibold text-black hover:text-DarkGreen underlie">
                    Forgot password?
            </a>
          </p>
        </div>
    </div>

    </Container>
    
    </>
  )
}
