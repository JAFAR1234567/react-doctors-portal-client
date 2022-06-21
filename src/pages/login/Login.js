import React from "react";
import { Link } from "react-router-dom";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if(user){
    console.log(user);
  }
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content w-full">
        <div class="card w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body grid gap-4">
            <div class="text-center">
              <h1 class="text-4xl font-bold">Login</h1>
            </div>

            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
              <div class="divider">OR</div>
              <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
