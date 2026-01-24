import { cn } from "@/lib/utils";

interface FramedImagePlaceholderProps {
  className?: string;
  label?: string;
  imageSrc?: string;
}

export function FramedImagePlaceholder({ className, label, imageSrc }: FramedImagePlaceholderProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-2xl", className)}>
      {/* Browser chrome */}
      <div className="h-8 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/20" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/20" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/20" />
      </div>
      
      {/* Content Area */}
      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-8">
        {imageSrc ? (
            <img src={imageSrc} alt={label || "Screenshot"} className="w-full h-full object-contain rounded-md" />
        ) : (
            <div className="text-center text-muted-foreground/30">
            <div className="h-24 w-24 mx-auto border-2 border-dashed border-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-xs font-mono">IMG</span>
            </div>
            <p className="text-sm font-medium">{label || "Interface Preview"}</p>
            </div>
        )}
      </div>
      
      {/* Reflection shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
