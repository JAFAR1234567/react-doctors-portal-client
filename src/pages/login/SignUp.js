import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loding from "../../components/Loding";
const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (user || gUser) {
    console.log(user);
  }

  if (loading || gLoading || updating) {
    return <Loding />;
  }
  let signInError;
  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-400">
        Error: {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate('/appoinment')
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content w-full">
        <div class="card w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body grid gap-4">
            <div class="text-center">
              <h1 class="text-4xl font-bold">Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs my-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name", {})}
                />
                {errors.name?.type === "Please give your Name" &&
                  "Please give your Name"}

                <p>{errors.name?.message}</p>
              </div>
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
                  Already Have An Account?{" "}
                  <Link to="/login" className="text-primary">
                    Login Please
                  </Link>
                </p>
                <button class="btn btn-accent mt-4">Sign Up</button>
              </div>
            </form>
            <div class="form-control">
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

export default SignUp;
