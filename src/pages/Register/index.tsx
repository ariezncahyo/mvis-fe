// pages/register
import type { ReactElement } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineUser, AiFillLock} from 'react-icons/ai';
import { ButtonSubmit } from "@/components/Button/ButtonSubmit";
import { authActions } from "@/store/auth/slices";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";

export default function RegisterPage(): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { loading }: any = useAppSelector(state=>state.loading);
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    dispatch(authActions.login(data));
  };

	return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      >
      <div className="w-full h-screen flex overflow-hidden relative">
        <div className="w-7/12 max-w-screen-lg bg-right-bottom bg-no-repeat m-auto">
          <div className="mx-8 lg:mx-14 mb-8 lg:mb-12 p-8 lg:p-16 mt-1 lg:mt-1 flex flex-col bg-gray-300 rounded-lg relative z-20 gap-4">
            <div className="flex flex-col">
              <span className="text-gray-800 text-lg font-bold">Register to join with community</span>
            </div>

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
                <input
                  id="password"
                  className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password', { required: true })}
                />
              </div>
              <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                <input
                  id="confirm_password"
                  className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Retype your password"
                  {...register('confirm_password', { required: true })}
                />
              </div>
              <ButtonSubmit
                text="Register"
                type="submit"
                isLoading={loading}
              />
              <div className="text-center cursor-pointer text-gray-500">Already have account?
                <Link
                  to={'/login'}
                  className=" mx-2 text-blue-500 hover:text-blue-800 cursor-pointer"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
	)
}
