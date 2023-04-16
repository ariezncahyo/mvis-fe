import { ReactElement, useState } from "react";

type TFormModal = {
  showForm: boolean,
  maxWForm: string, // tailwind max width
  title: string,
  ModalBody?: ReactElement
}

export const FormModal = ({
  showForm,
  maxWForm,
  title,
  ModalBody
}: TFormModal): ReactElement => {
  return (
    <div tabIndex={-1} aria-hidden="true" className={`${showForm !== true && "hidden"} fixed z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-600 bg-opacity-50`}>
      <div className="w-full grid place-items-center h-full p-5">
          <div className={`flex flex-col w-full bg-gray-100 p-5 rounded-md shadow-lg ${maxWForm}`}>
            <h3 className="font-semibold text-gray-900 my-2">{title}</h3>
            <div className="w-full">
              { ModalBody }
            </div>
          </div>
        </div>
    </div>
  )
}

FormModal.defaultProps = {
  maxWForm: "max-w-xl"
}
