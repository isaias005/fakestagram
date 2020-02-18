import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { exit } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import Gallery from '../components/Gallery';

import './Home.css';

const Home: React.FC<any> = (props) => {
  const history = useHistory();

  const onLogout = () => {
    props.firebase
      .doSignOut()
      .then(() => {
        history.push("/login");
        alert("Desconectado");
      })
      .catch((error: Error) => {
        alert("Ocurrio un error al desconectar: " + error.message);
      });
  }
  
  useEffect(()=>{
    if (!props.authUser) { history.push("/login") };
  }, [props.authUser])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Fakestagram</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onLogout} color="light">
              <IonIcon slot="icon-only" icon={exit} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Gallery />
      </IonContent>
    </IonPage>
  );
};

export default Home;
