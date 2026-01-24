import { cn } from "@/lib/utils";

const LOGOS = [
  { name: "3Way Marketing", src: null, fallback: "3Way" }, // Placeholder as logo wasn't provided for 3Way but is in screenshot
  { name: "SA Canegrowers", src: "/sa-canegrowers.png" },
  { name: "Bidvest", src: "/bidvest.png" },
  { name: "CBF", src: null, fallback: "cbf" }, // Placeholder for CBF
  { name: "Metrofile", src: "/metrofile.png" },
  { name: "Syntech", src: "/syntech.png" },
  { name: "NoLogo Studios", src: null, fallback: "/// nologo studios" }, // Placeholder
  { name: "Tongaat Hulett", src: "/tongaat.png" }
];

export function LogoStrip() {
  return (
    <section className="py-20 bg-white border-b border-gray-50/50">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
          Trusted by teams who care about first impressions
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 items-center justify-items-center">
          {LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center w-full max-w-[160px] h-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              {logo.src ? (
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-12 w-auto object-contain"
                />
              ) : (
                <span className={cn(
                  "text-lg font-bold text-gray-500",
                  logo.fallback === "3Way" && "text-yellow-500 font-extrabold flex gap-1",
                  logo.fallback === "cbf" && "text-teal-600 font-light",
                  logo.fallback === "/// nologo studios" && "text-gray-400 font-mono text-xs tracking-widest"
                )}>
                    {logo.fallback === "3Way" && <span className="text-yellow-400">///</span>}
                    {logo.fallback}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
