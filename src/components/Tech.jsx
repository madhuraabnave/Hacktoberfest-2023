import React from 'react'


import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
        <h3 className='text-white text-[20px] font-bold text-center'></h3>
          {technology.name}
          
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
  </div>
  )
}

export default SectionWrapper(Tech, "");