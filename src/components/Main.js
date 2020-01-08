import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import north from '../images/north.jpeg'
import profile from '../images/profile.jpeg'
import model from '../images/model.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={profile} alt="" />
          </span>
          <p>
            Hello! I am Kerry Wu. I am a senior studying Data Science at the University of Michigan. Originally from Washingtion State, <i>Go Hawks</i>, but moved half way across the country in order to attend of the <b>best university in the world</b>.
          </p>
          <p>
            I enjoy watching and <i>very poorly</i> playing football. I also enjoy losing money to my friends when we play fantasy football every year. Other hobbies include cooking, hiking and watching historical documentaries. I am also an avid gamer, currently playing Call of Duty: Modern Warfare, Red Dead Redemption 2 and Overwatch. I am also a flex support player on the University of Michigan Overwatch team, where we compete weekely in Tespa, a collegiate esports tournament.
          </p>
          <p>
            While my engineering degree in an EECS field would suggest that I am an awkard, anti-social hermit that lives in a completely blacked out room, that couldn't be further from the truth. I am a very sociable person with a great sense of humor, <i>however my mom says I talk too much</i>. You would find me making friends with complete strangers standing in line for $50 TVs on Black Friday, when everyone else is trampling over each other to be the first in line at Walmart. I had the incredible opportunty to take two internships overseas, one in Singapore and another in Germany, countries I had never been to, but was very quickly able to assimilate into the work and social cultures in these places and made friends that will hopefully last for a lifetime.
          </p>
          <p>
            When it comes to my technical skills, I have had extensive experience in both <b>Python</b> and <b>C++</b>. I have also worked with <b>SQL</b>, <b>R</b>, <b>Java</b>, <b>JavaScript</b>, and <b>MATLAB</b>. I have been increasingly using machine learning tools: <b>TensorFlow</b>, <b>PyTorch</b>, and <b>sckit-learn</b> to compliment my knowledge of data manipulation tools, <b>pandas</b> and <b>NumPy</b>. I also have experience with <b>MongoDB</b> and <b>MySQL</b> for database management, <b>Hadoop</b> for pipelining, and both <b>Tableau</b> and <b>Matplotlib</b> for data visualization. I have some CAD experience using <b>CATIA V6</b> as well as photo editing experience with <b>Photoshop</b>.
          </p>
          <p>
            Anyways, I hope you enjoy your visit to my website. Please feel free to <a href = '#contact'>contact me</a> about anything; potential collaboration opportunties, 1v1 me in Call of Duty, or if you want to make some money off me in Fantasy Football. Please reach out.
          </p>
          {close}
        </article>
        
        <article
          id="edu"
          className={`${this.props.article === 'edu' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <span className="image main">
            <img src={north} alt="" />
          </span>
          <h3>This is the University of Michigan where we respect integrity and honor excellence.</h3>
          <p>
            In this new age of data - big data, unstructured data, mixed media data - a need existed for a new class of experts who can extract actionable knowledge from rich and varied datasets. The University of Michigan introduced a Data Science Bachelors program in 2015 and recently just launched a Data Science Masters program in 2018. Being one of the first graduates whose entire college career centered around Data Science is an exciting opportunity to show the world what a degree from the University of Michigan really means. 
          </p>
          <p>
            At Michigan, the Data Science undergraduate program is a joint program between the Electrical Engineering and Computer Science (EECS) and Statistics department. The major is a rigorous program that provided us with a foundation in aspects of computer science, statistics and mathematics that are relevant for analyzing and manipulating large complex datasets as well as exposure to the practical use of data science methods as well as the theoretical properties underpinning the performance of the methods and algorithms. Michigan encourages students to not only focus on their field of study, but through flexible technical electives, we are able to take classes in other engineering fields to expand the breadth of our knowledge. I chose to take advantage of this opportunty and explore Industrial and Operations Engineering and School of Infomation courses. Below is a list of the relevant coursework that I took part in, for specifics about the classes or projects that I did in those classes, please click and explore more.
          </p>
          <p>
            Computing Courses
            <ul>
            <li><i>Programming and Introductory Data Structures</i></li>
            <li><i>Data Structures and Algorithms</i></li>
            <li><i>Web Systems</i></li>
            <li><i>Database Management Systems</i></li>
            <li><i>Computer Vision</i></li>
            <li><i>Introduction to Computer Security</i></li>
            <li><i>Introduction to Computer Organization</i></li>
            <li><i>Computer Science Pragmatics</i></li>
            <li><i>Major Design Experience-Professionalism</i></li>
            </ul>
            Statistics Courses
            <ul>
            <li><i>Introduction to Probability and Statistics</i></li>
            <li><i>Applied Regression Analysis</i></li>
            <li><i>Data Mining and Statistical Learning</i></li>
            <li><i>Capstone Seminar</i></li>
            </ul>
            Mathematics Courses
            <ul>
            <li><i>Calculus I - III</i></li>
            <li><i>Applied Linear Algebra</i></li>
            <li><i>Discrete Mathematics</i></li>
            </ul>
            Management Courses
            <ul>
            <li><i>Operations Modeling</i></li>
            <li><i>Introduction to Optimization Methods</i></li>
            <li><i>Needs Assessment and Usability Evaluation</i></li>
            </ul>
            Other
            <ul>
            <li><i>Game Theory</i></li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="proj"
          className={`${this.props.article === 'proj' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={model} alt="" />
          </span>
          <p>
            Welcome to my project page. Most of the projects that I will be presenting are my from my <a href="#edu">academic career</a>. If you would like to learn more about the specifics of each course that is mentioned below, please check the <a href="#edu">education tab</a>. Source available on request to non-students for personal evaluation, it is unavailable to students due to the <a href='https://bulletin.engin.umich.edu/rules/'>University of Michigan Engineering Honor Code</a>.
          </p>
          <p>
            EECS 442
            <ul>
              <li><i>Prokudin-Gorskii: Color from grayscale photos</i></li>
              <li><i>Image Filtering and Feature Detection</i></li>
              <li><i>Image Stitching and Panoramic Recognition</i></li>
              <li><i>Image Classification and Semantic Segmentation</i></li>
              <li><i>Improving Classification with Modeled Human Vision</i></li>
            </ul>
            EECS 485
            <ul>
              <li><i>Server-side Instagram Clone</i></li>
              <li><i>Client-side Instagram Clone</i></li>
              <li><i>MapReduce Server Implementation</i></li>
              <li><i>Hadoop</i></li>
            </ul>
            EECS 484
            <ul>
              <li><i>Facebook Oracle JDBC</i></li>
              <li><i>MongoDB Database</i></li>
              <li><i>Database Structure</i></li>
            </ul>
            EECS 388
            <ul>
              <li><i>Cryptographic Attacks</i></li>
              <li><i>Web Security</i></li>
              <li><i>Penetration Testing</i></li>
              <li><i>Binary Exploitation</i></li>
              <li><i>Data Forensics</i></li>
            </ul>  
            EECS 281
            <ul>
              <li><i>Letterman Robot (Path Finding)</i></li>
              <li><i>Star Wars: A New Heap (Priority Queues)</i></li>
              <li><i>SillyQL (SQL)</i></li>
              <li><i>Zookeeper (Classic NP-hard Problems)</i></li>
            </ul>
            EECS 280
            <ul>
              <li><i>Image Processing</i></li>
              <li><i>Euchre</i></li>
              <li><i>Machine Learning</i></li>
            </ul>
            Ross Datathon
            <ul>
              <li><i>Socioeconomic Effects on Drought Severity throughout the United States</i></li>
              <p></p>
            </ul>
            STATS 415
            <ul>
              <li><i>Continued Drought Severity Exploration</i></li>
            </ul>
            SI 422
            <ul>
              <li><i>Remote Unmoderated Usability Testing</i></li>
            </ul>
            Personal
            <ul>
              <li><b><i>This Website!</i></b></li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            "Work" is currently a work in progress! Please check back later!
          </p>
          <p>
            Slash 2 Esports - Data Analyst/Software Engineer (Summer 2019 - Present)
            University of Michigan - PC Operations (Fall 2019 - Present)
            Medion AG - Project Management Intern (Summer 2018)
            Razer Inc - Global Marketing Intern (Summer 2017)
            Faraday Future - Body in White Engineering Intern (August 2016)
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/kerrywuhoo"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/kerrywuhoo" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kerry.wuhoo/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/kerrywuhoo" className="icon fa-twitch">
                <span className="label">Twitch</span>
              </a>
            </li>
            <li>
              <a
                // href="https://github.com/codebushi/gatsby-starter-dimension"
                href = "https://github.com/kerrywuhoo"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href = "https://www.linkedin.com/in/kerry-wu/"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
