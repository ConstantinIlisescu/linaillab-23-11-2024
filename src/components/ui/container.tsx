interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`mx-auto w-full p-4 ${className}`}>{children}</div>;
};

export default Container;
