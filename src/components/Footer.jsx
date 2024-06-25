import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/Mahir33"
        target="_blank"
        title="Check my GitHub Account."
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/adam-wrobel-80802a20a/"
        target="_blank"
        title="Check my LinkedIn Account."
      >
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
