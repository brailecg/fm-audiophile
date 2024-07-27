import { cn } from "../lib/utils";

export const Container = ({
  classNameInner,
  className,
  children,
  ...props
}: {
  classNameInner?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  className = className === undefined ? "" : className;
  classNameInner = classNameInner === undefined ? "" : classNameInner;

  return (
    <div className={cn("px-4 sm:px-8 lg:px-12", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl lg:px-8", classNameInner)}>
        {children}
      </div>
    </div>
  );
};
