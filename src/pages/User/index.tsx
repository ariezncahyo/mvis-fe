import Layout from "@/components/Layout";
import type { ReactElement } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineUser, AiFillLock} from 'react-icons/ai';
import { ButtonSubmit } from "@/components/Button/ButtonSubmit";
import { authActions } from "@/store/auth/slices";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ButtonOk } from "@/components/Button";
import { ModalConfirm } from "@/components/Modal";

export default function User(): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loading }: any = useAppSelector(state=>state.loading);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = () => {

  }

  const onConfirmEdit = () => {
    setShowConfirm(true);
  }

	return (
		<>
      <ModalConfirm
        showForm={showConfirm}
        title="Confirmation"
        text="Are you sure want to update this data?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={onSubmit}
      />
      <Layout title="User">
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
                        id="name"
                        className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: true })}
                      />
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="username"
                        className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                        type="text"
                        placeholder="Username"
                        {...register('username', { required: true })}
                      />
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="email"
                        className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                        type="text"
                        placeholder="Email"
                        {...register('email', { required: true })}
                      />
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <div className="flex gap-2 m-4 w-full">
                        <div className="text-sm w-full overflow-hidden">Chose files</div>
                        <div className="flex text-sm text-right cursor-pointer text-blue-500 hover:text-blue-800">
                          Browse
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-28 h-28 bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">

                    </div>
                    <div className="flex gap-4">
                      <ButtonOk
                        text='Edit'
                      />
                      <ButtonOk
                        text='Submit'
                        onClick={onConfirmEdit}
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
