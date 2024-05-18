import "../App.css";
import eliasPhoto from "../assets/EliasPhoto.jpeg";
function About() {
  return (
    <section id="about" className="scroll-my-10">
      <div className="max-w-[80%] mx-auto my-[3rem]">
        <div className="text-[#0a3863] text-center text-4xl font-semibold font-[Poppins] my-[2rem]">
          ABOUT
        </div>
        <div className="text-[#0a3863] text-center max-w-[80%] mx-auto text-2xl font-semibold font-[Poppins]">
          From concept to completion, we've got you covered.
        </div>
        <div className=" text-2xl font-[Poppins] text-center py-[3rem] text-blue-950">
          I’ve been a builder in the Bozeman area now for the past couple years.
          Specializing in remodels, interior finish work, exterior siding and
          decks. In my free time you can catch me practicing archery or
          backpacking in the beartooths. Look forward to helping complete your
          dream projects.
        </div>
        <img src={eliasPhoto} alt="Elias" className="mx-auto"></img>
      </div>
    </section>
  );
}

export default About;
