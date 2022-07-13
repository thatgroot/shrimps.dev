type Props = {
  children: React.ReactNode | React.ReactNodeArray | undefined;
  className?: string;
};

function Sticky({ className, children }: Props) {
  return <div className={`${className}  md:sticky top-[96px]`}>{children}</div>;
}

export default Sticky;
