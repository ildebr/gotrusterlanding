import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import InputText from "components/utils/inputs/text";
import Button from "components/utils/inputs/button";
import InputTextArea from "components/utils/inputs/text/area";
function Contact(): JSX.Element {
  const [form, setForm] = useState<any>({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });
  const [send, setSend] = useState(false);
  const [message, setMessage] = useState({ text: "", class: "" });
  useEffect(() => {
    console.log(form);
  }, [form]);
  useEffect(() => {
    if (send) {
      const check = Object.values(form).every((elem: any) => elem !== "");
      if (check) {
        setMessage({ text: "Done!", class: styles.done });
      } else {
        setMessage({ text: "Error", class: styles.err });
        setSend(false);
      }
    }
  }, [send]);
  const handleForm = (e: any) => {
    const aux = { ...form };
    aux[e.target.name] = e.target.value;
    setForm(aux);
  };
  const submit = (e: any) => {
    e.preventDefault();
    setSend(true);
  };
  return (
    <div className={styles.contact} id='contact'>
      <div className={styles.content}>
        <div className={styles.form}>
          <h1>
            Get in touch <br />
            <span>We are hiring!</span>
          </h1>

          <form onSubmit={(e) => e.preventDefault()}>
            <InputText
              name="name"
              onChange={(e: any) => handleForm(e)}
              value={form.name}
              placeholder="Name"
            />
            <InputText
              name="mail"
              onChange={(e: any) => handleForm(e)}
              value={form.mail}
              placeholder="Email"
            />

            <InputText
              name="phone"
              onChange={(e: any) => handleForm(e)}
              value={form.phone}
              placeholder="Phone"
            />
            <InputTextArea
              placeholder="message"
              value={form.message}
              name="message"
              onChange={(e: any) => handleForm(e)}
            />
            {message.text !== "" && (
              <span className={`${message.class}`}>{message.text}</span>
            )}
            <div className={styles.action}>
              <Button onClick={(e: any) => submit(e)}>Send</Button>
            </div>
          </form>
        </div>
        <div className={styles.images}>
          <img src="/contact.png" alt="contact" />
        </div>
      </div>
      <div className={styles.background}></div>
    </div>
  );
}
export default Contact;
