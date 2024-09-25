import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Import Firebase using local installation
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC4jAvfMFmx8f6f6zrMZ6BJMOO-OxhbRd0",
  authDomain: "aliasghernooruddin-c397a.firebaseapp.com",
  projectId: "aliasghernooruddin-c397a",
  storageBucket: "aliasghernooruddin-c397a.appspot.com",
  messagingSenderId: "531466438893",
  appId: "1:531466438893:web:b2658dbd84ed96db53a4e4",
  measurementId: "G-EWDGEK3V33"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
