import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook /* faFortAwesome */,
} from "@fortawesome/free-brands-svg-icons"
/* import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons"; */
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Social = () => {
  return (
    <div>
      <a
        href="https://www.facebook.com/Hyl%C3%A9n-Kjellander-VVS-AB-599276326782362/"
        name="Facebook"
        title="Like Us On Facebook"
        style={{ color: "white" }}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook Link"
      >
        <FontAwesomeIcon className="cColor" size="lg" icon={faFacebook} />
      </a>
      {/*  <a
        href="mailto:metaxia.bokou@gmail.com"
        name="eMail"
        title="Mail Us"
        target="_blank"
        style={{ color: "white" }}
        rel="noreferrer"
        aria-label="Mail Link"
      >
        <FontAwesomeIcon className="mx-1 eColor" size="lg" icon={faAt} />
      </a>
      <a
        href="tel:+0046732570047"
        name="Tel"
        title="Call Us"
        target="_blank"
        style={{ color: "white" }}
        rel="noreferrer"
        aria-label="Call Link"
      >
        <FontAwesomeIcon className="mx-1 eColor" size="lg" icon={faMobileAlt} />
      </a> */}
      {/*   <a
          href="https://www.youtube.com/channel/"
          name="Youtube"
          title="Subscribe Our Channel"
          target="_blank"
          style={{ color: "white" }}
          rel="noreferrer"
          aria-label="Youtube Link"
        >
          <FontAwesomeIcon className="mx-1 eColor" size="lg" icon={faYoutube} />
        </a> */}
      <a
        href="https://www.instagram.com/hkvvsab/"
        title="Follow us"
        name="Instagram"
        target="_blank"
        style={{ color: "white" }}
        rel="noreferrer"
        aria-label="Instagram Link"
      >
        <FontAwesomeIcon className="mx-1 bColor" size="lg" icon={faInstagram} />
      </a>
    </div>
  )
}
export default Social
