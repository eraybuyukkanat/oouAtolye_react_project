import "./ContactPage.css";
import { useEffect, useRef, useState } from "react";

const ContactPage = () => {

  
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const titleIsValid = enteredTitle.trim() !== "";
  const messageIsValid = enteredMessage.trim() !== "";
  const emailIsValid = enteredEmail.trim() !== "";

  const titleInputIsInvalid = !titleIsValid && enteredTitleTouched;
  const messageInputIsInvalid = !messageIsValid && enteredMessageTouched;
  const emailInputIsInvalid = !emailIsValid && enteredEmailTouched;


  //EVERY KEYSTROKE
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const messageHandler = (event) => {
    setEnteredMessage(event.target.value);
  };
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  //AFTER
  const titleIsOK = (event) => {
    setEnteredTitleTouched(true);
  };
  const messageIsOK = (event) => {
    setEnteredMessageTouched(true);
  };
  const emailIsOK = (event) => {
    setEnteredEmailTouched(true);
  };

  //BUTTON
  const setData = (event) => {
    event.preventDefault();
    setEnteredTitleTouched(true);
    setEnteredMessageTouched(true);
    setEnteredEmailTouched(true);

    if (messageIsValid && emailIsValid && titleIsValid) {
      const message = {
        title: enteredTitle,
        description: enteredMessage,
        email: enteredEmail,
      };
      sendMessage(message);

      setEnteredEmailTouched(false);
      setEnteredMessageTouched(false);
      setEnteredTitleTouched(false);

      setEnteredTitle("");
      setEnteredEmail("");
      setEnteredMessage("");
    }
  };

  //DATA
  const sendMessage = async (message) => {
    try {
      await fetch(
        "https://react-http-901a1-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
        {
          method: "POST",
          body: JSON.stringify(message),
        }
      );
    } catch (e) {}
  };

  
  //CSS
  const inputTitleClass =
    !titleIsValid && enteredTitleTouched
      ? "input-group invalid"
      : "input-group";
  const inputEmailClass =
    !emailIsValid && enteredEmailTouched
      ? "input-group invalid"
      : "input-group";
  const textareaMessageClass =
    !messageIsValid && enteredMessageTouched
      ? "input-group invalid"
      : "input-group";

  return (
    <div className="container-contact-main">
      <div className="container-contact">
        <div className="contact-box">
          <div className="contact-left">
            <h2>İletişime Geç</h2>
            <form onSubmit={setData}>
              <div className="input-row">
                <div className={inputTitleClass}>
                  <label>Konu Başlığı</label>
                  <input
                    id="title"
                    maxLength="40"
                    name="title"
                    type="text"
                    onChange={titleHandler}
                    onBlur={titleIsOK}
                    value={enteredTitle}
                  />
                  {titleInputIsInvalid && (
                    <h5>Konu başlığını boş bırakamazsınız</h5>
                  )}
                </div>
              </div>
              <div className="input-row">
                <div className={inputEmailClass}>
                  <label>Email</label>
                  <input
                    id="title"
                    maxLength="40"
                    name="title"
                    type="email"
                    onChange={emailHandler}
                    value={enteredEmail}
                    onBlur={emailIsOK}
                  />
                  {emailInputIsInvalid && <h5>Emaili boş bırakamazsınız</h5>}
                </div>
              </div>
              <div className={textareaMessageClass}>
                <label>Mesaj</label>
                <textarea
                  id="description"
                  name="description"
                  value={enteredMessage}
                  rows="10"
                  maxLength="500"
                  onChange={messageHandler}
                  onBlur={messageIsOK}
                ></textarea>
                {messageInputIsInvalid && <h5>Mesajı boş bırakamazsınız</h5>}
              </div>
              <button type="submit">Gönder</button>
            </form>
          </div>
          <div className="contact-right">
            <h2>Atölyemiz Hakkında</h2>
            <p>
              Oou Ses ve Sahne Sanatları Atölyesi'ne Hoş Geldiniz! 2022 yılında
              Ali Hikmet Kürekçi tarafından kurulan Oou Ses ve Sahne Sanatları
              Atölyesi, kaliteli eğitim anlayışı ve uzman kadrosuyla
              sanatseverlere hizmet vermektedir. Hitabet tasarımı konusunda öncü
              olan atölyemiz, şimdiye kadar 200 saatten fazla ders sunmuştur.
              Atölyemizde yer alan alanında uzman hocalar, öğrencilere şan
              eğitimi vermektedir. Etkileyici diyafram kullanımı, hitabet
              tasarımı, konservatuvar hazırlık sınıfları ve medya eğitimi gibi
              birçok konuda eğitim imkanı sunmaktayız. Hedefimiz,
              öğrencilerimizin seslerini güçlendirmek ve sahne performanslarında
              kendilerine olan güvenlerini artırmaktır. Bununla birlikte, Oou
              Ses ve Sahne Sanatları Atölyesi, reklam seslendirmesi ve çekim &
              prodüksiyon hizmetleri ile kurumsal eğitimler de sunmaktadır.
              Profesyonel seslendirme ekipmanları ve stüdyomuzla,
              müşterilerimizin projelerini en iyi şekilde hayata geçirmek için
              çaba sarf etmekteyiz. Atölyemiz ayrıca etkinliklerinizde sunucu
              hizmeti sağlamaktadır. Deneyimli sunucularımız, etkinliklerinizi
              akıcı bir şekilde yöneterek katılımcılarınıza unutulmaz bir
              deneyim sunmaktadır. Oou Ses ve Sahne Sanatları Atölyesi olarak,
              sanatseverlere değerli bir eğitim deneyimi sunmayı hedefliyoruz.
              Siz de bizimle birlikte sesinizi keşfedip sahne performanslarınızı
              geliştirmek isterseniz, bize katılmaktan mutluluk duyacağız.
              Detaylı bilgi için lütfen internet sitemizi ziyaret edin veya bize
              ulaşın. Atölyemizde sizi ağırlamaktan ve sanat yolculuğunuzda size
              rehberlik etmekten büyük bir memnuniyet duyacağız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
