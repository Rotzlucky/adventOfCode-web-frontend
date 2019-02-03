import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import en from '../locale/en';

i18n
    .use(reactI18nextModule)
    .init({
        resources: {
            en,
        },
        fallbackLng: 'en',
        debug: true,
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true,
        },
    });

export default i18n;