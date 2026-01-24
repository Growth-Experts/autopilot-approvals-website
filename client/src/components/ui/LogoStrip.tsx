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
    <section className="py-20 bg-white border-b border-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">Trusted by teams who value control, clarity, and compliance</h3>
        
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
    </section>
  );
}
