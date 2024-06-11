import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: string;
};

export function Button({ children, color }: Props) {
  return (
    <button style={{ background: color, padding: "2em" }}>{children}</button>
  );
}
