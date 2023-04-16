import Layout from "@/components/Layout";
import { ReactElement, useEffect } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineUser, AiFillLock} from 'react-icons/ai';
import { ButtonSubmit } from "@/components/Button/ButtonSubmit";
import { userActions } from "@/store/user/slices";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ButtonOk } from "@/components/Button";
import { ModalConfirm } from "@/components/Modal";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";

export default function ChangePassword(): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loading }: any = useAppSelector(state=>state.loading);
  const { password_changed }: any = useAppSelector(state=> state.user);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const { logout } = useAuth();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    setFormData(data);
    setShowConfirm(true);
  }

  const onConfirmEdit = () => {
    dispatch(userActions.changePassword(formData));
    setShowConfirm(false);
  }

  useEffect(() => {
    if (password_changed === true) {
      logout().then((res: boolean) => {
        if (res) navigate(0);
      });
    }
  }, [password_changed]);

	return (
		<>
      <ModalConfirm
        showForm={showConfirm}
        title="Confirmation"
        text="Are you sure want to update this data?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={onConfirmEdit}
      />
      <Layout title="Change Password">
        <div className="flex bg-secondary-50">
          <div className="text-2xl w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            >
            <div className="w-full flex overflow-hidden relative">
              <div className="bg-right-bottom bg-no-repeat m-auto">
                <div className="mx-3 lg:mx-14 mb-8 lg:mb-12 p-8 lg:p-8 mt-1 lg:mt-1 flex flex-col bg-gray-200 rounded-lg relative z-20 gap-4">
                  <div className="grid grid-flow-row grid-cols-1 gap-4">
                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="old_password"
                        className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                        type="text"
                        placeholder="Old Password"
                        {...register('old_password', { required: true })}
                      />
                    </div>

                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="new_password"
                        className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                        type="text"
                        placeholder="New Password"
                        {...register('new_password', { required: true })}
                      />
                    </div>

                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="confirm_password"
                        className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                        type="text"
                        placeholder="Confirm New Password"
                        {...register('confirm_password', { required: true })}
                      />
                    </div>

                    <div className="flex gap-4">
                      <ButtonOk
                        text='Update'
                        type="submit"
                        isLoading={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </Layout>
    </>
	)
}
