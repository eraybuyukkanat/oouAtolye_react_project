import { uiActions } from "./ui-slice";

export const sendContactData = (data) => {
    return async (dispatch)=>{

    
  const sendRequest = async () => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Mesaj gönderiliyor...",
        message: "Gönderiliyor",
      })
    );
    const response = await fetch(
      "https://react-http-901a1-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
  };

  try{
    await sendRequest();
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Mesaj gönderildi!",
        message: "Mesaj gönderildi!",
      })
    );
    
    
  }catch(error){
    dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Hata!",
        message: "Hata!",
      })
    ); 
  }
}
};
