import React from 'react'
import { InfoSection ,MediaCard } from '../../components';
import {homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour
} from './Data';





const Home = () => {

    return (
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjTwo} />
        <MediaCard  />
      
        <InfoSection {...homeObjFour}/>
        </>

    )
}
export default Home;



