import React from "react";

export default function TestimonialGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 border-l border-t border-neutral-800 laptop:grid-cols-2">
      {children}
    </div>
  );
}
