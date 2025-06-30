import React, { ReactNode } from "react";

const CommonWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-[1200px]">{children}</div>;
};

export default CommonWrapper;
