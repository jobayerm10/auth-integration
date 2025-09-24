import React from "react";
import { Link, Links } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card bg-base-100 w-full mx-auto mt-8 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold">Login now</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          New to this site? Please{" "}
          <Link
            className="text-blue-600 underline font-semibold"
            to="/register"
          >
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
