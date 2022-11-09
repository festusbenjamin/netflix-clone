import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: String;
  password: String;
}

const login = () => {
  const [login, setLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {      
      if(login){
          //await signIn(email, password)
      }else{
          //await signUp(email, password)
      }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/logo_netflix.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://rb.gy/ulxxee"
        width={150}
        height={150}
        className="absolute  left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-3xl font-semibold flex justify-center">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input"
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              {...register("password", { required: true, minLength: 5 })}
              type="password"
              placeholder="Password"
              className="input"
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Invalid password
              </p>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => {
            setLogin(true);
          }}
        >
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            className="text-white hover:underline"
            onClick={() => {
              setLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
