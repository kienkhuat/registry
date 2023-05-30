'use client';

import React from 'react'
import CreateAccountDialogWithButton from './components.tsx/CreateAccountDialogWithButton';

export default function IndexPage() {
	return (
		<div className="container pb-8 pt-6 md:py-10 bg-gray-900 min-h-[calc(100vh-65px)]">
			{/* Header */}
			<div className="flex justify-between py-2 border-b-2">
				<div className="text-3xl">Manage Accounts</div>
				<div className="flex gap-3">
					<CreateAccountDialogWithButton />
				</div>
			</div>
			{/* Content */}
		</div>
	)
}
