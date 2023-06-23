import "./ContactPage.css";
import { useEffect, useRef, useState } from "react";

const ContactPage = () => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const emailRef = useRef("");

  const [enteredTitleTouched,setEnteredTitleTouched] = useState(false);
  const [enteredMessageTouched,setEnteredMessageTouched] = useState(false);
  const [enteredEmailTouched,setEnteredEmailTouched] = useState(false);

  const [enteredTitle,setEnteredTitle] = useState("");
  const [enteredMessage,setEnteredMessage] = useState("");
  const [enteredEmail,setEnteredEmail] = useState("");

 const [titleIsValid,setTitleIsValid] = useState(false); 
 const [messageIsValid,setMessageIsValid] = useState(false); 
 const [emailIsValid,setEmailIsValid] = useState(false); 



  const titleHandler = (event)=>{
    setEnteredTitle(event.target.value)
    setTitleIsValid(true);

  }

  const messageHandler = (event)=>{
    setEnteredMessage(event.target.value)
    setMessageIsValid(true)
  }

  const emailHandler = (event)=>{
    setEnteredEmail(event.target.value)
    setEmailIsValid(true)
  }

  const titleIsOK = (event)=>{
    setEnteredTitleTouched(true)
    if(enteredTitle.trim() === ""){
      setTitleIsValid(false);
      return;
    }else{
      setTitleIsValid(true)
    }
    setEnteredTitleTouched(true);
  }

  const messageIsOK = (event)=>{
    setEnteredMessageTouched(true)
    if(enteredMessage.trim() === ""){
      setMessageIsValid(false);
      return;
    }else{
      setMessageIsValid(true)
    }
  }

  const emailIsOK = (event)=>{
    setEnteredEmailTouched(true);
    if(enteredEmail.trim() === ""){
      setEmailIsValid(false);
      return;
    }else{
      setEmailIsValid(true)
    }
  }


  const setData = (event) => {
    event.preventDefault();
    setEnteredTitleTouched(true)
    setEnteredMessageTouched(true)
    setEnteredEmailTouched(true)

    if(messageIsValid && emailIsValid && titleIsValid){
    const message = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      email: emailRef.current.value,
    };
      sendMessage(message);

    }
    
    emailRef.current.value = ''
    titleRef.current.value = ''
    descriptionRef.current.value = ''
   
  };

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

  const titleInputIsInvalid = !titleIsValid && enteredTitleTouched;
  const messageInputIsInvalid = !messageIsValid && enteredMessageTouched;
  const emailInputIsInvalid = !emailIsValid && enteredEmailTouched;

  return (
    <div className="container-contact-main">
      <div className="container-contact">
        <div className="contact-box">
          <div className="contact-left">
            <h3>İletişime Geç</h3>
            <form onSubmit={setData}>
              <div className="input-row">
                <div className="input-group">
                  <label>Konu Başlığı</label>
                  <input
                    id="title"
                    maxLength='40'
                    ref={titleRef}
                    name="title"
                    type="text"
                    onChange={titleHandler}
                    onBlur={titleIsOK}
                  />
                 {titleInputIsInvalid && <h5>Konu başlığını boş bırakamazsınız</h5>}
                </div>
               
                
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    id="title"
                    ref={emailRef}
                    maxLength='40'
                    name="title"
                    type="email"
                    onChange={emailHandler}
                    onBlur={emailIsOK}
                  />
                  {emailInputIsInvalid && <h5>Emaili boş bırakamazsınız</h5>}
                </div>
                
              </div>

              <label>Mesaj</label>
              <textarea id="description" name="description" ref={descriptionRef} rows="10" maxLength="500" onChange={messageHandler} onBlur={messageIsOK}></textarea>
              {messageInputIsInvalid && <h5>Mesajı boş bırakamazsınız</h5>}
              <button type="submit">Gönder</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Atölyemiz Hakkında</h3>
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
