import Layout from "@/components/Layout";
import type { ReactElement } from 'react';
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineSearch, AiOutlineFileImage, AiOutlinePlus, AiOutlineHeart} from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ModalConfirm, ModalPost } from "@/components/Modal";
import { Pagination } from "@/components/Pagination";
import { postActions } from "@/store/post/slices";
import { loadingActions } from "@/store/loading/slices";
import { readFileBase64 } from "utils/utility";

export default function Post(): ReactElement {
  const [deletePost, setDeletePost] = useState<any>({});
  const [formData, setFormData] = useState<any>({});
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loading }: any = useAppSelector(state=>state.loading);
  const { post }: any = useAppSelector(state=>state.post);
  const [ filter, setFilter ] = useState<any>({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.getPost(filter));
  }, [filter]);


  const onDelete = () => {
    dispatch(postActions.deletePost(deletePost?.public_id));
    setDeletePost({});
    dispatch(postActions.getPost(filter));
  }

  const onSubmit = () => {
    if (formData?.public_id) {
      dispatch(postActions.updatePost(formData));
    } else {
      dispatch(postActions.createPost(formData));
    }
    setFormData({});
  }

  const onImageInputChange = async (e: any) => {
    e.preventDefault();

    var file = e.target?.files ? e.target.files[0] : null;
		if (!file) {
		  return;
		}

		const { size } = file;

		if (size > 1000000) {
		  dispatch(loadingActions.showMessage({ type: 'error', message: 'Max file size is 1 mb' }))
		}

    try {
      const imgData = await readFileBase64(file);
      setFormData({
        ...formData,
        image: imgData,
        file
      });
    } catch(err) {
      dispatch(loadingActions.showMessage({ type: 'error', message: 'Error image' }))
    }
  }

	return (
		<>
      <ModalPost
        showForm={formData?.show === true}
        title="Edit Post"
        onCancel={() => setFormData({})}
        onConfirm={onSubmit}
        formData={formData}
        setFormData={setFormData}
        onImageInputChange={onImageInputChange}
      />
      <ModalConfirm
        showForm={deletePost?.show === true}
        title="Delete Post"
        text="Are you sure want to delete this data?"
        onCancel={() => setDeletePost({
          ...deletePost,
          show: false
        })}
        onConfirm={onDelete}
      />
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
                        <div className="flex w-full h-48 place-content-center justify-center items-center border-b-2 overflow-hidden">
                          {
                            item?.image ? (
                              <img src={item?.image} alt={item?.name} className="object-cover"/>
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
                            <div className="flex flex-col gap-1">
                              <div className="text-xs bg-red-400 p-0 px-1 rounded-md text-white text-center hover:bg-red-700 cursor-pointer"
                                onClick={()=> setDeletePost({
                                  ...deletePost,
                                  show: true,
                                  ...item
                                })}
                              >Delete</div>
                              <div className="text-xs bg-primary-400 p-0 px-1 rounded-md text-white text-center hover:bg-primary-700 cursor-pointer"
                                onClick={()=> setFormData({
                                  ...formData,
                                  ...item,
                                  show: true
                                })}
                              >Edit</div>
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
            <Pagination/>
          </div>
          <div className="fixed bottom-0 right-0 w-16 h-16 mr-12 mb-8 cursor-pointer">
            <div className="flex bg-primary-500 w-12 h-12 rounded-full justify-items-center justify-center place-content-center items-center text-white font-bold cursor-pointer hover:bg-primary-700">
              <AiOutlinePlus className="text-2xl"
                onClick={()=> setFormData({
                  ...formData,
                  show: true,
                  tags: '',
                  caption: '',
                  image: ''
                })}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
	)
}
