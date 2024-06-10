'use client';
import { useState } from 'react';
import Link from 'next/link';
import './auth-form.css';

export default function IndexPage() {
  const [form, changeForm] = useState({ email: '', password: '' });
  return (
    <main
      id={'auth-form'}
      className="flex rounded-md flex-col gap-4 p-4 md:p-6 bg-black-500 items-center"
    >
      <h1 className=" capitalize font-semibold text-lg md:text-2xl">
        Login to your account
      </h1>
      <form className="flex flex-col items-center gap-4 p-4 md:p-6">
        <div className="form-field">
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input
            className="p-2 w-full rounded-md"
            placeholder="Enter Your Email Address"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) =>
              changeForm((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">
            <i className="fa-solid fa-lock"></i>
          </label>
          <input
            className="p-2 w-full rounded-md"
            placeholder="Enter Your Password"
            name="password"
            id="password"
            type="password"
            minLength={8}
            value={form.password}
            onChange={(e) =>
              changeForm((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
          <i className="show-icon fa-solid fa-eye"></i>
        </div>

        <Link href={'/auth/forgot-password'}>
          <span>Forgot Password?</span>
        </Link>

        <input
          className="text-white rounded-md w-40 p-2 submit-button cursor-pointer bg-gray-800 hover:bg-gray-900 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
          type="submit"
          value="Login"
        />
      </form>
    </main>
  );
}
