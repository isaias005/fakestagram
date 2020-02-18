import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { add, home } from 'ionicons/icons';
import './Tabs.css';
import Home from '../pages/Home';
import Publish from '../pages/Publish';
import { FirebaseContext } from './Firebase';


const Tabs: React.FC<any> = (props) => {
    if (props.location.pathname !== '/login' && props.location.pathname !== '/signup') {
        return (
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/:tab(home)" exact={true} >
                    <FirebaseContext.Consumer>
                        {firebase => <Home authUser={props.authUser} firebase={firebase}/>}
                    </FirebaseContext.Consumer>
                    </Route>
                    <Route path="/:tab(publish)">
                        <Publish authUser={props.authUser}/>
                    </Route>
                    <Redirect exact from="/" to="home" />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon icon={home} />
                        <IonLabel>Inicio</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="publish" href="/publish">
                        <IonIcon icon={add} />
                        <IonLabel>Publicar</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        )
    } else {
        return (
            <template>
            </template>
        )
    }
}

export default withRouter(Tabs);