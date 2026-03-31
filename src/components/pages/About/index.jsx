//import image Here
import devImage from "../../../assets/kazi.jpg";

//import style Here
import style from "./about.module.css";

export default function About() {
  return (
    <>
      <section className={style.aboutSection}>
        <h1 className={style.title}>About Developer</h1>
        <p className={style.desc}>
          Hi,
          <br />
          &nbsp; &nbsp;I&apos;m a Kazi Tasin Hossen. I am a Web Developer with
          using new tools. I am a student at Barguna GOVT. Polytechnic Institute
          in Computer Science and Technology (CST.) Depertment.
        </p>
        <div className={style.imgSection}>
          <img src={devImage} alt="Developer Image" className={style.img} />
        </div>
      </section>
    </>
  );
}
