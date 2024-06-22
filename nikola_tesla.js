const Alexa = require('ask-sdk-core');
const i18next = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

// Configuración de i18next y recursos de idiomas
const languageStrings = {
    es: {
        translation: {
            WELCOME_MSG: 'Bienvenido a Curiosidades u t h h sobre Nikola Tesla. Pide un dato curioso para comenzar.',
            FACT_MSG: 'Nikola Tesla nació el 10 de julio de 1856 en Smiljan, Croacia.',
            HELP_MSG: 'Puedes decirme, dame un dato curioso sobre Nikola Tesla, o, dime algo sobre Tesla. ¿Cómo te puedo ayudar?',
            GOODBYE_MSG: '¡Adiós!',
            ERROR_MSG: 'Lo siento, ha ocurrido un error. Por favor, intenta nuevamente.'
        }
    },
    en: {
        translation: {
            WELCOME_MSG: 'Welcome to Facts u t h h about Nikola Tesla. Ask for a fact to start.',
            FACT_MSG: 'Nikola Tesla was born on July 10, 1856, in Smiljan, Croatia.',
            HELP_MSG: 'You can say, give me a fact about Nikola Tesla, or, tell me something about Tesla. How can I help you?',
            GOODBYE_MSG: 'Goodbye!',
            ERROR_MSG: 'Sorry, an error occurred. Please try again.'
        }
    }
};

i18next
    .use(sprintf)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        resources: languageStrings,
        interpolation: {
            escapeValue: false
        }
    });

// Interceptor para manejar la localización
const LocalizationInterceptor = {
    process(handlerInput) {
        const localizationClient = i18next.cloneInstance({ lng: handlerInput.requestEnvelope.request.locale });
        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = function (...args) {
            return localizationClient.t(...args);
        };
    }
};

// Interceptores de solicitud y respuesta para registrar información
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

const LoggingResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

// Datos de curiosidades en español e inglés.
const data = {
    "es": [
        "Nikola Tesla nació el 10 de julio de 1856 en Smiljan, Croacia.",
        "Tesla es conocido por sus contribuciones al desarrollo del sistema de corriente alterna (CA).",
        "Inventó la bobina de Tesla, un dispositivo que aún se usa en tecnología de radio y televisión.",
        "Tesla tenía la capacidad de visualizar sus invenciones en su mente con detalle preciso, sin necesidad de planos.",
        "Trabajó brevemente con Thomas Edison antes de que sus diferencias personales y profesionales los separaran.",
        "Tesla imaginó la transmisión de energía inalámbrica y realizó experimentos en su laboratorio de Colorado Springs.",
        "Tuvo más de 300 patentes a su nombre a lo largo de su vida.",
        "Murió el 7 de enero de 1943 en Nueva York, prácticamente en la pobreza, aunque hoy se le reconoce como uno de los más grandes inventores de la historia."
    ],
    "en": [
        "Nikola Tesla was born on July 10, 1856, in Smiljan, Croatia.",
        "Tesla is known for his contributions to the development of the alternating current (AC) system.",
        "He invented the Tesla coil, a device still used in radio and television technology.",
        "Tesla had the ability to visualize his inventions in his mind with precise detail, without the need for drawings.",
        "He briefly worked with Thomas Edison before their personal and professional differences separated them.",
        "Tesla envisioned wireless power transmission and conducted experiments in his Colorado Springs laboratory.",
        "He held over 300 patents in his name throughout his life.",
        "He died on January 7, 1943, in New York, virtually penniless, though today he is recognized as one of the greatest inventors in history."
    ]
};

// Manejador para el intent GetFactIntent
const GetFactIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'GetFactIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.substring(0, 2); // Obtiene los primeros dos caracteres del locale (e.g., "es" o "en")
        const factList = data[language];
        const fact = factList[Math.floor(Math.random() * factList.length)];
        const speakOutput = handlerInput.attributesManager.getRequestAttributes().t('FACT_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput + ' ' + fact)
            .getResponse();
    }
};

// Manejador para el intent LaunchRequest
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = handlerInput.attributesManager.getRequestAttributes().t('WELCOME_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Manejador para el intent HelpIntent
const HelpIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = handlerInput.attributesManager.getRequestAttributes().t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Manejador para los intents CancelIntent y StopIntent
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' &&
            (request.intent.name === 'AMAZON.CancelIntent' || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = handlerInput.attributesManager.getRequestAttributes().t('GOODBYE_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

// Manejador para el intent SessionEndedRequest
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

// Manejador para errores
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        const locale = handlerInput.requestEnvelope.request.locale;
        const speakOutput = handlerInput.attributesManager.getRequestAttributes().t('ERROR_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// Registro de los manejadores e interceptores
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        GetFactIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler
    )
    .addRequestInterceptors(
        LoggingRequestInterceptor,
        LocalizationInterceptor
    )
    .addResponseInterceptors(
        LoggingResponseInterceptor
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
