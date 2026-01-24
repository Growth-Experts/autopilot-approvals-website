import { cn } from "@/lib/utils";

interface FramedImagePlaceholderProps {
  className?: string;
  aspectRatio?: string; // e.g. "aspect-video"
  label?: string;
  withBrowserFrame?: boolean;
}

export function FramedImagePlaceholder({ 
  className, 
  aspectRatio = "aspect-video", 
  label = "Product Screenshot",
  withBrowserFrame = true 
}: FramedImagePlaceholderProps) {
  return (
    <div className={cn("relative w-full rounded-xl overflow-hidden shadow-xl bg-white border border-gray-200", className)}>
      {withBrowserFrame && (
        <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          <div className="ml-4 h-4 w-1/2 bg-gray-200/50 rounded-full"></div>
        </div>
      )}
      <div className={cn("w-full bg-gray-50 flex items-center justify-center relative group overflow-hidden", aspectRatio)}>
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Animated sheen effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%] transform" style={{ transition: 'transform 1.5s ease-in-out' }}></div>
        
        <div className="text-center p-6 z-10">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-gray-400 font-medium text-sm block uppercase tracking-wider">{label}</span>
          <span className="text-gray-300 text-xs mt-1 block">Image Placeholder</span>
        </div>
      </div>
    </div>
  );
}
