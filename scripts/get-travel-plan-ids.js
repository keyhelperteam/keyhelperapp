const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');

if (!serviceAccount.project_id) {
  console.log('No Firebase credentials found, skipping ID fetch');
  fs.writeFileSync('.travel-plan-ids.json', '[]');
  process.exit(0);
}

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function getTravelPlanIds() {
  const snapshot = await db.collection('travelplan').select('id').get();
  const ids = snapshot.docs.map(doc => doc.id);
  console.log('Found travel plan IDs:', ids.length);
  fs.writeFileSync('.travel-plan-ids.json', JSON.stringify(ids));
}

getTravelPlanIds()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error fetching IDs:', err);
    fs.writeFileSync('.travel-plan-ids.json', '[]');
    process.exit(0);
  });