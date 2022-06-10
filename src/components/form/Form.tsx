
type Props = {
  credentials: any
  setCredentials: any
  handleFunction: any
}

function Form(props: Props) {

  const { handleFunction, credentials, setCredentials } = props
  return (
    <div className=" form-container  w-[400px]  bg-white-100 min-h-[400px] flex flex-col px-10 py-5 rounded-md">
      <h1 className="text-center text-2xl font-bold font-16">welcome back !</h1>
      <div className="form mt-5">
        <form onSubmit={(e) => handleFunction(e)}>
          <div className="flex flex-col justify-center">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              placeholder="&#xf0e0;    Your email here"
              className="p-2 mt-5 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e) => setCredentials((prevState: any) => ({ ...prevState, email: e.target.value }))}
            />
          </div>

          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              placeholder="&#xf023; Your password here"
              className="input_password p-2 mt-5 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) => setCredentials((prevState: any) => ({ ...prevState, password: e.target.value }))}


            />
            <div className="input_password"></div>
          </div>
          <div className="mt-5">
            <button className="bg-btncolor px-4 py-2 w-full rounded-lg hover:bg-blue-500 text-white">
              Log in
            </button>
          </div>
          <p className="text-center mt-5 text-xs">or login with SSO</p>
        </form>
        <p className="text-center mt-4 text-xs">Don't have an account ? sign up</p>

      </div>

    </div>
  );
}

export default Form;
