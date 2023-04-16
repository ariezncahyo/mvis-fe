/* eslint-disable import/no-unresolved */
import { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { PrivateRoute } from '@/routes/routes';
import { useAuth } from "@/hooks/useAuth";
import { ModalConfirm } from "../Modal";
import clsx from 'clsx';

interface ISidebar {
  sidebar: boolean;
  setSidebar: any;
}

const Sidebar: React.FC<ISidebar> = ({ sidebar, setSidebar }: ISidebar): ReactElement => {
  const { logout } = useAuth();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    logout().then((res: boolean) => {
      console.log(res);
      if (res) navigate(0);
    });
  };

  return (
    <>
      <ModalConfirm
        showForm={confirmLogout}
        title="Confirmation"
        text="Keluar dari aplikasi?"
        onCancel={() => setConfirmLogout(false)}
        onConfirm={onLogout}
      />
      <div
        className={clsx(
          'flex flex-col fixed bottom-0 top-0 z-40 w-64 flex-shrink-0 bg-white border-r',
          sidebar ? '' : 'hidden lg:flex'
        )}
      >
        {/* Sidebar Head */}
        <div className="flex flex-row justify-between my-4 mx-4">
          <div
            className="lg:hidden m-auto mr-0 cursor-pointer"
            onClick={() => setSidebar(!sidebar)}
          >
            <AiOutlineMenu/>
          </div>
        </div>

        {/* Sidebar */}
        <nav className="flex flex-col overflow-y-auto flex-1 px-4">
          <div className="my-0">
            {PrivateRoute?.map((route, index) => {
              const { title, path, icon } = route;

              return (
                <div className="flex flex-col pt-2" key={index}>
                  <div
                    key={index}
                    className="flex w-ful hover:bg-orange-200 active:bg-orange-200 rounded py-1 cursor-pointer"
                  >
                    <div className="w-full flex justify-between gap-3 mx-2">
                      <div className="place-items-center m-auto ml-0 mr-0">{icon}</div>
                      <Link to={path} className="m-auto ml-0">
                        {title}
                      </Link>
                      {/* {route?.child && (
                        <div className="place-items-center m-auto mr-0">
                          <AiFillCaretUp />
                        </div>
                      )} */}
                    </div>
                  </div>

                  <div className="px-2 ml-[15px] border-l">
                    {/* {route?.child?.map((child, indexChild) => {
                      const { title, path } = child;
                      return (
                        <Link
                          key={indexChild}
                          to={path}
                          className="flex w-full hover:bg-orange-200 active:bg-orange-200 rounded py-1 pl-[12px] cursor-pointer"
                        >
                          {title}
                        </Link>
                      );
                    })} */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="place-items-end m-auto mb-4 w-full rounded px-2 py-1">
            <div
              className="flex flex-row gap-2 place-items-center m-auto cursor-pointer hover:bg-orange-200 px-2 py-1 rounded-md"
              onClick={() => setConfirmLogout(true)}
            >
              <AiOutlineLogout />
              <span>Log out</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
