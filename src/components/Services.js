import '../App.css';
import newConstruction from '../assets/NewConstruction.png';
import remodels from '../assets/Remodels.png';
import generalContracting from '../assets/GeneralContracting.png';

function Services(){
    return (
        <section id="services" className="services">
            <div className="services-title">SERVICES</div>
            <div className="services-container">
                <div className="service-item">
                    <img src={newConstruction} className="service-image" alt="New Construction"/>
                    <div className="service-title">NEW CONSTRUCTION</div>
                </div>
                <div className="service-item">
                    <img src={remodels} className="service-image" alt="Remodels"/>
                    <div className="service-title">REMODELS</div>
                </div>
                <div className="service-item">
                    <img src={generalContracting} className="service-image" alt="New Construction"/>
                    <div className="service-title">General Contracting</div>
                </div>
            </div>
        </section>
    )
}

export default Services