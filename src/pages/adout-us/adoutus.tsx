import "./aboutus.scss";
import likeicon from "../../assets/icons/ic-like.svg";
import handicon from "../../assets/icons/ic-hand.svg";
import slippersicon from "../../assets/icons/ic-slippers.svg";
function AboutUs() {
  return (
    <>
      <div className="about__relative">
        <div className="bgimg"></div>
        <div className="bg__info container">
          <h1 className="bg__title display__text">
            CREATE<span className="orange">X</span> CONSTRUCTION
          </h1>
          <p className="bg__text white__text">
            Cras ultrices leo vitae non viverra. Fringilla nisi quisque
            consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis
            purus eget pellentesque integer ipsum elementum felis.{" "}
          </p>
          <div className="bg__buttons">
            <button className=" white-btn-lg">LEARN MORE ABOUT US</button>
            <button className="orange-btn-lg">SUBMIT REQUEST</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="banner">
          <h1 className="banner__title">We are Createx Construction Bureau </h1>
          <p className="banner__text">
            We are rightfully considered to be the best construction company in
            the USA.
          </p>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=awe0mwetY8IiRwkd"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="core">
          <h1 className="core__title">Our core values</h1>
          <p className="core__text">
            Our mission is to set the highest standards for construction sphere.
          </p>
          <div className="savecare">
            <div className="savecare__inner">
              <img src={likeicon} alt="" />
              <h3 className="savecare__title">Quality</h3>
              <p className="savecare__text base__regular">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className="vertical-seporator"></div>
            <div className="savecare__inner">
              <img src={handicon} alt="" />
              <h3 className="savecare__title">Safety</h3>
              <p className="savecare__text base__regular">
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim empor est ea.
              </p>
            </div>
            <div className="vertical-seporator"></div>
            <div className="savecare__inner">
              <img src={slippersicon} alt="" />
              <h3 className="savecare__title"> Comfort</h3>
              <p className="savecare__text base__regular">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>
        </div>
        <div className="form ">
          <h3 className="form__text">Want to know more? Ask us a question:</h3>
          <div className="form__inner">
            <form action="">
              <p>Name</p>
              <input placeholder="Your name" type="text" />
            </form>
            <form action="">
              <p>Phone</p>
              <input placeholder="Your phone" type="number" />
            </form>
            <form action="">
              <p>Message</p>
              <input placeholder="Your message" type="text" />
            </form>
            <button className="orange-btn-lg">SEND</button>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <h1 className="title__services">Our services</h1>
          <div className="bgimg__services"></div>
          <p className="services__text">
            Createx Construction Bureau is a construction giant with a full
            range of construction services.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
