import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Signup.css';
import SignupForm from '../components/SignupForm';
import { FirebaseContext } from '../components/Firebase';
import { useHistory } from 'react-router-dom';

const Signup: React.FC<any> = (props) => {
  const history = useHistory();
  
  useEffect(()=>{
    if (props.authUser) { history.push("/") };
  }, [props.authUser])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Registrarse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FirebaseContext.Consumer>
          {firebase => <SignupForm authUser={props.authUser}  setAuthUser={props.setAuthUser} firebase={firebase}/>}
        </FirebaseContext.Consumer>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
