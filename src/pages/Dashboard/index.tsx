import Layout from "@/components/Layout";
import type { ReactElement } from 'react';
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineSearch, AiOutlineFileImage, AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Pagination } from "@/components/Pagination";
import { postActions } from "@/store/post/slices";


export default function Dashboard(): ReactElement {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loading }: any = useAppSelector(state=>state.loading);
  const { post }: any = useAppSelector(state=>state.post);
  const [ filter, setFilter ] = useState<any>({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.getPost(filter));
  }, [filter]);

	return (
		<Layout title="Post">
        <div>
          <div className="bg-secondary-50">
            <div className="flex flex-col gap-4">
              <div className="flex items-center rounded-lg border border-gray-300 w-1/2 mb-8 bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                <div className="mx-2 cursor-pointer">
                  { <AiOutlineSearch className="text-primary-500 text-2xl"/>}
                </div>
                <input
                  id="search"
                  className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                  type="text"
                  placeholder="Search tags or caption"
                  onChange={(e)=> setFilter({
                    ...filter,
                    search: e.target.value
                  })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                  post?.data?.rows && post?.data?.rows.map((item: any, index: any) => {
                    return (
                      <div key={index} className="w-full border rounded-lg min-h-64 hover:bg-gray-200">
                        <div className="flex w-full h-48 place-content-center justify-center items-center border-b-2">
                          {
                            item?.image ? (
                              <img src={item?.image}/>
                            ) : (<AiOutlineFileImage className="text-2xl"/>)
                          }
                        </div>
                        <div className="flex flex-col p-1">
                          <div className="flex gap-2 items-center">
                            <AiOutlineHeart className="text-2xl cursor-pointer"/><span className="text-sm">{item?.likes}</span>
                          </div>
                          <div className="flex gap-2 w-full">
                            <div className="flex flex-col w-full">
                              <div className="text-sm font-bold">{item?.user?.username}</div>
                              <div className="text-sm">{item?.caption}</div>
                            </div>
                          </div>
                          <div className="flex text-xs my-4">
                            <p>{item?.tags}</p>
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
