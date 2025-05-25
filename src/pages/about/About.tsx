import React from "react";
import Container from "../../components/Container";
import aboutIMG from "../../assets/images/pexels-maxfrancis-2246476.jpg";
import WhyUs from "../../components/WhyUs";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* هدر تصویری با متن روی عکس */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={aboutIMG}
          alt="About us"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold backdrop-blur-sm px-6 py-2 rounded-xl shadow-xl">
            درباره ما
          </h1>
        </div>
      </div>

      {/* متن درباره ما */}
      <Container>
        <div className="mt-12 max-w-4xl bg-white rounded-2xl p-6 md:p-10 text-justify leading-8 text-lg md:text-xl tracking-wide mx-3 md:mx-auto ">
          <p className="mb-6 text-gray-700">
            فروشگاه ما با یک هدف ساده اما مهم شکل گرفت: ایجاد یک تجربه‌ی خرید
            آنلاین مطمئن، راحت و مقرون‌به‌صرفه برای همه. ما معتقدیم که خرید
            اینترنتی نباید فقط یک انتخاب باشه، بلکه باید تبدیل به یه تجربه
            لذت‌بخش و بدون دردسر بشه.
          </p>
          <p className="mb-6 text-gray-700">
            اینجا فقط یک فروشگاه نیست، اینجا یه مجموعه‌ست از آدم‌های باانگیزه که
            با عشق به کیفیت، مشتری‌مداری و نوآوری، دور هم جمع شدن تا فروشگاه ما
            رو به یکی از قابل‌اعتمادترین منابع خرید آنلاین تبدیل کنن.
          </p>
          <p className="mb-6 text-gray-700">
            ما به‌جای انبار کردن کالاهای بی‌کیفیت، با فروشندگان معتبر همکاری
            می‌کنیم تا مطمئن بشیم چیزی که به دستت می‌رسه، همون چیزیه که لایقشی.
            شفافیت، پاسخ‌گویی، و پشتیبانی همیشگی، بخش جدایی‌ناپذیر از فرهنگ کاری
            ماست.
          </p>
        </div>
      </Container>

      {/* چرا ما؟ */}
      <WhyUs />

      {/* سیستم همکاری در فروش */}
      <Container>
        <div className="mt-12 max-w-4xl bg-white rounded-2xl  p-6 md:p-10 text-justify leading-8 text-lg md:text-xl tracking-wide mx-3 md:mx-auto  ">
          <p className="mb-6 text-gray-700">
            علاوه بر فروش مستقیم، ما یک سیستم حرفه‌ای{" "}
            <span className="text-blue-600 font-semibold">
              همکاری در فروش (Affiliate Marketing)
            </span>{" "}
            هم راه‌اندازی کردیم. این یعنی اگه علاقه‌مند به کسب درآمد از طریق
            معرفی محصولات ما هستی، فقط کافیه توی سیستم همکاری در فروش ثبت‌نام
            کنی و لینک اختصاصی خودت رو دریافت کنی.
          </p>
          <p className="mb-6 text-gray-700">
            با هر خریدی که از طریق لینک تو انجام بشه، پورسانت دریافت می‌کنی.
            بدون نیاز به سرمایه اولیه، بدون ریسک؛ فقط با قدرت تبلیغات و
            شبکه‌سازی.
          </p>
          <p className="font-bold text-right text-xl text-green-700">
            ما هنوز در ابتدای راهیم، ولی مصمم و متعهد. و چیزی که همیشه پشت ماست،
            اعتماد و همراهی شماست. 🌱
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
