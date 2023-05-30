"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import react, { useState } from "react";
import { Icons } from "@/components/icons"

export default function Page() {
	const [email, setEmail] = useState<String>("")
	const [emailError, setEmailError] = useState<Boolean>(false)
	const [password, setPassword] = useState<String>("")
	const [passwordError, setPasswordError] = useState<Boolean>(false)
	const [errorMessage, setErrorMessage] = useState<String>("")
	const handleLogin = () => {
		checkError()

		if(password != "" && email != "") {
			console.log({email, password})
		}
	}

	const checkError = () => {
		if(!email) {
			setErrorMessage("Please enter your email!")
		} else if (!password) {
			setErrorMessage("Please enter your password!")
		} else if ( false ) {
			setErrorMessage("Email or password is incorrect!")
		} else {
			setErrorMessage("")
		}
	}

	return (
		<div className="flex justify-center items-center min-h-[calc(100vh-65px)]">
			<div className="w-[400px] bg-gray-900 rounded-3xl p-4 pb-8">
				<div className="flex justify-center items-center text-center text-2xl">Login</div>
				<div className="border-b-2 mt-2"></div>
				<div className="flex flex-col gap-4 mt-4 items-center">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}/>
					</div>

					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="password">Password</Label>
						<Input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)}/>
					</div>

					{errorMessage != "" ? <div className="text-red-700">{errorMessage}</div> : <></>}

					<Button className="w-full" onClick={() => handleLogin()}>Log in</Button>
				</div>
			</div>
		</div>
	)
}