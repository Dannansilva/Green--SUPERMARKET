import React from 'react';
import FirstPart from "../../../components/about us/firstpart";
import Secondpart from '@/components/about us/secondpart';
import ThirdPart from '@/components/about us/thirdpart';
import Container from '@/components/container/container';

const Page = () => {
  return (
    <div>
      <Container>
      <FirstPart />
      {/* <Secondpart /> */}
      <ThirdPart/> 
      </Container>
    </div>
  );
}

export default Page;
