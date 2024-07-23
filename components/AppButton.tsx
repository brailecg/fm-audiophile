import Link from "next/link";
import clsx from "clsx";

const variantStyles = {
  primary: "bg-main-orange text-zinc-100 hover:bg-light-orange",
  secondary:
    "bg-white border border-black font-medium text-zinc-900 hover:bg-zinc-100  hover:bg-black hover:text-white",
  tertiary: "border-none hover:text-main-orange",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function AppButton({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    "inline-flex items-center gap-2 justify-center py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-semibold text-app-subtitle",
    variantStyles[variant],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
