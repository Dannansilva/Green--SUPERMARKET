// Use this component to wrap all the content of the page

"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
            relative
            max-w-[1440px]
            mx-auto
            xl:mr-36
            xl:ml-36
            sm:mx-2
            px-5
            md:mx-16
        "
    >
      {children}
    </div>
  );
};

export default Container;
