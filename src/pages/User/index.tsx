import Layout from "@/components/Layout";
import { ReactElement, useEffect, useRef } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillFileImage } from 'react-icons/ai';
import { ButtonSubmit } from "@/components/Button/ButtonSubmit";
import { userActions } from "@/store/user/slices";
import { loadingActions } from "@/store/loading/slices";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ButtonOk, ButtonCancel } from "@/components/Button";
import { ModalConfirm } from "@/components/Modal";
import path from "path";

export default function User(): ReactElement {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loading }: any = useAppSelector(state=>state.loading);
  const { user }: any = useAppSelector(state=>state.user);
  const [showConfirm, setShowConfirm] = useState(false);
  const [ formEnabled, setFormEnabled ] = useState(false);
  const dispatch = useAppDispatch();

  const imageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(userActions.getUser());
  }, []);

  useEffect(() => {
    console.log(user)
    reset({
      ...user
    });
  }, [user, dispatch]);

  const onSubmit = (data: any) => {

    // dispatch(userActions.updateUser(data));
  }

  const onConfirmEdit = () => {
    setShowConfirm(true);
  }

  const onImageInputChange = async (e: any) => {
    e.preventDefault();

    // dispatch(loadingActions.showMessage({type: 'success', message: 'Hello'}))

    var file = e.target?.files ? e.target.files[0] : null;
		if (!file) {
		  return;
		}

		const { name, type, size } = file;

		if (!type?.startsWith("image/")) {
		  dispatch(loadingActions.showMessage({type: 'error', message: 'Only image file is supported'}))
		}

		const ext = path.extname(name);
		if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      dispatch(loadingActions.showMessage({ type: 'error', message: 'Only .png, .jpg, and .jpeg image are supported' }))
		}

		if (size > 1000000) {
		  dispatch(loadingActions.showMessage({ type: 'error', message: 'Max file size is 1 mb' }))
		}

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
          <input
            type="file"
            className="hidden"
            ref={imageInputRef}
            onChange={onImageInputChange}
          />

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
                        className={`rounded-lg border-transparent flex-1 w-full py-2 px-4 text-gray-700 placeholder-gray-400 text-base focus:outline-none
                          ${!formEnabled && 'bg-gray-200 pointer-events-none'}
                        `}
                        type="text"
                        placeholder="Name"
                        {...register('name', { required: true })}
                      />
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="username"
                        className={`rounded-lg border-transparent flex-1 w-full py-2 px-4 text-gray-700 placeholder-gray-400 text-base focus:outline-none
                          ${!formEnabled && 'bg-gray-200 pointer-events-none'}
                        `}
                        type="text"
                        placeholder="Username"
                        {...register('username', { required: true })}
                      />
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <input
                        id="email"
                        className={`rounded-lg border-transparent flex-1 w-full py-2 px-4 text-gray-700 placeholder-gray-400 text-base focus:outline-none
                          ${!formEnabled && 'bg-gray-200 pointer-events-none'}
                        `}
                        type="text"
                        placeholder="Email"
                        {...register('email', { required: true })}
                      />
                    </div>
                    <div className={`flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600
                      ${!formEnabled && 'bg-gray-200 pointer-events-none'}
                    `}>
                      <div className="flex gap-2 m-4 w-full">
                        <div className="text-sm w-full overflow-hidden">
                          <p>Chose files</p>
                          <p className="text-xs font-thin italic">(jpg,jpeg,png)</p>
                        </div>
                        <div className="flex text-sm text-right cursor-pointer text-blue-500 hover:text-blue-800 items-center"
                          onClick={() => imageInputRef?.current?.click()}
                        >
                          Browse
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 w-28 h-28 bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                      <div className="flex w-full h-full bg-white justify-center items-center rounded-sm">
                        <AiFillFileImage/>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <ButtonCancel
                        text={`${formEnabled ? 'Cancel' : 'Edit'}`}
                        onClick={()=> setFormEnabled(formEnabled ? false : true )}
                      />
                      <ButtonOk
                        text='Submit'
                        type="submit"
                        className={`w-full text-white  bg-gradient-to-bl from-primary-400 to-primary-500 focus:ring-2 ring-1 focus:bg-white ring-primary-500 focus:outline-2 focus:ring-primary-600 dark:focus:ring-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2
                        ${!formEnabled && 'bg-gray-200 pointer-events-none from-gray-400 to-gray-500'}`}
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
