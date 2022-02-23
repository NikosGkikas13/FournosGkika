import React, { useRef, useState } from "react";
import "./../css/contactUs.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import emailjs from "emailjs-com";
import { useEffect } from "react/cjs/react.development";

const contactUs = (props) => {
  const contactProps = props.propsLang.enabledLang.ContactUs;
  const info = props.propsLang.enabledLang.main.FooterInfo;
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
      maxWidth: "1100px",
      height: "385px",
      position: "relative",
      overflow: "hidden",
      margin: "0 auto",
    };

    const center = {
      lat: 38.149439829121135,
      lng: 23.965424873140197,
    };

    return (
      <>
        <section class="contact-div">
          {/* {messageSend && <h1>hi</h1>} */}
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

          <form ref={formRef} class="contact-form" onSubmit={sendEmail}>
            <h1>{contactProps.contact}</h1>
            <ul class="form-ul">
              <div class="form-div">
                <li>
                  <label>{contactProps.name}:</label>
                  <input name="name" type="text" required />
                </li>
                <li>
                  <label>{contactProps.email}:</label>
                  <input name="from_name" type="email" required />
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
          <div className="location-info-container">
            <p>{contactProps.location}</p>
            <ul>
              {info.map((item, key) => {
                return (
                  <div className="location-info-list-item">
                    <img className="contact-icon" src={item.icon} alt="" />
                    <li>{item.text}</li>
                  </div>
                );
              })}
            </ul>
          </div>
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
