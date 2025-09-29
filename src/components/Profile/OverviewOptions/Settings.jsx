const Settings = ({ meData }) => {
  return (
    <>
      <div className="mx-auto md:w-2xl lg:w-6xl border border-zinc-300 mt-5 p-5 rounded-lg">
        <p className="mb-2">Personal Information</p>
        {/* Profile photo  */}
        <div className="md:grid md:grid-cols-[200px_minmax(900px,_1fr)] md:gap-0 lg:gap-5">
          <div className="md:w-50 h-full md:h-64 p-2 border border-zinc-300 rounded-lg flex flex-col justify-between items-center">
            <img
              src={meData.profile_image_url}
              className="w-30 h-30 mt-10 rounded-full bg-black"
            />
            <button className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
              Change Photo
            </button>
          </div>

          {/* Personal Info */}

          <form action="" className="mx-auto w-full flex flex-col gap-4 ml-2">
            <div className="flex flex-col md:flex-row gap-4">
              <label>
                First Name
                <input
                  type="text"
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-48 lg:w-90"
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-48 lg:w-90"
                />
              </label>
            </div>

            <label>
              Email
              <input
                type="text"
                placeholder="nick@nite.com"
                className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-100 lg:w-184"
              />
            </label>

            <label>
              Bio
              <input
                type="text"
                placeholder="I like pizza, especially when it melts off the top of my mouth! Not true. It hurts... hurts so good t(-_-t)"
                className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-100 lg:w-184"
              />
            </label>

            <button className="bg-zinc-800 text-white p-3 rounded-lg mt-2 hover:bg-zinc-500 duration-300 md:w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
