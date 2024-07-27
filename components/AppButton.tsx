import Link from "next/link";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary:
    "inline-flex items-center gap-2 justify-center py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-semibold text-app-subtitle bg-main-orange text-zinc-100 hover:bg-light-orange",
  secondary:
    "inline-flex items-center gap-2 justify-center py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-semibold text-app-subtitle bg-white border border-black font-medium text-zinc-900 hover:bg-zinc-100  hover:bg-black hover:text-white",
  tertiary: "border-none hover:text-main-orange",
  default: "",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function AppButton({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  className = cn(variantStyles[variant], className);

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
