import { ReactElement, ReactEventHandler, useRef } from "react";
import { ButtonCancel, ButtonOk } from "../Button";
import { AiOutlineFileImage } from 'react-icons/ai';

type TPost = {
  showForm: boolean,
  maxWForm: string, // tailwind max width
  title?: string,
  text?: string,
  formData: any,
  onImageInputChange: ReactEventHandler,
  setFormData?: ReactEventHandler,
  onConfirm?: ReactEventHandler,
  onCancel?: ReactEventHandler
}

export const ModalPost = ({
  showForm,
  maxWForm,
  title,
  text,
  formData,
  setFormData,
  onCancel,
  onConfirm,
  onImageInputChange
}: TPost): ReactElement => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  return (
    <div tabIndex={-1} aria-hidden="true" className={`${showForm !== true && "hidden"} fixed z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-600 bg-opacity-50`}>
      <input
        type="file"
        className="hidden"
        ref={imageInputRef}
        onChange={onImageInputChange}
      />
      <div className="w-full grid place-items-center h-full p-5">
        <div className={`flex flex-col w-full bg-gray-100 p-5 rounded-md shadow-lg ${maxWForm}`}>
          <div className="flex flex-row place-items-center m-auto ml-0 gap-1">
            <h3 className="font-semibold text-gray-900 my-2">{title || `Confirmation`}</h3>
          </div>
          <hr className="mt-3"/>

          <div className="w-full">
            <div className="grid grid-flow-row grid-cols-1 gap-2 my-4">
              <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                <div className="flex gap-2 m-4 w-full">
                  <div className="text-sm w-full overflow-hidden">{formData?.file?.name || 'Chose files'}</div>
                  <div className="flex text-sm text-right cursor-pointer text-blue-500 hover:text-blue-800"
                    onClick={() => imageInputRef?.current?.click()}
                  >
                    Browse
                  </div>
                </div>
              </div>
              <div className="flex items-center rounded-lg border border-gray-300 w-28 bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600 justify-center">
                {
                  formData?.image ? (
                    <img src={formData?.image} className="object-fill"/>
                  ) : (<AiOutlineFileImage className="text-2xl"/>)
                }
              </div>

              <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                <input
                  id="caption"
                  className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                  type="text"
                  placeholder="Caption"
                  value={formData?.caption || ""}
                  onChange={(e)=>setFormData({
                    ...formData,
                    caption: e.target.value
                  })}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center rounded-lg border border-gray-300 w-full bg-white shadow-sm focus-within:border-indigo-600 focus-within:ring-1 ring-indigo-600">
                  <input
                    multiple
                    id="tags"
                    className="rounded-lg border-transparent flex-1 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none"
                    type="text"
                    placeholder="Tags"
                    value={formData?.tags || ""}
                    onChange={(e)=>setFormData({
                      ...formData,
                      tags: e.target.value
                    })}
                  />
                </div>
                <span className="text-xs italic"><b>Tips:</b>Use space to multiple tags</span>
              </div>
            </div>
            <div className="flex gap-4">
              <ButtonCancel text="Cancel" onClick={onCancel}/>
              <ButtonOk text="Submit" onClick={onConfirm}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalPost.defaultProps = {
  maxWForm: "max-w-lg",
  formData: []
}
