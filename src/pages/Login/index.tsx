// pages/login
import type { ReactElement } from 'react';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillMail, AiFillLock} from 'react-icons/ai';
import { ButtonSubmit } from "@/components/Button/ButtonSubmit";
import { authActions } from "@/store/auth/slices";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import logo from '../../assets/logo-topie.png';

export default function LoginPage(): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { loading }: any = useAppSelector(state=>state.loading);
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    dispatch(authActions.login(data));
  };

	return (
    <div>
      Login page
    </div>
	)
}
