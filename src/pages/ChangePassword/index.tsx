import Layout from "@/components/Layout";
import type { ReactElement } from 'react';

export default function ChangePassword(): ReactElement {
	return (
		<Layout title="Change Password">
			<div className="flex bg-secondary-50">
				<div className="m-auto text-2xl">
          Change Password
				</div>
			</div>
		</Layout>
	)
}
