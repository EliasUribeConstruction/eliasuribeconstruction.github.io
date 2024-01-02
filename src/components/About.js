import '../App.css';
import whiteBluePrint from '../assets/BluePrint.jpg';
import architectBluePrint from '../assets/ArchitectBluePrint.jpg';

function About(){
    return (
        <section id="about">
            <div className="about-container">
                <div className="text-section">
                    {/* Text content goes here */}
                    <div className='about-text'>From concept to completion, we've got you covered.</div>
                    <div className='about-title'> ABOUT </div>
                </div>
                <div className="image-section">
                    <div className="second-image">
                        <img src={architectBluePrint} alt="Shorter Image" />
                    </div>
                    <div className="first-image">
                        <img src={whiteBluePrint} alt="Longer Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About