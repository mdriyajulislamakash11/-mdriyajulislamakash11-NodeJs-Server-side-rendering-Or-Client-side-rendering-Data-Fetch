"use client";
import { signIn } from "next-auth/react";


const LoginButton = () => {
  return (
    <div className="mt-2">
      <button className="btn border-2 px-4 py-1 rounded-full" onClick={() => signIn()}>Login</button>
    </div>
  );
};

export default LoginButton;
