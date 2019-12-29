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
            While my engineering degree in an EECS field would suggest that I am an awkard, anti-social hermit that lives in a completely blacked out room, that couldn't be further from the truth. I am a very sociable person with a great sense of humor, <i>however my mom says I talk too much</i>. You would find me making friends with complete strangers standing in line for $50 TVs on Black Friday, when everyone else is trampling over each other to be the first in line at WalMart. I had the incredible opportunty to take two internships overseas, one in Singapore and another in Germany, countries I had never been to, but was very quickly able to assimilate into the work and social cultures in these places and made friends that will hopefully last for a lifetime.
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
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
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
            EECS 280
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            EECS 281
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            EECS 485
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            EECS 484
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            EECS 388
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            EECS 442
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            Ross Datathon
            <ul>
              <li>Socioeconomic Effects on Drought Severity throughout the United States</li>
            </ul>
            STATS 415
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            SI 422
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            IOE 202
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
            </ul>
            MATH 214
            <ul>
              <li>Improving Classification with Modeled Human Vision</li>
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
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
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
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
