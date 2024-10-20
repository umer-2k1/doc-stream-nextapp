import { forwardRef, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";

type AlignItems = "center" | "start" | "end" | "stretch" | "baseline";

type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

type Direction = "row" | "column";

interface FlexProps {
  className?: string;
  children?: ReactNode;
  align?: AlignItems;
  justify?: JustifyContent;
  direction?: Direction;
  ref?: Ref<HTMLDivElement>;
}

const mapJustifyContent = (justify: JustifyContent) => {
  switch (justify) {
    case "flex-start":
      return "justify-start";
    case "center":
      return "justify-center";
    case "flex-end":
      return "justify-end";
    case "space-between":
      return "justify-between";
    case "space-around":
      return "justify-around";
    case "space-evenly":
      return "justify-evenly";
    default:
      return "justify-start";
  }
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      align = "start",
      justify = "flex-start",
      direction = "row",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          `flex ${direction === "column" ? "flex-col" : ""} items-${align} gap-2`,
          mapJustifyContent(justify),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export { Flex };
