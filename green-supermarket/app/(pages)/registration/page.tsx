'use client'

import Container from "@/components/container/container"
import { use, useState } from "react"
import { registerAPICall } from "@/services/authService"



export default function Registration() {

  const [firstName, setFirstName]  =  useState('') 
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')


  function handleRegistrationForm(e: any) {
    e.preventDefault();
    const register = {firstName, lastName, email, password}
    console.log(register);

    registerAPICall(register).then((response:any) => {
      console.log(response);
   }).catch((error:any) => {
      console.log(error);
   })

  }
  return (
    <Container>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
        <h2 className=" font-PrimaryFont mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
       
          <div>
            <div className="mt-2">
              <input
                className=" p-5 focus:outline-none block w-full rounded-[40px] h-11 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Green sm:text-sm sm:leading-6"
                name="Fname"
                type="text"
                autoComplete="FirstName"
                required
                placeholder='FirstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
               
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <input
                className=" p-5 focus:outline-none block w-full rounded-[40px] h-11 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Green sm:text-sm sm:leading-6"
                name="Lname"
                type="text"
                autoComplete="LastName"
                required
                placeholder='LastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
             <input
                className=" p-5 focus:outline-none  block w-full rounded-[40px] h-11 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-Green sm:text-sm sm:leading-6"
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
            <a href={`/`}>
            <button
              type="submit"
              onClick= {(e) => handleRegistrationForm(e)}
              className=  "flex w-full h-11 rounded-[40px] justify-center bg-Green  py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-DarkGreen "
            >
             Create
            </button>
            </a>
          </div>
        </form>
      </div>
  </div>

  </Container>
  
)
  
}