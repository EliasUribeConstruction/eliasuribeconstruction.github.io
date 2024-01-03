import '../App.css';
import Project1 from '../assets/FinishedBuilding1.jpeg'
import Project2 from '../assets/FinishedBuilding2.jpeg'
import Project3 from '../assets/FinishedBuilding3.jpeg'

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-title">PORTFOLIO</div>
            <div className="portfolio-container">
                <div className="portfolio-item">
                    <img src={Project1} className="portfolio-image" alt="Project1"/>
                    <div className="portfolio-text-section">
                        <div className="project-title">The Bridger Build</div>
                        <div className="project-quote">
                            "Elias was prompt, hard-working, and has a positive attitude. He made sure the job was done right. Good attention to detail. I'd definitely hire him again."
                        </div>
                        <div className="quote-name">- Jeff Browning | Designer & Ultrarunning Coach</div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <img src={Project2} className="portfolio-image-switch" alt="Project2"/>
                    <div className="portfolio-text-section-switch">
                        <div className="project-title">The Wilson Remodel</div>
                        <div className="project-quote">
                            "Elias is profoundly thoughtful in his work. I have never hired or worked with a professional who is equally dedicated, skilled and tireless."
                        </div>
                        <div className="quote-name">- John Dolan | MA, DDS, MS</div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <img src={Project3} className="portfolio-image" alt="Project3"/>
                    <div className="portfolio-text-section">
                        <div className="project-title">Big Sky Modern</div>
                        <div className="project-quote">
                        "Elias's work was quality, on time, on budget, and with a great attitude. I will work with Elias again!"
                        </div>
                        <div className="quote-name">- Seth Bork | Project Management</div>
                    </div>
                </div>
            </div>
            <div className="big-quote-section">
                <div className="big-quote-title">What Our Customers Are Saying</div>
                <div className="big-quote">"Elias Uribe has worked on several projects for me over the last three years on property in Cottonwood Canyon south of Bozeman. Elias is profoundly thoughtful in his work. I have never hired or worked with a professional who is equally dedicated, skilled and tireless. Elias will bring insight and problem-solving skills to your project. You will find that he is personable with clients and colleagues alike. I can’t recommend Elias highly enough and I look forward to hiring him on my upcoming architectural projects. There is no one I would rather have on my team."</div>
                <div className="big-quote-name">- John Dolan | MA, DDS, MS</div>
            </div>
        </section> 
    )
}

export default Portfolio