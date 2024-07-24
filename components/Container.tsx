import clsx from "clsx";

export const ContainerOuter = ({
  className,
  children,
  ...props
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx("sm:px-8 ", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8 ">{children}</div>
    </div>
  );
};

export const ContainerInner = ({
  className,
  children,
  ...props
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx("relative px-4 sm:px-8 lg:px-12 ")} {...props}>
      <div className={clsx("mx-auto max-w-2xl lg:max-w-5xl ", className)}>
        {children}
      </div>
    </div>
  );
};

export const Container = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <ContainerOuter className={className} {...props}>
      <ContainerInner className={className}>{children}</ContainerInner>
    </ContainerOuter>
  );
};
