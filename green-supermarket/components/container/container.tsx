// Use this component to wrap all the content of the page

'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div 
        className="
            relative
            max-w-[1400px]
            mx-auto
            xl:mx-20
            md:mx-16
            sm:px-2
            px-5
            lg:mx-24
            sm:mx-2
        ">
            {children}
        </div>
    );
}

export default Container;