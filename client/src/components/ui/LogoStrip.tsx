import { cn } from "@/lib/utils";

const LOGOS = [
  { name: "Talksure", src: "/talksure.png" },
  { name: "SA Canegrowers", src: "/sa-canegrowers.png" },
  { name: "Bidvest", src: "/bidvest.png" },
  { name: "LAWD", src: "/lawd.png" },
  { name: "Metrofile", src: "/metrofile.png" },
  { name: "Syntech", src: "/syntech.png" },
  { name: "YMCA", src: "/ymca.png" },
  { name: "Tongaat Hulett", src: "/tongaat.png" }
];

export function LogoStrip() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Trusted by teams who value control, clarity, and compliance</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 items-center justify-items-center">
            {LOGOS.map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-full max-w-[160px] h-16">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
