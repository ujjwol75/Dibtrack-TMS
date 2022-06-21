type Props = {
  credentials: any;
  setCredentials: any;
  handleFunction: any;
  errors: any;
};

const SignupForm = (props: Props) => {
  const { credentials, setCredentials, handleFunction, errors } = props;

  return (
    <div className=" form-container  w-[400px]  bg-white-100 min-h-[400px] flex flex-col px-10 py-5 rounded-md">
      <h1 className="text-center text-2xl font-bold font-16">Let's go</h1>
      <div className="form mt-5">
        <form onSubmit={handleFunction}>
          <div className="flex flex-col justify-center">
            <label>Name:</label>
            <input
              type="text"
              name="fullname"
              value={credentials.fullName}
              placeholder="Your full name  here"
              className="p-2 mt-3 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  fullName: e.target.value,
                }))
              }
            />
          </div>
          {errors.fullNameError && (
            <p className="text-red-500 text-xs">{errors.fullNameError}</p>
          )}
          <div className="flex flex-col justify-center">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              placeholder="Your email here"
              className="p-2 mt-3 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>
          {errors.emailError && (
            <p className="text-red-500 text-xs">{errors.emailError}</p>
          )}

          <div className="flex flex-col justify-center">
            <label>Mobile:</label>
            <input
              type="tel"
              name="email"
              value={credentials.mobileNumber}
              placeholder="Your mobile number here"
              className="p-2 mt-3 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  mobileNumber: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              placeholder="Your password here"
              className="input_password p-2 mt-3 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>
          {errors.passwordError && (
            <p className="text-red-500 text-xs">{errors.passwordError}</p>
          )}
          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">confirm password:</label>
            <input
              type="password"
              name="password"
              value={credentials.confirmpassword}
              placeholder="Your password here"
              className="input_password p-2 mt-3 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) =>
                setCredentials((prevState: any) => ({
                  ...prevState,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </div>
          {errors.confirmPasswordError && (
            <p className="text-red-500 text-xs">
              {errors.confirmPasswordError}
            </p>
          )}
          <div className="mt-5">
            <button className="bg-btncolor px-4 py-2 w-full rounded-lg hover:bg-blue-500 text-white">
              Sign Up
            </button>
          </div>
          <p className="text-center mt-5 text-xs">or signup with SSO</p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
