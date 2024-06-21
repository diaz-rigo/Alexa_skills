const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola, soy Alexa, bienvenido a mi calculadora u t h h. ¿Qué operación te gustaría realizar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const calcularManejador = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'calcular';
    },
    handle(handlerInput) {
        const operacion = handlerInput.requestEnvelope.request.intent.slots.operacion.value;
        const primer_numero = Number(handlerInput.requestEnvelope.request.intent.slots.primer_numero.value);
        const segundo_numero = handlerInput.requestEnvelope.request.intent.slots.segundo_numero ? Number(handlerInput.requestEnvelope.request.intent.slots.segundo_numero.value) : null;
        let resultado = 0;
        let tipo_operacion = '';

        switch (operacion) {
            case 'multiplicar':
                tipo_operacion = 'multiplicación';
                resultado = primer_numero * segundo_numero;
                break;
            case 'dividir':
                tipo_operacion = 'división';
                resultado = primer_numero / segundo_numero;
                break;
            case 'restar':
                tipo_operacion = 'resta';
                resultado = primer_numero - segundo_numero;
                break;
            case 'sumar':
                tipo_operacion = 'suma';
                resultado = primer_numero + segundo_numero;
                break;
            case 'raiz':
                tipo_operacion = 'raíz cuadrada';
                resultado = Math.sqrt(primer_numero);
                break;
            case 'raíz':
                tipo_operacion = 'raíz cuadrada';
                resultado = Math.sqrt(primer_numero);
                break;
            case 'seno':
                tipo_operacion = 'seno';
                resultado = Math.sin(primer_numero);
                break;
            default:
                tipo_operacion = 'desconocida';
                resultado = 'Operación no soportada';
        }

        const speakOutput = `calculadora u t h h El resultado de la ${tipo_operacion} es ${resultado}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes pedirme que realice operaciones matemáticas como sumar, restar, multiplicar, dividir, calcular la raíz cuadrada o el seno. ¿Qué operación te gustaría realizar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿Qué operación te gustaría realizar?')
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Adiós!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no sé sobre eso. Por favor intenta nuevamente.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Acabas de activar ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor intenta nuevamente.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        calcularManejador,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
