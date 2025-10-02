import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

const ProfileCard = ({ meProfileData }) => {
  const [changePassword, setChangePassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [error, setError] = useState(null);

  const normalizeDate = (date) => {
    const dateChange = new Date(date);
    const year = dateChange.getFullYear();
    return year;
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    const newFormData = new FormData(event.currentTarget);
    const old_password = newFormData.get("oldPass");
    const new_password = newFormData.get("newPass");
    const fields = { old_password, new_password };
    const token = sessionStorage.getItem("token");
    try {
      const res = await fetch(
        `https://barterly-backend.onrender.com/api/users/me/password`,
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
        setPasswordSuccess("Password successfully changed!");
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
      <div
        className="mx-auto  md:w-2xl lg:w-6xl px-4 border rounded-lg mt-5 border-zinc-300 
                 gap-5 p-5 grid
                 md:flex md:flex-col lg:grid lg:grid-cols-[96px_minmax(0,1fr)_120px]"
      >
        <div
          className="profile-photo w-24 h-24 rounded-full bg-zinc-800 
                  overflow-hidden shrink-0 place-self-center md:place-self-start"
        >
          <img
            src={meProfileData.profile_image_url}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="user-details flex flex-col justify-center text-center md:text-left">
          <p className="text-lg font-semibold">{meProfileData.username}</p>
          <p className="text-xs items-center">{meProfileData.location}</p>
          <p className="text-zinc-600 mb-2 italic">
            Member Since {normalizeDate(meProfileData.created_at) || "Unknown"}
          </p>
          <p className="italic">{meProfileData.bio}</p>
        </div>
        <button
          className="bg-black text-white h-10 rounded-lg text-sm relative top-1 transition-colors duration-300 hover:bg-zinc-500"
          onClick={() => setChangePassword(true)}
        >
          <div className="flex items-center justify-center">
            Password &nbsp; <RiLockPasswordFill />
          </div>
        </button>
      </div>

      {changePassword && (
        <>
          <div
            id="offer-modal"
            className="mx-auto bg-white border border-zinc-300 shadow-xl rounded-lg fixed p-5 inset-x-5 lg:inset-x-1/3"
          >
            <p className="text-center mb-5">Change your password</p>
            <form
              onSubmit={handleChangePassword}
              className="flex flex-col justify-evenly"
            >
              <input
                name="oldPass"
                placeholder="old password"
                className="w-full border border-zinc-300 p-2 mb-2 rounded-md"
                type="password"
                maxLength={30}
              ></input>
              <input
                name="newPass"
                placeholder="new password"
                className="w-full border border-zinc-300 p-2 mb-2 rounded-md"
                type="password"
                minLength={8}
                maxLength={30}
              ></input>
              {error && <p className="text-center">{error}</p>}
              {passwordSuccess && (
                <p className="text-center">{passwordSuccess}</p>
              )}
              <div className="flex justify-center gap-5 mt-2 mb-2">
                <button
                  className="w-32 p-3 bg-green-600 hover:bg-green-500 text-white rounded-md"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="w-32 p-3 bg-zinc-800 hover:bg-zinc-500 text-white rounded-md"
                  type="button"
                  onClick={() => setChangePassword(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileCard;
