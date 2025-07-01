import React, { ReactNode } from "react";

const CommonWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1280px] mx-auto px-4">{children}</div>;
};

export default CommonWrapper;
