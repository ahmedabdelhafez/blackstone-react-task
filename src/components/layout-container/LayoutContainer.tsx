import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutContainer = ({ children }: Props) => {
  return (
    <main className="relative w-full p-0 m-0 bg-gray-200">{children}</main>
  );
};

export default LayoutContainer;
