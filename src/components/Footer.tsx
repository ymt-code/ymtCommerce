import { Instagram, PhoneCall, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-100 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right">
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">درباره ما</h4>
          <p className="text-sm leading-relaxed">
            ما اینجاییم تا خرید و فروش گوشی و لوازم دیجیتال رو ساده‌تر و
            مطمئن‌تر کنیم. با پشتیبانی حرفه‌ای و قیمت‌های رقابتی در خدمت شماییم.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4 text-white">دسترسی سریع</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-300 transition">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition">
                محصولات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition">
                ارتباط باما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition">
                مقالات
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4 text-white">ارتباط با ما</h4>
          <p className="text-sm">📞 ۰۹۱۲۱۲۳۴۵۶۷</p>
          <p className="text-sm">✉️ info@example.com</p>
          <div className="flex justify-center md:justify-end gap-4 mt-4">
            <a href="#">
              <Send width={18} />
            </a>
            <a href="#">
              <Instagram width={18} />
            </a>
            <a href="#">
              <PhoneCall width={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-green-200 border-t border-green-600 pt-5">
        © {new Date().getFullYear()} تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
