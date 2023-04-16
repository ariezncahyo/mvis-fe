import Layout from "@/components/Layout";
import type { ReactElement } from 'react';

export default function Post(): ReactElement {
	return (
		<Layout title="Post">
			<div className="flex bg-secondary-50">
				<div className="m-auto text-2xl">
          Post
				</div>
			</div>
		</Layout>
	)
}
