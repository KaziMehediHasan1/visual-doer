import axios from "axios";

const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "my_visual_doer");
  // console.log(file, formData, "cloudinary page");
  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dtq24zm2t/image/upload",
    formData
  );
  
  return res?.data?.secure_url;
};

export default uploadToCloudinary;
