import "./ContactPage.css";
import { useRef } from "react";

const ContactPage = () => {
 
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const emailRef = useRef("");


  const setData = (event)=>{
    event.preventDefault();
   const message = 
      {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        email: emailRef.current.value,
      };
    sendMessage(message);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    emailRef.current.value = "";
  }

  const sendMessage = async  (message) => {
    try {
      await fetch(
        "https://react-http-901a1-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
        {
          method: "POST",
          body: JSON.stringify(message),
        }
      );
    }catch (e){
      
    }
   
  };

  return (
    <div className="two_column">
      <div>
        <h1>Hakkında</h1>
        <p>
          Oou Ses ve Sahne Sanatları Atölyesi'ne Hoş Geldiniz! 2022 yılında Ali
          Hikmet Kürekçi tarafından kurulan Oou Ses ve Sahne Sanatları Atölyesi,
          kaliteli eğitim anlayışı ve uzman kadrosuyla sanatseverlere hizmet
          vermektedir. Hitabet tasarımı konusunda öncü olan atölyemiz, şimdiye
          kadar 200 saatten fazla ders sunmuştur. Atölyemizde yer alan alanında
          uzman hocalar, öğrencilere şan eğitimi vermektedir. Etkileyici
          diyafram kullanımı, hitabet tasarımı, konservatuvar hazırlık sınıfları
          ve medya eğitimi gibi birçok konuda eğitim imkanı sunmaktayız.
          Hedefimiz, öğrencilerimizin seslerini güçlendirmek ve sahne
          performanslarında kendilerine olan güvenlerini artırmaktır. Bununla
          birlikte, Oou Ses ve Sahne Sanatları Atölyesi, reklam seslendirmesi ve
          çekim & prodüksiyon hizmetleri ile kurumsal eğitimler de sunmaktadır.
          Profesyonel seslendirme ekipmanları ve stüdyomuzla, müşterilerimizin
          projelerini en iyi şekilde hayata geçirmek için çaba sarf etmekteyiz.
          Atölyemiz ayrıca etkinliklerinizde sunucu hizmeti sağlamaktadır.
          Deneyimli sunucularımız, etkinliklerinizi akıcı bir şekilde yöneterek
          katılımcılarınıza unutulmaz bir deneyim sunmaktadır. Oou Ses ve Sahne
          Sanatları Atölyesi olarak, sanatseverlere değerli bir eğitim deneyimi
          sunmayı hedefliyoruz. Siz de bizimle birlikte sesinizi keşfedip sahne
          performanslarınızı geliştirmek isterseniz, bize katılmaktan mutluluk
          duyacağız. Detaylı bilgi için lütfen internet sitemizi ziyaret edin
          veya bize ulaşın. Atölyemizde sizi ağırlamaktan ve sanat
          yolculuğunuzda size rehberlik etmekten büyük bir memnuniyet duyacağız.
        </p>
      </div>
      <div>
        <h1>İletişim</h1>
        <form onSubmit={setData}>
          <label className="input">
            <h2>Konu Başlığı</h2>
            <input id="title" ref={titleRef} name="title" type="text" />
          </label>
          <label>
            <h2>Açıklama</h2>
            <textarea id="description" ref={descriptionRef} name="description" type="text" />
          </label>
          <label>
            <h2>E-mail</h2>
            <input id="email" ref={emailRef}  name="email" type="text" />
          </label>
          <button type="submit">GÖNDER</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
