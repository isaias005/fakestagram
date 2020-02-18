import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Publish.css';

const Publish: React.FC<any> = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (!props.authUser) { history.push("/login") };
  }, [props.authUser])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Fakestagram</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Publish;
