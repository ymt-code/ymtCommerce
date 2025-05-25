import type React from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className = "" }: IContainer) => {
  return (
    <div className={`max-w-[1200px] mx-auto py-8 ${className}`}>{children}</div>
  );
};

export default Container;
