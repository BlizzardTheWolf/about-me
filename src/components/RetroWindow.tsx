import { ReactNode } from "react";

interface RetroWindowProps {
  title: string;
  children: ReactNode;
}

const RetroWindow = ({ title, children }: RetroWindowProps) => {
  return (
    <div className="w-full max-w-[600px] bg-card border-2 border-window-border window-shadow">
      {/* Title Bar */}
      <div className="flex items-center justify-between bg-window-title border-b-2 border-window-border px-3 py-1.5">
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">⚙</span>
          <span className="font-retro text-lg text-foreground">{title}</span>
        </div>
        <div className="flex gap-1.5">
          <button className="w-5 h-5 bg-window-btn-min border border-window-border text-xs font-bold leading-none flex items-center justify-center text-foreground">─</button>
          <button className="w-5 h-5 bg-window-btn-info border border-window-border text-xs font-bold leading-none flex items-center justify-center text-primary-foreground">i</button>
          <button className="w-5 h-5 bg-window-btn-close border border-window-border text-xs font-bold leading-none flex items-center justify-center text-primary-foreground">✕</button>
        </div>
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
};

export default RetroWindow;
