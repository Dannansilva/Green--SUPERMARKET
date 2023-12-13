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
            xl:px-18
            md:px-8
            sm:px-2
            px-5
        ">
            {children}
        </div>
    );
}

export default Container;