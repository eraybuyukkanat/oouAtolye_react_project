import Map from "../../sources/Map/Map";
import "./ContactPage.css";
import useInput from "../../hooks/use-input";
import { useDispatch, useSelector } from "react-redux";
import { sendContactData } from "../../../store/contact-actions";
import Notification from "../../ui/Notification";
import Navbar from "../../layout/Navbar/Navbar";
import { useEffect, useLayoutEffect } from "react";
import uiSlice, { uiActions } from "../../../store/ui-slice";
const ContactPage = () => {
  const dispatch = useDispatch();

  const location = {
    address: "Feneryolu, Şehir Kahya Sk. no: 6-a, 34724 Kadıköy/İstanbul",
    lat: 40.98443,
    lng: 29.04319,
  };
  const notification = useSelector((state) => state.ui.notification);

  const {
    enteredValue: enteredTitle,
    enteredValueTouched: enteredTitleTouched,
    valueIsValid: titleIsValid,
    IsValueTouched: titleIsOK,
    valueInputIsInvalid: titleInputIsInvalid,
    valueHandler: titleHandler,
    resetFunc: resetTitle,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredMessage,
    enteredValueTouched: enteredMessageTouched,
    valueIsValid: messageIsValid,
    IsValueTouched: messageIsOK,
    valueInputIsInvalid: messageInputIsInvalid,
    valueHandler: messageHandler,
    resetFunc: resetMessage,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    enteredValueTouched: enteredEmailTouched,
    valueIsValid: emailIsValid,
    IsValueTouched: emailIsOK,
    valueInputIsInvalid: emailInputIsInvalid,
    valueHandler: emailHandler,
    resetFunc: resetEmail,
  } = useInput((value) => value.trim() !== "");

  const setData = (event) => {
    event.preventDefault();
    titleIsOK();
    messageIsOK();
    emailIsOK();
    if (messageIsValid && emailIsValid && titleIsValid) {
      const message = {
        title: enteredTitle,
        description: enteredMessage,
        email: enteredEmail,
      };
      sendMessage(message);
      resetTitle();
      resetMessage();
      resetEmail();
    }
  };

  //DATA
  const sendMessage = async (message) => {
    dispatch(sendContactData(message));
    const timeId = setTimeout(() => {
      console.log("aa");
      dispatch(uiActions.hideNotification());
    }, 3000);
    return () => {
      clearTimeout(timeId);
    };
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
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Navbar />
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
            <div className="contact-mid">
              <h2>Atölyemiz Hakkında</h2>
              <p>
                Oou Ses ve Sahne Sanatları Atölyesi'ne Hoş Geldiniz! 2022
                yılında Ali Hikmet Kürekçi tarafından kurulan Oou Ses ve Sahne
                Sanatları Atölyesi, kaliteli eğitim anlayışı ve uzman kadrosuyla
                sanatseverlere hizmet vermektedir. Hitabet tasarımı konusunda
                öncü olan atölyemiz, şimdiye kadar 200 saatten fazla ders
                sunmuştur. Atölyemizde yer alan alanında uzman hocalar,
                öğrencilere şan eğitimi vermektedir. Etkileyici diyafram
                kullanımı, hitabet tasarımı, konservatuvar hazırlık sınıfları ve
                medya eğitimi gibi birçok konuda eğitim imkanı sunmaktayız.
                Hedefimiz, öğrencilerimizin seslerini güçlendirmek ve sahne
                performanslarında kendilerine olan güvenlerini artırmaktır.
                Bununla birlikte, Oou Ses ve Sahne Sanatları Atölyesi, reklam
                seslendirmesi ve çekim & prodüksiyon hizmetleri ile kurumsal
                eğitimler de sunmaktadır. Profesyonel seslendirme ekipmanları ve
                stüdyomuzla, müşterilerimizin projelerini en iyi şekilde hayata
                geçirmek için çaba sarf etmekteyiz. Atölyemiz ayrıca
                etkinliklerinizde sunucu hizmeti sağlamaktadır. Deneyimli
                sunucularımız, etkinliklerinizi akıcı bir şekilde yöneterek
                katılımcılarınıza unutulmaz bir deneyim sunmaktadır. Oou Ses ve
                Sahne Sanatları Atölyesi olarak, sanatseverlere değerli bir
                eğitim deneyimi sunmayı hedefliyoruz. Siz de bizimle birlikte
                sesinizi keşfedip sahne performanslarınızı geliştirmek
                isterseniz, bize katılmaktan mutluluk duyacağız. Detaylı bilgi
                için lütfen internet sitemizi ziyaret edin veya bize ulaşın.
                Atölyemizde sizi ağırlamaktan ve sanat yolculuğunuzda size
                rehberlik etmekten büyük bir memnuniyet duyacağız.
              </p>
            </div>
            <div className="contact-right">
              <Map location={location} zoomLevel={17} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
