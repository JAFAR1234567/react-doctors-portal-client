import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loding from "../../components/Loding";
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loding />;
  }
  let signInError;
  if (error || gError) {
    signInError = (
      <p className="text-red-400">Error: {error?.message || gError?.message}</p>
    );
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content w-full">
        <div class="card w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body grid gap-4">
            <div class="text-center">
              <h1 class="text-4xl font-bold">Login</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs my-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "error message",
                    },
                  })}
                />
                {errors.email?.type === "Please give a valid email" &&
                  "Please give a valid email"}

                <p>{errors.email?.message}</p>
              </div>
              <div class="form-control w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Your Password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    min: {
                      value: 6,
                      message: "Password must be 6 character", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                {errors.password?.type === "required" &&
                  "Password must be 6 character"}
                {signInError}
                <p>{errors.password?.message}</p>
                <p className="mt-2">
                  New in Doctors Portal?{" "}
                  <Link to="/signup" className="text-primary">
                    Create An Account
                  </Link>
                </p>
                <button class="btn btn-accent my-4">Login</button>
              </div>
            </form>
            <div class="form-control mt-2">
              <div class="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
