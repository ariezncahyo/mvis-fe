/* eslint-disable react/prop-types */
import type { ReactElement } from 'react';
import { useState } from 'react';

import Sidebar from "../Sidebar";
import Header from '../Header';
import { Breadcrumbs } from "../Breadcrumbs";
interface ILayout {
  children: ReactElement;
  title: string;
  actions?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, title, actions }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-secondary-50">
      <div>
        {/* Sidebar */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>

      <div className="lg:ml-64 z-40">
        {/* Header */}
        <Header setSidebar={setSidebar} />

        {/* Main */}
        <div className="flex gap-3 px-8 mt-8 mb-4">
          {/* <Breadcrumbs/> */}
          <h1 className="text-2xl font-semibold flex-1">{title}</h1>
          {actions}
        </div>
        <div className="px-8 pb-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout
