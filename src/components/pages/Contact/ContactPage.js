import "./ContactPage.css";
import { useState } from "react";
const ContactPage = () => {
  const [message, setMessage] = useState("");

  const setData = (event)=>{
    event.preventDefault();
    setMessage(
      {
        title: event.target.title.value,
        description: event.target.description.value,
        email: event.target.email.value,
      },
    );
    console.log("setdata: "+message.title);
    sendMessage(message);

  }

  const sendMessage = async  (message) => {
    console.log("before fetch: "+message)
    try {
      await fetch(
        "https://react-http-901a1-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
        {
          method: "POST",
          body: JSON.stringify(message),
        }
      );
    }catch (e){
      console.log(e);
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
            <input id="title" name="title" type="text" />
          </label>
          <label>
            <h2>Açıklama</h2>
            <textarea id="description" name="description" type="text" />
          </label>
          <label>
            <h2>E-mail</h2>
            <input id="email" name="email" type="text" />
          </label>
          <button type="submit">GÖNDER</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
