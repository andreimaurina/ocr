const functions = require('firebase-functions');
// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'; // Firebase
import * as vision from '@google-cloud/vision'; // Cloud Vision
admin.initializeApp();

const visionClient =  new vision.ImageAnnotatorClient();

// Dedicated bucket for cloud function invocation
const bucketName = 'ocr-2019-bb841.appspot.com';

export const imageTagger = functions.storage
    
    .bucket(bucketName)
    .object()
    .onChange( async event => {

        // File data
        const object = event.data;
        const filePath = object.name;   

        // Location of saved file in bucket
        const imageUri = `gs://${bucketName}/${filePath}`;

        const docId = filePath.split('.jpg')[0];

        const docRef  = admin.firestore().collection('photos').doc(docId);

        // Await the cloud vision response
        const results = await visionClient.labelDetection(imageUri);

        // Map the data to desired format
        const labels = results[0].labelAnnotations.map(obj => obj.description);
        const hotdog = labels.includes('hot dog')


        return docRef.set({ hotdog, labels })           
});