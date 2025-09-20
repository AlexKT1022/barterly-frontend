const Settings = ({ meData }) => {
  return (
    <>
      <div className="border border-zinc-300 w-full mt-5 p-5 rounded-lg">
        <p className="mb-2">Personal Information</p>
        {/* Profile photo  */}
        <div className="grid grid-cols-[200px_minmax(900px,_1fr)] gap-5">
          <div className="w-50 h-full p-2 border border-zinc-300 rounded-lg flex flex-col justify-between items-center">
            <img
              src={meData.profile_image_url}
              className="w-30 h-30 mt-10 rounded-full bg-black"
            />
            <button className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
              Change Photo
            </button>
          </div>

          {/* Personal Info */}
          <div>
            <form action="" className="">
              <div className="flex justify-between">
                <label htmlFor="" className="">
                  First Name
                  <input
                    type="text"
                    placeholder="Nick"
                    className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-md"
                  />
                </label>
                <label htmlFor="">
                  Last Name
                  <input
                    type="text"
                    placeholder="Nick"
                    className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-md"
                  />
                </label>
              </div>
              <label htmlFor="">
                Email
                <input
                  type="text"
                  placeholder="nick@nite.com"
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                />
              </label>
              <label htmlFor="">
                Bio
                <input
                  type="text"
                  placeholder="I like pizza, especially when it melts off the top of my mouth! Not true. It hurts... hurts so good t(-_-t)"
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
                />
              </label>
              <button className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
