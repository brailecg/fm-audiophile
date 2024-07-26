import clsx from "clsx";

export const Container = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx("px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl lg:px-8">{children}</div>
    </div>
  );
};
