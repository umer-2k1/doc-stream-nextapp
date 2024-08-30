import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type FlexProps = ComponentPropsWithoutRef<"div">;

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex gap-2", className)} {...props} />;
  }
);

export { Flex };
