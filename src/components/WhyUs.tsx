import { Activity, Users, Coffee } from "lucide-react";
import Container from "./Container";
import articleIMG from "../assets/images/art.jpg";

const WhyUs = () => {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-b from-white via-green-50 to-white py-20"
      style={{
        backgroundImage: `url(${articleIMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white/90 w-full h-full py-20">
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-16 yekan">
            چرا ما؟
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center px-4">
            {[
              {
                icon: <Activity size={48} className="text-green-600" />,
                title: "پویایی و نوآوری",
                desc: "همیشه به دنبال جدیدترین فناوری‌ها و ارائه خدمات بروز هستیم.",
              },
              {
                icon: <Users size={48} className="text-green-600" />,
                title: "تیم حرفه‌ای",
                desc: "یک تیم متخصص و متعهد که به کیفیت و رضایت شما اهمیت می‌دهد.",
              },
              {
                icon: <Coffee size={48} className="text-green-600" />,
                title: "عشق به کار",
                desc: "علاقه و انگیزه ما برای ارائه بهترین تجربه خرید برای شماست.",
              },
            ].map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="w-full max-w-sm text-center p-8 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto mt-16 text-center text-gray-700 text-lg tracking-wide leading-relaxed px-4">
            پرشیان موبایل همراه شماست تا دنیای تکنولوژی را آسان‌تر و لذت‌بخش‌تر
            تجربه کنید. ما معتقدیم خرید باید ساده، مطمئن و پر از انرژی مثبت
            باشد.
          </p>
        </Container>
      </div>
    </section>
  );
};

export default WhyUs;
