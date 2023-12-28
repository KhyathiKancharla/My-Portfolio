import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
   <section className='text-white'> <div className='md:grid md:grid-cols2 gap-3 items-center py-8 px-4  xl:gap-16 sm:py-16 sm:px-12 text-center font-extrabold text-3xl sm:text-3xl' style={{fontFamily:"serif",  }}>About Me</div>
   <div><p className='text-base lg:text-lg text-[#ADB7BE] hover:text-white pl-64' style={{textAlign:'match-parent'}}>
              I am Khyathi Kancharla studying in KL University. i am in my third year on CSE(Honors).I am skilled in WordPress,HTML,CSS,JavaScript ,React Native,Bootstrap and Agile practices. As a technology enthusiastic person, I would love to learn and explore new technologies and a quick learner. Finally, I am a team player and willing to work and ensure I put my fullest efforts in the work I do.
             
           </p>
          
           </div>
           <div className="rounded-full bg-[#000000] w-[200px] h-[200px] lg:w-[330px] lg:h-[530px]  relative">
             <Image
              src="/images/avatar-transparentbg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/13 -translate-y-1/2 top-9 left-1/5"
              width={300}
              height={300}
              style={{borderRadius:'20%'}}
            />
            <div className="rounded-full bg-[#ffffff] w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] relative">
            <a href="https://www.linkedin.com/in/khyathikancharla/">
            <Image
              src="/images/linkedintransparent.png"
              alt="linkedin logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
            />
            </a>
            </div>
            <a href="https://github.com/KhyathiKancharla">
            <div className="rounded-full bg-[#ffffff] w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] relative">
            <Image
              src="/images/github.png"
              alt="Github logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
            />
           
          </div>
          </a>
          <a href="https://code.swecha.org/K.Khyathi">
          <div className="rounded-full bg-[#7e7e7e] w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] relative">
            <Image
              src="/images/swecha_white.png"
              alt="code.swecha"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={90}
              height={100}
            />
          </div>
          </a>
    
          </div>
         
          </section> 
   
  )
}

export default About