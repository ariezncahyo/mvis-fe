import Layout from "@/components/Layout";
import type { ReactElement } from 'react';

export default function User(): ReactElement {
	return (
		<Layout title="User">
			<div className="flex bg-secondary-50">
				<div className="m-auto text-2xl">
          User
				</div>
			</div>
		</Layout>
	)
}
