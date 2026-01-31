import { ChevronDown } from "lucide-react";

export const HintsSeparator = () => {
  return (
    <div className="mt-6 md:mt-8 manga-panel border-[3px] py-3 px-4">
      <div className="flex items-center justify-center gap-3">
        <ChevronDown className="w-5 h-5 animate-bounce-arrow" />
        <span className="font-display text-sm md:text-base tracking-wider">
          HINTS BELOW
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce-arrow" />
      </div>
    </div>
  );
};
