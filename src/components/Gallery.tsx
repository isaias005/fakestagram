import React from 'react';
import { IonCol, IonRow, IonImg } from '@ionic/react';
import './Gallery.css';

const Gallery: React.FC<any> = (props) => {
  return (
    <IonRow>
      {
        props.images.map((image: any, index: any) => {
          return (
            <IonCol key={index} sizeXs="12" sizeMd="4">
              <IonImg src={image.url} />
            </IonCol>
          )
        })
      }
    </IonRow>
  );
};

export default Gallery;
