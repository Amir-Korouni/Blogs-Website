const SingupForm = () => {
  return (
    <>
      <form action="/" className="w-[70%] flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            name="name"
            id="name"
            aria-describedby="input-name"
            className="
                w-full
                h-10
                rounded-md
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>

          <input
            type="text"
            name="username"
            id="username"
            aria-describedby="input-username"
            className="
                w-full
                h-10
                rounded-md
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            id="email"
            aria-describedby="input-email"
            className="
                w-full
                h-10
                rounded-md
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            id="password"
            aria-describedby="input-password"
            className="
                w-full
                h-10
                rounded-md
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
          />
        </div>

        <button
          aria-label="submit button"
          type="submit"
          className="
              w-full
              h-10
              bg-blue-500
              text-white
              rounded-md
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default SingupForm;
