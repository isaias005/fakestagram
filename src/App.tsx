import React, { useState, useEffect, useContext } from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Tabs from './components/Tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { FirebaseContext } from './components/Firebase';

const App: React.FC = () => {
  const [authUser, setAuthUser] = useState<string>("");
  const firebase: any = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser:any)=>{
      authUser ? setAuthUser(authUser.uid) : setAuthUser("");
    })
  })

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login">
            <Login authUser={authUser} setAuthUser={setAuthUser} />
          </Route>
          <Route path="/signup">
            <Signup authUser={authUser} setAuthUser={setAuthUser} />
          </Route>
        </IonRouterOutlet>
        <Tabs authUser={authUser} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
