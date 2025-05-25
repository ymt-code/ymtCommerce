import { NavLink } from "react-router-dom";

interface ICustomNavLink {
  children: React.ReactNode;
  to: string;
}

const CustomNavLink = ({ to, children }: ICustomNavLink) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "bg-green-600 text-white px-3 py-1 rounded"
          : "text-gray-800 hover:text-green-600 px-3 py-1"
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
