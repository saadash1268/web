import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg">
      <h1 className="c-title">Get in touch</h1>
      <p className="text">
        I'm actively looking for new opportunities and would love to hear more from you. Don't hesitate to get in touch!
      </p>
      <div className="contact-buttons">
        <a href="mailto:saadash1268@gmail.com" target="_blank" rel="noopener noreferrer">
          <button>Say Hi!</button>
        </a>
        <div/>
        <div className="icon-link">
        <a
          href="https://www.linkedin.com/in/saad-ashraf-104a92190/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/saadash1268"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
