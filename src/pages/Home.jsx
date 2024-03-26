import {FaFacebookF} from 'react-icons/fa';
import HeroImg from '../assets/developer.jpg';
// import {FaxTwitter} from 'react-icons/fa6';
import {TiSocialLinkedin,TiSocialInstagram} from 'react-icons/ti';
import { cards } from '../utils/Data';
import { v4 as uuid} from 'uuid';
import { useEffect, useRef } from 'react';
import './home.css';
import Card from '../components/cards/Card';

import Portfolio from '../assets/Portfolio-react.jpeg';
import Easybank from '../assets/Easybank.jpeg';
import Toursite from '../assets/Tour-site.jpeg';
import Plusgen from '../assets/Plusgen.jpeg';
import Contactpage from '../assets/Expense-tracker.jpeg';
import Partners from '../assets/Weather-app.jpeg';
import Contact from '../components/contact/Contact';
const Home = () => {
    const skillRef=useRef(null);
    useEffect(() => {
        const observer=new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        animateProgressbar();
                        observer.disconnect();
                    }
                });
            },
            {threshold:0.5}
        );
        observer.observe(skillRef.current)
        return()=>{
            observer.disconnect();
        };
    },{});
    const animateProgressbar=()=>{
        const progressBars=document.querySelectorAll(".skill_progress-line");
        progressBars.forEach((progressbar)=>{
            const precent=progressbar.getAttribute('data-width');
            progressbar.style.width=`${precent}%`;
        });
    };
  return (
    <div className='container home'>
        <section className='hero-section' id='home'>
            <div className="hero-section_left">
                <div className="hero-section_special-text">
                    Hello! I am <br/>Murugan
                </div>
                <div className="hero-section_paragraph">
                    <h3>
                        Frontend Developer specialised is HTML,CSS,Javascript,Bootstrap and React js
                    </h3>
                </div>
                <a href='/resume.pdf' download={"projects/portpolio/public/resume.pdf"}className='button'>Get Resume</a>
            </div>
            <div className="hero-section_right">
                <div className="hero-section-img">
                   <img src={HeroImg} alt='Hero image' width={500}/>
                   <div className="hero-section_img-half-round-shape"></div>
                </div>
            </div>
            <div className="social-links-co">
                    <a href='https://www.facebook.com/profile.php?id=100029054902046'>
                        <FaFacebookF/>
                    </a>
                    {/* <a href='#'>
                        <FaxTwitter/>
                    </a> */}
                    <a href='https://www.linkedin.com/in/sankili'>
                <TiSocialLinkedin/>
                    </a>
                    <a href='https://www.linkedin.com/in/sankili'>
                        <TiSocialInstagram/>
                    </a>
                   </div>
        </section>

        <section className='services' id='services'>
            <h3 className='section_label'>My Services</h3>
            <h2 className='section_title'>Services Provided to my clients</h2>
            <div className="cards">
                {cards?.map((card)=>(
                    <Card
                    key={uuid()}
                    icon={card?.icon}
                    title={card?.title}
                    features={card?.features}
                    />
                    ))}
            </div>
        </section>

        <section className='skill' id='skills' ref={skillRef}>
            <div className="skill_left">
                <h3 className="section_label">My Skills</h3>
                <h2 className="section_title">My Special skills are</h2>
                <a href='/resume.pdf' download={'resume.pdf'} className='button'>
                    Get Resume
                </a>
            </div>
            <div className="skill_right">
                <div className="skill_wrapper">
                    <div className="skill_tag">Development</div>
                    <div className="skill_box">
                        <div className="skill_progress-line" data-width='70'></div>
                        <div className="skill_percentage">70%</div>
                    </div>
                </div>
                <div className="skill_wrapper">
                    <div className="skill_tag">Design</div>
                    <div className="skill_box">
                        <div className="skill_progress-line" data-width='70'></div>
                        <div className="skill_percentage">70%</div>
                    </div>
                </div>
                <div className="skill_wrapper">
                    <div className="skill_tag">Problem solving</div>
                    <div className="skill_box">
                        <div className="skill_progress-line" data-width='60'></div>
                        <div className="skill_percentage">60%</div>
                    </div>
                </div>
            </div>
        </section>

        <section className='portfolio' id='portfolio'>
        <h3 className='section_label'>My Portpolio</h3>
            <h2 className='section_title'>My Complete Projects</h2>
        <div className="portfolio_grid">
            <div className="portfolio_card">
               <img src={Portfolio} alt='Portfolio'/>
               <div className="portfolio_card-title">Portfolio</div>
            </div>
            <div className="portfolio_card">
               <img src={Easybank} alt='Easybank'/>
               <div className="portfolio_card-title">Easybank</div>
            </div>
            <div className="portfolio_card">
               <img src={Toursite} alt='Tour-site'/>
               <div className="portfolio_card-title">Toursite</div>
            </div>
            <div className="portfolio_card">
               <img src={Plusgen} alt='Plusgen'/>
               <div className="portfolio_card-title">Plusgen</div>
            </div>
            <div className="portfolio_card">
               <img src={Contactpage} alt='Contact'/>
               <div className="portfolio_card-title">React Expense Tracker</div>
            </div>
            <div className="portfolio_card">
               <img src={Partners} alt='Partners'/>
               <div className="portfolio_card-title">React Weather App</div>
            </div>
        </div>
        </section>
        
        <div className="contact" id='contact'>
        <h3 className='section_label'>Contact</h3>
            <h2 className='section_title'>Contact with us</h2>
        <Contact/>
        </div>
    </div>
  );
}

export default Home;