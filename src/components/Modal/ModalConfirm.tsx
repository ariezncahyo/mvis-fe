import { ReactElement, ReactEventHandler } from "react";
import { ButtonCancel, ButtonOk } from "../Button";

type TConfirm = {
  showForm: boolean,
  maxWForm: string, // tailwind max width
  title?: string,
  text?: string,
  onConfirm?: ReactEventHandler,
  onCancel?: ReactEventHandler
}

export const ModalConfirm = ({
  showForm,
  maxWForm,
  title,
  text,
  onCancel,
  onConfirm
}: TConfirm): ReactElement => {
  return (
    <div tabIndex={-1} aria-hidden="true" className={`${showForm !== true && "hidden"} fixed z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-gray-600 bg-opacity-50`}>
      <div className="w-full grid place-items-center h-full p-5">
          <div className={`flex flex-col w-full bg-gray-100 p-5 rounded-md shadow-lg ${maxWForm}`}>
            <div className="flex flex-row place-items-center m-auto ml-0 gap-1">
              <h3 className="font-semibold text-gray-900 my-2">{title || `Confirmation`}</h3>
            </div>
            <hr className="mt-3"/>
            <div className="w-full">
              <div className="my-5">{text}</div>
              <div className="flex gap-4">
                <ButtonCancel text="Cancel" onClick={onCancel}/>
                <ButtonOk text="Yes" onClick={onConfirm}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

ModalConfirm.defaultProps = {
  maxWForm: "max-w-lg"
}
