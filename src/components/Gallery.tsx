import React from 'react';
import { IonCol, IonRow, IonImg } from '@ionic/react';
import './Gallery.css';

const Gallery: React.FC<any> = (props) => {
  return (
    <IonRow>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://www.movilzona.es/app/uploads/2018/10/app-foto-movimiento.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://www.fotojet.com/n_img/home/effect.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://www.softzone.es/app/uploads-softzone.es/2019/08/Retocar-fotos.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://d500.epimg.net/cincodias/imagenes/2015/07/10/lifestyle/1436542079_444263_1436543394_noticia_normal.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://static.vix.com/es/sites/default/files/bruno-bezerra-foto-agua-0617.gif"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/58.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://i.blogs.es/5efe2c/cap_001/450_1000.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Tramonto_su_Brescia_%28Foto_Luca_Giarelli%29.jpg"/>
      </IonCol>
      <IonCol sizeXs="12" sizeMd="4">
        <IonImg src="https://www.fotor.com/es/loopBannerImg/indexBannerImg/banner-01.jpg"/>
      </IonCol>
    </IonRow>
  );
};

export default Gallery;
