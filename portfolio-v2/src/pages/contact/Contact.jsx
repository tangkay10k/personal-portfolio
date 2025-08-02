import styles from "./contact.module.css";
import Input from "@/components/input/Input.jsx";
import Button from "@/components/button/Button.jsx";
import TextArea from "@/components/input/TextArea.jsx";
import BlurText from "@/components/imported/text/BlurText.jsx";
import ShinyText from "@/components/imported/text/ShinyText.jsx";
import { Delayed } from "@/components/delay/Delayed.jsx";
import {
  AiFillGithub as GithubIcon,
  AiFillLinkedin as LinkedInIcon,
  AiOutlineInstagram as InstaIcon,
} from "react-icons/ai";
import { FaTelegramPlane as SendIcon } from "react-icons/fa";

const PAGE_DELAY = 1000;

export default function ContactPage() {
  return (
    <div className={styles.contactPageContainer}>
      <section>
        <div className={styles.contact}>
          <BlurText text="Contact Me" />
          <Connections />

          <Delayed delay={PAGE_DELAY} className={styles.downloadBtnContainer}>
            <Button>Download CV</Button>
          </Delayed>
        </div>

        <Delayed delay={PAGE_DELAY} className={styles.formContainer}>
          <form>
            <Input placeholder={"Your Name"} required />
            <Input placeholder={"Your Email"} required />
            <TextArea rows={15} placeholder={"Your Message"} required />
            <Button type={"submit"}>
              <SendIcon />
              Send
            </Button>
          </form>
        </Delayed>
      </section>
    </div>
  );
}

function Connections() {
  const links = [
    "https://github.com/ktan185",
    "https://www.linkedin.com/in/tangkay10k",
    "https://www.instagram.com/kaytang_",
  ];

  const handleOpen = (idx) => {
    window.open(links[idx]);
  };

  return (
    <Delayed delay={PAGE_DELAY} className={styles.connections}>
      <ShinyText text="Let's Connect!" />
      <section>
        <Button onClick={() => handleOpen(0)}>
          <GithubIcon size={30} />
        </Button>
        <Button onClick={() => handleOpen(1)}>
          <LinkedInIcon size={30} />
        </Button>
        <Button onClick={() => handleOpen(2)}>
          <InstaIcon size={30} />
        </Button>
      </section>
    </Delayed>
  );
}