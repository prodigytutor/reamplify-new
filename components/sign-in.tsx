import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div>
        <div
  style={{
    viewTransitionName: "root",
  }}>
  <div className="contents">
    <div className="bg-white flex-col flex">
      <div className="flex-grow flex">
        <div className="flex-col justify-center py-12 px-24 flex">
          <div>
            <div>
              <img className="w-12 h-10" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" />
              <h2 className="text-oklch(0.21 0.034 264.665) text-2xl font-bold">Sign in to your account</h2>
              <p className="text-oklch(0.551 0.027 264.364) text-sm">
                Not a member?{" "}
                <a className="text-oklch(0.511 0.262 276.966) font-semibold" href="https://tailwindui.com/#">
                  Start a 14 day free trial
                </a>
              </p>
            </div>
            <div>
              <form action="https://tailwindui.com/#">
                <div className="text-sm text-oklch(0.21 0.034 264.665)">
                  <label className="font-medium">Email address</label>
                  <input
                    className="cursor-text py-1.5 px-3 w-96 h-9 rounded-md"
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "2px",
                    }}
                    type="email"
                  />
                </div>
                <div className="text-sm text-oklch(0.21 0.034 264.665)">
                  <label className="font-medium">Password</label>
                  <input
                    className="cursor-text py-1.5 px-3 w-96 h-9 rounded-md"
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "2px",
                    }}
                    type="password"
                  />
                </div>
                <div className="items-center justify-between flex">
                  <div className="flex gap-3">
                    <div className="items-center flex">
                      <div className="grid-cols-[1.00rem] grid-rows-[1.00rem] grid">
                        <input className="border-b-oklch(0.872 0.01 258.338) border-l-oklch(0.872 border-r-oklch(0.872 border-t-oklch(0.872 col-start-1 row-start-1 w-4 h-4 rounded" type="checkbox" />
                        <svg className="self-center col-start-1 row-start-1 justify-self-center w-3.5 h-3.5" fill="none" viewBox="0 0 14 14" />
                      </div>
                    </div>
                    <label className="text-oklch(0.21 0.034 264.665) text-sm">Remember me</label>
                  </div>
                  <div className="text-sm text-oklch(0.511 0.262 276.966) font-semibold">
                    <a href="https://tailwindui.com/#">Forgot password?</a>
                  </div>
                </div>
                <button className="text-white bg-oklch(0.511 0.262 276.966) items-start text-sm font-semibold justify-center py-1.5 px-3 text-center flex w-96 h-9 rounded-md">Sign in</button>
              </form>
              <div className="text-sm text-oklch(0.21 0.034 264.665)">
                <div className="relative font-medium">
                  <div className="justify-center flex">
                    <span className="px-6">Or continue with</span>
                  </div>
                </div>
                <div className="grid-cols-[184px_184px] grid-rows-[2.50rem] grid gap-4 font-semibold">
                  <a className="items-center justify-center py-2 px-3 flex rounded-md gap-3" href="https://tailwindui.com/#">
                    <svg className="cursor-pointer w-5 h-5" fill="rgb(0, 0, 0)" viewBox="0 0 24 24">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="rgb(234, 67, 53)" />
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="rgb(66, 133, 244)" />
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="rgb(251, 188, 5)" />
                      <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="rgb(52, 168, 83)" />
                    </svg>
                    <span className="cursor-pointer">Google</span>
                  </a>
                  <a className="items-center justify-center py-2 px-3 flex rounded-md gap-3" href="https://tailwindui.com/#">
                    <svg className="cursor-pointer w-5 h-5" fill="rgb(36, 41, 47)" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" fill="rgb(36, 41, 47)" fillRule="evenodd" />
                    </svg>
                    <span className="cursor-pointer">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow relative">
          <img className="bottom-0 left-0 object-cover absolute top-0 w-[84.00rem] h-[56.25rem]" src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}