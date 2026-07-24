import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  fullWidth = false,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 md:py-28 lg:py-32 overflow-hidden", className)}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}