import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer 
      className=" text-dark py-5  d-flex justify-content-around w-100  align-items-center "
      style={{ backgroundColor: "#d5dfd7" }}
    >
      <div className="d-flex flex-column   w-100 text-center">
        <div>
        <ul className="list-inline social-icons">
          <li className="list-inline-item">
            <a className="path" href="#">
              <FontAwesomeIcon size="2xl" icon={faFacebook} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <FontAwesomeIcon size="2xl" icon={faTwitter} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <FontAwesomeIcon size="2xl" icon={faLinkedin} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <FontAwesomeIcon size="2xl" icon={faInstagram} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <FontAwesomeIcon size="2xl" icon={faYoutube} />
            </a>
          </li>
        </ul>
        </div>
        <p className="parrafo">@S E N A C o m u n i c a</p>
      </div>
      <div className="w-50">
        <p className="parrafo  ">www.sena.edu.co</p>
      </div>
    </footer>
  );
};

export default Footer;
