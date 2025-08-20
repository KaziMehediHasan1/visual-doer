import React, { ReactNode } from "react";

const CommonWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1200px] mx-auto w-[calc(100%-2rem)] overflow-x-hidden">
      {children}
    </div>
  );
};

export default CommonWrapper;
