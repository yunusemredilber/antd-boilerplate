import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

// Translate Files
import messages_tr from "../locales/tr-TR.js";
import messages_en from "../locales/en-US.js";

// Languages that we sported
import locale_en from 'react-intl/locale-data/en';
import locale_tr from 'react-intl/locale-data/tr';

// Telling react-intl, we are sporting this languages
import { addLocaleData } from "react-intl";
addLocaleData([...locale_en, ...locale_tr]);

function mapStateToProps(state) {

    // Localization Configuration
    const messages = {
        'tr': messages_tr,
        'en': messages_en
    };
    const { lang } = state.env;

    return { locale: lang, messages: messages[lang]};
}

export default connect(mapStateToProps)(IntlProvider);
/*https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl*/