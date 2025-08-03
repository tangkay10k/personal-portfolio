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
import { useState } from "react";
import { sendMessage } from "@/routes/contact-route.js";
import { toast } from "sonner";
import isFormValid, { isFormFilled } from "@/pages/contact/contact-utils.js";
import { handleOpen } from "@/common/utils.js";

const PAGE_DELAY = 1000;
const CV_PATH = "/resources/cv.pdf";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid(formData)) return;
    setIsSubmitting(true);
    sendMessage(formData)
      .then(() =>
        toast.success(
          "📬Your message has been sent! I'll be in touch shortly :)",
        ),
      )
      .catch(() => toast.error("Something went wrong :/ Please try again."))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className={styles.contactPageContainer}>
      <section>
        <div className={styles.contact}>
          <BlurText text="Contact Me" />
          <Connections />

          <Delayed delay={PAGE_DELAY} className={styles.downloadBtnContainer}>
            <Button
              onClick={() =>
                handleOpen(CV_PATH, "_blank", "noopener, noreferrer")
              }
            >
              Download CV
            </Button>
          </Delayed>
        </div>

        <Delayed delay={PAGE_DELAY} className={styles.formContainer}>
          <Input
            name="name"
            placeholder={"Your Name"}
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            type={"email"}
            placeholder={"Your Email"}
            value={formData.email}
            onChange={handleChange}
          />
          <TextArea
            name="message"
            rows={15}
            value={formData.message}
            onChange={handleChange}
            placeholder={"Your Message"}
          />
          <Button
            type={"submit"}
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={isFormFilled(formData) ? styles.glowPulse : ""}
          >
            <SendIcon />
            Send
          </Button>
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

  return (
    <Delayed delay={PAGE_DELAY} className={styles.connections}>
      <ShinyText text="Let's Connect!" />
      <section>
        <Button onClick={() => handleOpen(links[0])}>
          <GithubIcon size={30} />
        </Button>
        <Button onClick={() => handleOpen(links[1])}>
          <LinkedInIcon size={30} />
        </Button>
        <Button onClick={() => handleOpen(links[2])}>
          <InstaIcon size={30} />
        </Button>
      </section>
    </Delayed>
  );
}