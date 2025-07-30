"use client";
import axios from "axios";
type ReactHook = (state: boolean) => void;

const getData = async ({
  url,
  setLoader,
}: {
  url: string;
  setLoader: ReactHook;
}): Promise<{ error?: unknown }> => {
  setLoader(true);
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    setLoader(false);
    return { error };
  } finally {
    setLoader(false);
  }
};

export default getData;
