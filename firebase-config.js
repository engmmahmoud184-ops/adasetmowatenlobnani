// انسخ إعدادات تطبيق الويب من Firebase Console وضعها هنا.
// سيعمل الموقع ببيانات تجريبية تلقائياً إلى أن يتم إدخال القيم الحقيقية.
export const firebaseConfig = {
  apiKey: "AIzaSyAVf_xOodIoNG-WmMkQBQrCF3VeewZ_AYE",
  authDomain: "adasetmowatenlobnani.firebaseapp.com",
  projectId: "adasetmowatenlobnani",
  storageBucket: "adasetmowatenlobnani.firebasestorage.app",
  messagingSenderId: "721528445257",
  appId: "1:721528445257:web:a0e3afa4c43a12052d6298"
};

export const isFirebaseConfigured = !Object.values(firebaseConfig).some(value => value.includes("YOUR_"));
