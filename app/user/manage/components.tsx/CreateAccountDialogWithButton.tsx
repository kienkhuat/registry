import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function CreateAccountDialogWithButton() {
	return (
		<Dialog>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						{/* Create Account dialog */}
						<DialogTrigger>
							<Button variant={'outline'}><Icons.userPlus /></Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Create new account</DialogTitle>
								<DialogDescription>
									<div className='flex flex-col mt-3 gap-4'>
										<div className="grid w-full items-center gap-2">
											<Label htmlFor="username">Username</Label>
											<Input
												type="username" 
												id="username" 
												placeholder="Username" 
												onChange={(e) => console.log(e.currentTarget.value)}
											/>
										</div>
										<div className="grid w-full items-center gap-2">
											<Label htmlFor="email">Email</Label>
											<Input
												type="email" 
												id="email" 
												placeholder="Email" 
												onChange={(e) => console.log(e.currentTarget.value)}
											/>
										</div>
										<div className="grid w-full items-center gap-2">
											<Label htmlFor="password">Password</Label>
											<Input
												type="password" 
												id="password" 
												placeholder="Password" 
												onChange={(e) => console.log(e.currentTarget.value)}
											/>
										</div>
										<Button>CREATE</Button>
									</div>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</TooltipTrigger>
					<TooltipContent>
						<p>Create new account</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Dialog>
	)
}
