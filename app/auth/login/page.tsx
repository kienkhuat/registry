"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import react, { useState } from "react";
import { Icons } from "@/components/icons"

export default function Page() {
	const [email, setEmail] = useState<String>("")
	const [password, setPassword] = useState<String>("")
	return (
		<div className="flex justify-center items-center min-h-[calc(100vh-65px)]">
			<div className="w-[400px] bg-gray-900 rounded-3xl p-4 pb-8">
				<div className="flex justify-center items-center text-center text-2xl">Login</div>
				<div className="border-b-2 mt-2"></div>
				<div className="flex flex-col gap-4 mt-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}/>
					</div>

					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="password">Password</Label>
						<Input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)}/>
					</div>

					<Button onClick={() => console.log({email, password})}>Log in</Button>

					{/* <div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t"/>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="bg-gray-900 px-2">
								Or continue with
							</span>
						</div>
					</div>

					<Button variant={"outline"}><Icons.google className="h-6 w-6"/></Button> */}
				</div>
			</div>
		</div>
	)
}