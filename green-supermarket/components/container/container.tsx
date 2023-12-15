// Use this component to wrap all the content of the page

"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
            sm:mx-2
            md:mx-16
            lg:mx-24
            xl:mx-36  
            items-center        
        "
    >
      {children}
    </div>
  );
};

export default Container;
