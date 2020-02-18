import React, { useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Login.css";
import LoginForm from '../components/LoginForm';
import { FirebaseContext } from '../components/Firebase';
import { useHistory } from "react-router-dom";

const Login: React.FC<any> = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (props.authUser) { history.push("/") };
  }, [props.authUser])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FirebaseContext.Consumer>
          {firebase => <LoginForm authUser={props.authUser} setAuthUser={props.setAuthUser} firebase={firebase} />}
        </FirebaseContext.Consumer>
      </IonContent>
    </IonPage>
  );
};

export default Login;
