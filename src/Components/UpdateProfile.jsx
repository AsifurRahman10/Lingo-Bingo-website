import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
  const { user, setUser, updateProfileNamePhoto, useLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateProfileNamePhoto(name, photo).then((res) => {
      setUser({
        ...user,
        displayName: name,
        photoURL: photo,
      });
      useLoading(false);
      return navigate("/myProfile");
    });
  };
  return (
    <div className="md:ml-10">
      <h1 className="text-3xl font-bold pt-10 md:pt-20">Update Profile</h1>
      <h2 className="mt-6 font-bold text-lg">Name : </h2>
      <form onSubmit={handleUpdateInfo}>
        <input
          name="name"
          type="text"
          placeholder="Enter the updated Name"
          className="input input-bordered w-full max-w-lg mt-4"
        />
        <p className="mt-3 font-bold text-lg">Photo Url</p>
        <input
          name="photo"
          type="text"
          placeholder="Enter the Photo Url"
          className="input input-bordered w-full max-w-lg mt-4"
        />
        <br />
        <button className="btn px-8 bg-lightBlue mt-6 border-none">
          Update Profile
        </button>
      </form>
    </div>
  );
};
