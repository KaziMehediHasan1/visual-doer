"use client";
import axios from "axios";
import { toast } from "sonner";

type ReactHook = (state: boolean) => void;

const uploadFormData = async <T,>({
  data,
  url,
  setLoader,
}: {
  data: T;
  url: string;
  setLoader: ReactHook;
}): Promise<{ error?: unknown }> => {
  setLoader(true);
  try {
    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data, "database upload");
    if (res.data && res.data.success && res.data.status == 201) {
      toast(res.data.message);
    }
    return res.data;
  } catch (error) {
    console.error("Upload failed:", error);
    setLoader(false);
    return { error };
  } finally {
    setLoader(false);
  }
};

export default uploadFormData;
