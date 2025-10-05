// Settings: generally used for the user to change information about themselves (including profile photo). Username is locked now for future features(i.e. ratings)

import { useState } from "react";
import { FaLockOpen } from "react-icons/fa";
import states from "../../../pages/auth/usStates";

const Settings = ({ meData }) => {
  const [profileImg, setProfileImg] = useState(meData.profile_image_url);
  const [changePhotoBtn, setChangePhotoBtn] = useState(false);
  const [changeSuccess, setChangeSuccess] = useState(null);
  const [error, setError] = useState(null);

  // field disabled so user cannot change name
  const userName = meData.username;

  // change image
  const handleChangeImg = (event) => {
    setProfileImg(event.target.value);
  };

  // Change profile settings
  const handleChangeProfile = async (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);

    const username = userName;
    const profile_image_url = profileImg;
    const location = newFormData.get("location");
    const first_name = newFormData.get("firstName");
    const last_name = newFormData.get("lastName");
    const bio = newFormData.get("bio");
    const fields = {
      username,
      profile_image_url,
      location,
      first_name,
      last_name,
      bio,
    };
    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch(
        `https://barterly-backend.onrender.com/api/users/me`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(fields),
        }
      );

      if (res.status === 204) {
        setChangeSuccess("Settings successfully changed!");
        setTimeout(() => {
          window.location.reload();
        }, "1000");
        return;
      }

      if (!res.ok) {
        throw new Error((await res.text()) || "Update failed");
      }

      await res.json();
      window.location.reload();
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="mx-auto border border-zinc-300 mt-5 p-5 rounded-lg">
        <p className="mb-2">Personal Information</p>
        {/* Profile photo  */}
        <div className="md:grid md:grid-cols-[200px_minmax(900px,_1fr)] md:gap-0 lg:gap-5">
          <div className="md:w-50 h-full md:h-64 p-2 border border-zinc-300 rounded-lg flex flex-col justify-between items-center">
            <img
              src={profileImg}
              className="w-30 h-30 mt-10 rounded-full bg-black"
            />
            <button
              className="bg-zinc-800 text-white p-3 rounded-lg mt-5 hover:bg-zinc-500 duration-300"
              onClick={() => setChangePhotoBtn(true)}
            >
              Change Photo
            </button>
          </div>

          {/* Personal Info */}
          <form
            onSubmit={handleChangeProfile}
            className="mx-auto w-full flex flex-col gap-4 ml-2"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <label>
                First Name
                <input
                  name="firstName"
                  type="text"
                  defaultValue={meData.first_name}
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-48 lg:w-90"
                />
              </label>
              <label>
                Last Name
                <input
                  name="lastName"
                  type="text"
                  defaultValue={meData.last_name}
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-48 lg:w-90"
                />
              </label>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <label>
                Username
                <input
                  name="userName"
                  type="text"
                  defaultValue={meData.username}
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-48 lg:w-90"
                  disabled
                />
              </label>
              <label>
                Location
                <select
                  name="location"
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-48 lg:w-90"
                >
                  <option defaultValue={meData.location}>
                    {meData.location}
                  </option>
                  {states.map((state) => {
                    return (
                      <>
                        <option value={state.name}>{state.name}</option>
                      </>
                    );
                  })}
                </select>
              </label>
            </div>
            <label>
              <div className="flex items-center">
                Bio &nbsp; <FaLockOpen className="size-3" />
              </div>

              <input
                name="bio"
                type="text"
                defaultValue={meData.bio}
                className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:w-full md:w-100 lg:w-184"
                minLength={4}
                maxLength={60}
              />
            </label>
            {changeSuccess && <p>{changeSuccess}</p>}
            {error && <p>{error}</p>}
            <button
              type="submit"
              className="bg-zinc-800 text-white p-3 rounded-lg mt-2 hover:bg-zinc-500 duration-300 md:w-100"
            >
              Save Changes
            </button>
          </form>
        </div>
        {changePhotoBtn && (
          <>
            <div>
              <div
                id="photo-modal"
                className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg p-5 absolute top-150 inset-x-5 lg:inset-x-1/3"
              >
                <p className="text-center mb-2">Enter an img url</p>
                <p className="text-center mb-2 text-xs">
                  Save Changes after selecting 'set'
                </p>
                <input
                  className="w-full border border-zinc-300 p-2 rounded-md mb-2"
                  defaultValue={profileImg}
                  onChange={handleChangeImg}
                ></input>
                <div className="flex justify-center gap-3">
                  <button
                    className="w-32 p-3 bg-green-600 hover:bg-green-500 text-white rounded-md"
                    type="button"
                    onClick={() => setChangePhotoBtn(false)}
                  >
                    Set
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Settings;
