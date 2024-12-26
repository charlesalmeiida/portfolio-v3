import { PropsWithChildren } from "react";

export function Container({children}: PropsWithChildren) {
  return <div className="w-full px-4 max-w-[1248px] mx-auto">{children}</div>
}
