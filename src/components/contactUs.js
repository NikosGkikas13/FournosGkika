import React, { useRef, useState } from "react";
import "./../css/contactUs.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import emailjs from "emailjs-com";
import { useEffect } from "react/cjs/react.development";

const contactUs = (props) => {
  const contactProps = props.propsLang.enabledLang.ContactUs;
  console.log(contactProps);

  const ContactForm = (props) => {
    //Send Message to Email
    const refSuccess = useRef();
    const refStatus = useRef(false);
    const [messageSend, setMessageSend] = useState({
      status: refStatus.current,
      success: refSuccess.current,
    });
    const [message, setMessage] = useState();

    useEffect(() => {
      setTimeout(() => {
        refStatus.current = false;
        setMessageSend({
          status: refStatus.current,
          success: refSuccess.current,
        });
        console.log(messageSend.status);
      }, 2000);
    }, [refStatus.current]);

    const formRef = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_1spbq7l",
          "template_jxb290s",
          formRef.current,
          "user_s0tKzEnF5NAHm64sllsy2"
        )
        .then(
          (result) => {
            console.log(result.text);

            const timer = console.log(messageSend.status + " initial value");
            refSuccess.current = true;
            refStatus.current = true;
            setMessageSend({
              status: refStatus.current,
              success: refSuccess.current,
            });
            console.log(
              `Status is ${refStatus.current} and success is ${messageSend.success}`
            );
            // setTimeout(()=>
            //   refStatus.current=false,
            //   console.log(`Status is ${refStatus.current} and success is ${messageSend.success}`)
            // ,2500)
          },
          (error) => {
            console.log(error.text);
            refSuccess.current = false;
          }
        );
    };
    //Send message to Email

    const containerStyle = {
      maxWidth: "900px",
      height: "385px",
      position: "relative",
      overflow: "hidden",
      margin: "0 auto",
      marginTop: "80px",
    };

    const center = {
      lat: 38.149439829121135,
      lng: 23.965424873140197,
    };

    return (
      <>
        <section class="contact-div">
          {/* {messageSend && <h1>hi</h1>} */}

          <form ref={formRef} class="contact-form" onSubmit={sendEmail}>
            <ul class="form-ul">
              <div class="form-div">
                <li>
                  <label>{contactProps.name}:</label>
                  <input name="name" type="text" />
                </li>
                <li>
                  <label>{contactProps.email}:</label>
                  <input name="from_name" type="email" />
                </li>
              </div>
              <li>
                <label>{contactProps.message}:</label>
                <textarea name="message" />
              </li>
            </ul>
            {messageSend.status && (
              <div
                className={`message-modal ${
                  messageSend.success ? "success-msg" : "error-msg"
                }`}
              >
                <h1>
                  {messageSend.success ? "Message sent" : "Message not sent"}
                </h1>
              </div>
            )}
            <button type="submit" onSubmit={() => (refStatus.current = true)}>
              {contactProps.btn}
            </button>
          </form>

          <LoadScript googleMapsApiKey="AIzaSyDrJch83-JOZMLC1xFbc3LV1Ilmk0gKsIw">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker
                key="marker_1"
                position={{
                  lat: 38.149439829121135,
                  lng: 23.965424873140197,
                }}
              />
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </section>
      </>
    );
  };
  return (
    <div id="contact-us">
      <ContactForm />
    </div>
  );
};

export default contactUs;
