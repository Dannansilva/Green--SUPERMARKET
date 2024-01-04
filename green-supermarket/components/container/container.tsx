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
            sm:mx-4
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
