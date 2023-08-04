import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import en from './en'; // Import the English messages
import es from './es'; // Import the Spanish messages

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: en,
    es: es,
  }
});

export default i18n;
