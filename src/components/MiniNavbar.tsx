import { Handshake, House, Instagram, PhoneCall, Send } from "lucide-react";
import { Link } from "react-router-dom";

const MiniNavbar = () => {
  return (
    <div className="bg-green-600 flex justify-between px-4 py-2">
      <div className="flex gap-6">
        <Link to="/">
          <div className="flex items-center justify-center text-white gap-2">
            <House width={18} />
            <span className="yekan">خانه</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="flex items-center justify-center text-white gap-2">
            <Handshake width={18} />
            <span className="yekan">همکاری</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-3 text-white">
        <PhoneCall width={18} />
        <Send width={18} />
        <Instagram width={18} />
      </div>
    </div>
  );
};

export default MiniNavbar;
