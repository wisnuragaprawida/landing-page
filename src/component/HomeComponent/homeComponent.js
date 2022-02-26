
import React, { useState } from 'react';
import Jumbotron from './SectionJumbotron/jumbotronComponent';
import SectionCard from './SectionCard/sectionCardComponent';
import SectionValue1 from './SrctionValue1/sectionValue1Component';
import SectionValue2 from './SrctionValue2/sectionValue2Component';

function Home() {

    return (
      <div>
       <Jumbotron />
        <SectionCard />
            <SectionValue1 />
            <SectionValue2 />
    
    

    </div>
  );
}
export default Home;

