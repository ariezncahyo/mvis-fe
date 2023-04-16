import Layout from "@/components/Layout";
import type { ReactElement } from 'react';

export default function Dashboard(): ReactElement {
	return (
		<Layout title="Dashboard">
			<div className="flex bg-secondary-50">
				<div className="m-auto text-2xl">
          Dashboard
				</div>
			</div>
		</Layout>
	)
}
