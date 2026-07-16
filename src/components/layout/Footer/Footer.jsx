import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          AK
        </div>


        <h3>
          Athul Krishna
        </h3>


        <p>
          Building modern web experiences with React, Node.js and MongoDB.
        </p>



        <div className="footer-socials">

          <a
            href="https://github.com/Athul-krish"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>



          <a
            href="https://www.linkedin.com/in/athul-krishna-392b79421/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>



          <a
            href="https://www.instagram.com/_athxllll_/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>



          <a href="mailto:athulkrishna7.dev@gmail.com">
            <FaEnvelope />
          </a>


        </div>




        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Athul Krishna
          </p>


          <span>
            Designed & Developed with React
          </span>


        </div>


      </div>

    </footer>
  );
}