import React, { useState } from 'react';
import { IonRow, IonCol, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './LoginForm.css';
import { useHistory } from 'react-router-dom';

const LoginForm: React.FC<any> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isInvalid = email === '' || password === '';
  const history = useHistory();

  const onLogin = () => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((user: any) => {
        props.setAuthUser(user.user.uid);
        setEmail("");
        setPassword("");
        alert("Logueado exitosamente");
      })
      .catch((error: Error) => {
        alert("Ocurrio un error al loguear: " + error.message);
      });
  }

  const goToSignup = () => {
    history.push("/signup");
  }

  return (
    <IonRow className="ion-justify-content-center ion-align-items-center full-height">
      <IonCol sizeSm="6" sizeMd="3">
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput autocomplete="on" type="email" value={email} onIonChange={(e: any) => setEmail(e.target.value || "")}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput autocomplete="on" type="password" value={password} onIonChange={(e: any) => setPassword(e.target.value || "")}></IonInput>
            </IonItem>
            <IonRow className="ion-justify-content-center ion-padding-top">
              <IonButton disabled={isInvalid} onClick={onLogin}>Loguearse</IonButton>
            </IonRow>
            <IonRow className="ion-justify-content-center ion-padding-top">
              <IonButton onClick={goToSignup} fill="clear">Ya tienes una cuenta? Registrate</IonButton>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default LoginForm;
