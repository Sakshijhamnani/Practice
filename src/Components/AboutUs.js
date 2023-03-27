import React from 'react'
import Styles from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <hr className={Styles.HorizontalLine} width="300px"/>
      <div className={Styles.display}>
      <img className={Styles.myImage} src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=is&k=20&c=tw9TuTigzhSlLA_b1Avy0X6GNF9ZFVvgTHIZ9i68Q0I="height="230px" width="230px" alt="" />
      <div>
      <h3 className={Styles.AboutMyself}>Sakshi Jhamnani</h3><br/>
      <p className={Styles.para}>Hey! , My name is Sakshi Jhamnani . Currently I am pursuing MCA from Gyan Ganga College of Tecnology , before
        that I have completed B.Sc. specialization in Computer Science .Now comming to my technical skills I know HTML,CSS ,javascript and basics of React Js .My hobbies are 
        I love to play badminton and watching Cricket and 
        my strengths are I am hardworking and a team player .My extra ciricullar activity is I used to be part of volley team in school 
        and graduation tenure.  </p>

      </div>
      </div>
      <div className={Styles.extra}>
        <div className={Styles.skills}>
            <h3>Skills</h3>
            <p>My skills are I know HTML , CSS , javascript and basics of react</p>

        </div>
        <div className={Styles.hobbies}>
            <h3>Hobbies</h3>
            <p>My hobbies are I love to play badminton and watching cricket</p>

        </div>
        <div className={Styles.learning}>
            <h3>Learning about React</h3>
            currently I am learning about routing in React. 
            Routing is the process of moving from one page to another

        </div>
      </div>
    </div>
  )
}
