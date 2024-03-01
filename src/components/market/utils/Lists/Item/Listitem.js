import React from 'react'
import './listitem.css'

import {
  Button,
  Chip,
  
} from "@material-tailwind/react";

import {
StarIcon,

} from "@heroicons/react/24/solid";
import {
BookOpenIcon,
MapPinIcon,
PhoneIcon,
} from "@heroicons/react/24/outline";

const Listitem = ({
    item: { coverSrc, title, price, deliveryFee, serviceTime, rating,type_of_lsp,cuisine, coverSrc1,name,lang,exp,location,district,phone,skills },
  }) => {

     // Split the skills string into an array of individual skills
  const skillsArray = skills.split(',').map(skill => skill.trim());
  // Count the number of skills
  const numSkills = skillsArray.length;
  console.log(numSkills)

  return (
    
      

  <div className='listItem-wrap card_f'>

    <div className='flex'>

    <div className='image_div'>
      <div className='image_con'>
        <img   src={coverSrc1} alt='' />
      </div>
      <span className='flex text-center justify-center'> {rating}&nbsp; <StarIcon className=" w-[11px] stroke-yellow-500 fill-yellow-500" /> </span>
    </div>

    <div className='card_con'>
      <h4>{name}</h4>
      <h5> Service Expert : {type_of_lsp}</h5>
      <h5> Language : {lang} </h5>

      <hr className='my-2'></hr>

      <h3 className='elc'> <BookOpenIcon className="ttt"/> &nbsp;: &nbsp;{exp} Years Of Expertise</h3>
      <h3 className='elc'> <MapPinIcon className="ttt"/> &nbsp;: &nbsp;{location} ({district})</h3>
      
      <h3 className='elc'> <PhoneIcon className="ttt"/> &nbsp;:&nbsp; {phone}</h3>
    </div>

    </div>

    <hr className='my-2 mx-2'></hr>


      <h3 className='skill '> Practice Fields and Skills ({numSkills})</h3>
    <div className='flex overflow-x-auto gap-2 pskils py-2'>

    {skillsArray.map((skill, index) => (
          <Chip key={index} variant="outlined" value={skill} />
        ))}

    </div>
     
     <div className='card_bott'>
      <hr className='my-2 mx-2'></hr>
     <Button variant="gradient" fullWidth>
          Connect
        </Button>
     </div>

  </div>



  )
}

export default Listitem