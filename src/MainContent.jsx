import React from 'react'
import './MainContent.css'
import me from './assets/me.png'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import mail from './assets/Mail.svg'
import youtube from './assets/youtube.svg'

export default function MainContent(){
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                <img className='main-img' src={me} alt="me" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Minh Vy Ha</h2>
                    <h4 className='role'>Full-Stack Developer</h4>
                    <h5 className='web'>minhvyha.tech</h5>
                    <div className='connect'>
                        <a className='mail' href="mailto:MinhVy.Ha@outlook.com"><img src={mail} alt="mail" /> Email</a>
                        <a className='linkedin' href="https://www.linkedin.com/in/minhvyha/" target='_blank'><img src={linkedin} alt="" />LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am an aspiring full-stack developer. I am constantly learning new technologies and knowledge related to my future career. </p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Finance. Music. Technology. Sport. Health. I love connecting with new people, give me a shout at Minhvy.ha@outlook.com.</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href="https://www.facebook.com/minhvy.ha.75/"><img className='facebook' src={facebook} alt="facebook" /></a>
                    <a href="https://leetcode.com/minhvy828/"><img className='leet' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC80lEQVRogc2avWsUQRjG342xsTCV8SNgxCRyBAkGiyiIhU0QBS0EbbQQFVFsbBS1sREs1D9ARIQUfiAKphHSCApiIRaGICh+oMRC4+kZTC5xfxazB+vezs7c7ezNPeWy7/P+nv2YuZk9kRYJWAt8QykEJlrVO7eADcAi9brim80ooF8DDzCd17/DBaROQJ+ITInIEs0p5SL75xLQByxornxNI745UwWst4A/45szVcA6C/izvjlTBfRawF/0zZkq1Dhvgr/kmzNVlld+HCh01GtKlle+pipwC+j0zS0iIkBPBNWoysBG3/CrmoSP340tvuBXAvM54GtaALa1M3xocU4VGG4VvM0z/xrYEasZQL24fzNq5oGhdoC/nlE/QvadmwMGi4LvNjQHuGnhMxSB6vQHWF0EfFZTgLEG/EoRqE5PWg1/uwnfAWBW4/fZFfwKzI/N3Rz+vUAlxfOBC/gA+GmAz90INTBMxzw/AMtcBBg3wD/K3eT/fluBTa7MlpM9AT120qgoAQ8z4Nt/Lwf4rYF/55vNKNTLq1OPRf0g8JR8v1LTNIt6MrpNACWNQcUy/JRj8KTuJfsml3hrNHy/TAFEpF9EShbn5dHO5IFkgBlNoc3Y/L1hnMZVtxRNBpjUFHZhWJAHQTAjIk7nhxRdruubPABURWRpSvH9IAj2mToA+0Xdat1+aDOaE5GxIAjMP/SAlxkv0WGHUMUI2JwRIAQO+mY0CnhrGM7aOwRqHZC1hg2jZ91FrxuoiaoCXHPhWTMeNdyFEDC+1IYez1J8z7nKIMAhixB7m/R+ofF87yxA1OiIRYjdDfh1AK8y/KacBoiaHrUIUTfNp/h0ApMGr13OA0TNj1mEGDXAvzF4nC8EPgZx3CLE6ZS6YeCrofZCofAxmBMGEFBbMR9R80nZ4vzWfnYCTlpA2crPZyfglAP4q17gYyEOoP8bQZZC2uU7MdAFPMfuWwDAJ2C7b+46ofY77wBfUIv6WqBF4AcwAexx3fcf7nz80kGV4ksAAAAASUVORK5CYII=" /></a>
                    <a href="https://www.youtube.com/channel/UC6kYs1bW0j273GneHxFyPFQ"><img className='youtube' src={youtube} alt="youtube" /></a>
                    <a href="https://github.com/minhvy828"><img src={github} alt="github" /></a>
                </div>
            </div>
        </>
    )
}
