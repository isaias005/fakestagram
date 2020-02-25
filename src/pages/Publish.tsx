import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Publish.css';

const Publish: React.FC<any> = (props) => {
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    if (!props.authUser) { history.push("/login") };
  }, [props.authUser])

  const onUploadImage = () => {
    if (imageUrl && /\.(jpg|gif|png)$/.test(imageUrl)) {
      props.firebase.uploadImage(imageUrl)
        .then(() => {
          alert("Imagen subida.");
        })
        .catch((err: Error) => {
          alert(err.message);
        })
    } else {
      alert("Pon un link de una imagen (jpg/png/gif)");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Fakestagram</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="ion-justify-content-center ion-align-items-center full-height">
          <IonCol sizeSm="6" sizeMd="3">
            <IonCard>
              <IonCardContent>
                <IonItem>
                  <IonLabel position="floating">Link de imagen</IonLabel>
                  <IonInput autocomplete="on" type="text" value={imageUrl} onIonChange={(e: any) => setImageUrl(e.target.value || "")}></IonInput>
                </IonItem>
                <IonRow className="ion-justify-content-center ion-padding-top">
                  <IonButton onClick={onUploadImage}>Subir imagen</IonButton>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Publish;
