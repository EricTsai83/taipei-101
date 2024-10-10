import { cn } from "@/lib/utils";
type Props = {
  className?: string;
};

export default function Taipei101({ className }: Props) {
  return (
    <div className={cn("flex", className)}>
      {/* 左邊牆壁 */}
      <div>
        {/* 頂部 */}
        <div className="relative bottom-[-10px] ml-[70px] h-[65px] w-[10px] bg-[#383939]" />
        {/* 中間層 */}
        <div className="relative bottom-[-10px] ml-[55px] h-[40px] w-[25px] bg-[#7bb0be] before:absolute before:left-[0px] before:h-[5px] before:w-[25px] before:bg-white before:content-['']" />
        {/* 中間層2 */}
        <div className="relative bottom-[-10px] ml-[50px] h-[60px] w-[30px] bg-[#7bb0be] before:absolute before:left-[0px] before:h-[5px] before:w-[30px] before:bg-white before:content-['']" />
        {/* 上層底部 */}
        <div className="relative left-[24px] w-[56px] skew-y-[-5deg] transform border-b-[40px] border-l-[5px] border-b-[#7bb0be] border-l-transparent" />
        {/* 身體層 */}

        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="relative w-[80px] skew-y-[-3deg] transform border-l-[10px] border-t-[60px] border-l-transparent border-t-[#7bb0be] before:absolute before:left-[0px] before:h-[5px] before:w-[82px] before:translate-x-[-11px] before:translate-y-[-60px] before:transform before:rounded-full before:bg-white"
          />
        ))}

        {/* 底層 */}
        <div
          className={cn(
            "relative h-0 w-[80px] skew-y-[-1.5deg] transform border-b-[120px] border-l-[10px] border-b-[#7bb0be] border-l-transparent",
            "before:absolute before:left-[25px] before:h-[5px] before:w-[70px] before:translate-x-[-25px] before:translate-y-[-1px] before:transform before:bg-white",
            "after:absolute after:left-[5px] after:top-[-25px] after:h-[50px] after:w-[50px] after:skew-y-[-1.5deg] after:transform after:rounded-full after:bg-white after:shadow-[2px_2px_10px_rgba(0,0,0,0.7)]",
          )}
        />
      </div>
      {/* 中間線 */}
      <div className="h-full w-[0.3px]" />

      {/* 右邊牆壁 */}
      <div>
        {/* 頂部 */}
        <div className="relative bottom-[-10px] h-[65px] w-[10px] bg-[#383939]" />
        {/* 中間層 */}
        <div className="relative bottom-[-10px] h-[40px] w-[25px] bg-[#285879] before:absolute before:left-[0px] before:h-[5px] before:w-[25px] before:bg-white before:content-['']" />
        {/* 中間層2 */}
        <div className="relative bottom-[-10px] h-[60px] w-[30px] bg-[#285879] before:absolute before:left-[0px] before:h-[5px] before:w-[30px] before:bg-white before:content-['']" />
        {/* 上層底部 */}
        <div className="relative left-[0px] w-[56px] skew-y-[5deg] transform border-b-[40px] border-r-[5px] border-b-[#285879] border-r-transparent" />
        {/* 身體層 */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="relative w-[80px] skew-y-[3deg] transform border-r-[10px] border-t-[60px] border-r-transparent border-t-[#285879] before:absolute before:left-[0px] before:h-[5px] before:w-[82px] before:translate-x-[-1.5px] before:translate-y-[-60px] before:transform before:rounded-full before:bg-white before:content-['']"
          />
        ))}
        {/* 底層 */}
        <div
          className={cn(
            "relative h-0 w-[80px] skew-y-[1.5deg] transform border-b-[120px] border-r-[10px] border-b-[#285879] border-r-transparent",
            "before:absolute before:left-[25px] before:h-[5px] before:w-[70px] before:translate-x-[-25px] before:translate-y-[-1px] before:transform before:bg-white",
            "after:absolute after:left-[13px] after:top-[-25px] after:h-[50px] after:w-[50px] after:skew-y-[1.5deg] after:transform after:rounded-full after:bg-white after:shadow-[-2px_2px_10px_rgba(0,0,0,0.7)]",
          )}
        />
      </div>
    </div>
  );
}
