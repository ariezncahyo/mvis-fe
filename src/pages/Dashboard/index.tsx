import Layout from "@/components/Layout";
import type { ReactElement } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineSearch, AiOutlineFileImage, AiOutlinePlus} from 'react-icons/ai';
import { ButtonSubmit } from "@/components/Button/ButtonSubmit";
import { authActions } from "@/store/auth/slices";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ButtonOk } from "@/components/Button";
import { ModalConfirm, ModalPost } from "@/components/Modal";
import { FcLike } from 'react-icons/fc';
import { Pagination } from "@/components/Pagination";


export default function Dashboard(): ReactElement {
	return (
		<Layout title="Post">
        <div>
          <div className="bg-secondary-50">
            <div className="flex flex-col gap-4">
              <div className="flex items-center rounded-lg border border-gray-300 w-1/2 mb-8 bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                <div className="mx-2 cursor-pointer">
                  { <AiOutlineSearch className="text-gray-500"/>}
                </div>
                <input
                  id="search"
                  className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                  type="text"
                  placeholder="Search tags or caption"
                  // {...register('username', { required: true })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                  [...Array.from(Array(10).keys())].map(() => {
                    return (
                      <div className="w-full border rounded-lg min-h-64 hover:bg-gray-200">
                        <div className="flex w-full h-48 place-content-center justify-center items-center border-b-2">
                          <AiOutlineFileImage className="text-2xl"/>
                        </div>
                        <div className="flex flex-col p-1">
                          <div className="flex gap-2 items-center">
                            <FcLike/><span className="text-sm">300</span>
                          </div>
                          <div className="flex gap-2 w-full">
                            <div className="flex flex-col w-full">
                              <div className="text-sm font-bold">username</div>
                              <div className="text-sm">Senja di malam takbir menyambut gema jiwa-jiwa</div>
                            </div>
                          </div>
                          <div className="flex text-xs my-4">
                            <p>#sunset #senja #surabaya</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <Pagination/>
        </div>
      </Layout>
	)
}
