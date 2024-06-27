const Alexa = require('ask-sdk-core');

const unitConversions = {
    "centímetros": { "pulgadas": 0.393701, "pies": 0.0328084 },
    "metros": { "yardas": 1.09361, "pies": 3.28084 },
    "kilómetros": { "millas": 0.621371 },
    "pulgadas": { "centímetros": 2.54, "metros": 0.0254 },
    "pies": { "centímetros": 30.48, "metros": 0.3048 },
    "millas": { "kilómetros": 1.60934 },
    "centimeters": { "inches": 0.393701, "feet": 0.0328084 },
    "meters": { "yards": 1.09361, "feet": 3.28084 },
    "kilometers": { "miles": 0.621371 },
    "inches": { "centimeters": 2.54, "meters": 0.0254 },
    "feet": { "centimeters": 30.48, "meters": 0.3048 },
    "miles": { "kilometers": 1.60934 }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('es')
            ? 'U T H H ¡Bienvenido al Conversor de Unidades! ¿Qué conversión te gustaría realizar?'
            : 'U T H H .Welcome to Unit Converter! What conversion would you like to perform?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ConvertUnitsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConvertUnitsIntent';
    },
    handle(handlerInput) {
        const { requestEnvelope, responseBuilder } = handlerInput;
        const fromUnit = Alexa.getSlotValue(requestEnvelope, 'fromUnit').toLowerCase();
        const toUnit = Alexa.getSlotValue(requestEnvelope, 'toUnit').toLowerCase();
        const value = parseFloat(Alexa.getSlotValue(requestEnvelope, 'value'));
        const locale = Alexa.getLocale(requestEnvelope);

        console.log(`From Unit: ${fromUnit}`);
        console.log(`To Unit: ${toUnit}`);
        console.log(`Value: ${value}`);
        console.log(`Locale: ${locale}`);

        let conversionFactor;
        let speakOutput;

        if (isNaN(value)) {
            speakOutput = locale.startsWith('es')
                ? 'Lo siento, no entendí la cantidad que quieres convertir. Por favor, inténtalo de nuevo.'
                : 'I\'m sorry, I didn\'t understand the amount you want to convert. Please try again.';
        } else if (unitConversions[fromUnit] && unitConversions[fromUnit][toUnit]) {
            conversionFactor = unitConversions[fromUnit][toUnit];
            const convertedValue = value * conversionFactor;
            speakOutput = locale.startsWith('es')
                ? `U T H H.La conversión de ${value} ${fromUnit} es aproximadamente ${convertedValue.toFixed(2)} ${toUnit}.`
                : `U T H H. The conversion of ${value} ${fromUnit} is approximately ${convertedValue.toFixed(2)} ${toUnit}.`;
        } else {
            speakOutput = locale.startsWith('es')
                ? `Lo siento, no puedo convertir de ${fromUnit} a ${toUnit}. Por favor, intenta con otra unidad.`
                : `I'm sorry, I can't convert from ${fromUnit} to ${toUnit}. Please try with another unit.`;
        }

        return responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('es')
            ? 'Puedes pedirme que convierta unidades del sistema métrico al sistema inglés y viceversa. ¿Cómo te puedo ayudar?'
            : 'You can ask me to convert units from the metric system to the imperial system and vice versa. How can I help you?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
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
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('es')
            ? '¡Adiós!'
            : 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        ConvertUnitsIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler
    )
    .lambda();
