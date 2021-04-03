import React, {useState, useRef, useEffect} from 'react'

import './SCSS/About.scss'

function About() {
  const [scroll, setScroll] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const aboutRef = useRef()
  const textRef = useRef()


  useEffect(() => {
    console.log(aboutRef.current.scrollHeight - aboutRef.current.clientHeight === scrollPosition)
    setScroll(aboutRef.current.scrollHeight - aboutRef.current.clientHeight === scrollPosition)
  }, [scrollPosition])

  return (
    <div className='about'>
      <section ref={aboutRef} className='about-box' onScroll={() => setScrollPosition(aboutRef.current.scrollTop)}>

        <div ref={textRef} className='about-text'>
          As a web developer, you're probably like us and constantly need ideas for design. You've 
          no doubt spent hours and hours coming up with a design theme for your buttons, input fields and other 
          elements, only to be discouraged when it doesn't look quite like you wanted. Well....that's what Git React 
          Comps is here for! We have tons of categories to choose from, with many styles within each category 
          so you can eliminate time spent on designing, and spend more time actually implementing styles!
          And, with our wide base of users, our database of styles is constantly growing, so you always have new 
          options to choose from!
        </div>
        { 
         !scroll &&
        <div className='scroll-arrow'>
          <p>scroll</p>
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
        }
      </section>
    </div>
  )
}

export default About
