import React, { useEffect, useState } from "react";

type Props = {
  setFunc: React.Dispatch<React.SetStateAction<File | null>>;
};
const IconForm = (props: Props) => {
  const [icon, setIcon] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    if (icon) {
      const url = URL.createObjectURL(icon);
      setUrl(url);
      props.setFunc(icon);
    }
  }, [icon]);
  return (
    <>
      <input
        id="profile_image"
        className="hidden"
        type="file"
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            if (files[0]) {
              setIcon(files[0]);
            }
          }
        }}
      />
      {icon && url ? (
        <div className="relative">
          <img
            className="w-20 h-20 fill-base-300 rounded-full object-cover"
            src={url}
          />
          <label
            htmlFor="profile_image"
            className="w-20 h-20 bg-transparent rounded-full items-center justify-center z-20 absolute top-0"
          />
        </div>
      ) : (
        <label
          htmlFor="profile_image"
          className="flex w-20 h-20 bg-base-300 rounded-full items-center justify-center"
        >
          <img className="w-10 h-10 fill-base-300" src="/svg/camera.svg" />
        </label>
      )}
    </>
  );
};

export default IconForm;
