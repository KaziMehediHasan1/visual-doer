"use client";
import axios from "axios";
import { toast } from "sonner";
type ReactHook = (state: boolean) => void;

const deleteData = async ({
  url,
  setLoader,
}: {
  url: string;
  setLoader: ReactHook;
}): Promise<{ error?: unknown }> => {
  setLoader(true);
  try {
    const res = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success(res?.data?.message);

    return res.data;
  } catch (error) {
    setLoader(false);
    return { error };
  } finally {
    setLoader(false);
  }
};

export default deleteData;
