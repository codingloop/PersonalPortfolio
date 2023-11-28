import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./style.module.css";
import { faAt, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className={style.col_t1}>
      <div className={style.container_title}>
        <div className="mb-[30px] ml-[15px] relative self-center">
          <h4>Get in touch</h4>
        </div>
      </div>
      <div className={style.contact_div}>
        <form>
          <div className={style.form_field}>
            <input name="name" required />
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} />
            </label>
          </div>
          <div className={style.form_field}>
            <input name="email" required />
            <label htmlFor="email">
              <FontAwesomeIcon icon={faAt} />
            </label>
          </div>
          <div className={style.form_field}>
            <textarea name="message" required />
            <label htmlFor="message">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
          </div>
          <div className={style.form_submit}>
            <button>
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
