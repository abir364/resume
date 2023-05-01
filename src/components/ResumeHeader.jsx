import React from 'react';

const ResumeHeader = () => {
  return (
    <div className="w-3/5 drop-shadow-lg flex justify-between items-center bg-white py-4">
      <div className="pl-10">
        <img
          src="src\assets\abir.jpg"
          alt="profile picture"
          className="h-40 w-36 border-4 drop-shadow-sm rounded-md"
        />
      </div>
      <div className="flex-1 text-center flex flex-col justify-center items-center">
        <div className="text-3xl font-medium">Abir Hossain</div>
        <div className="flex">
          <div className="p-2">abirh364@gmail.com</div>
          <div className="p-2">01989052862</div>
          <div className="p-2">
            House-30, Road-28(old), 15(new), Dhanmondi, Dhaka
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
