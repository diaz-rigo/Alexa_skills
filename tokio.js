const Alexa = require("ask-sdk-core");

const DOCUMENT_ID_TouristSpotsTemplate = "TouristSpotsTemplate";
const DOCUMENT_ID_FoodTemplate = "FoodTemplate";
const DOCUMENT_ID_TraditionalDressTemplate = "TraditionalDressTemplate";
const DOCUMENT_ID_FamousPeopleTemplate = "FamousPeopleTemplate";
const DOCUMENT_ID_MusicTemplate = "MusicTemplate";
const DOCUMENT_ID_CityDescriptionTemplate = "CityDescriptionTemplate";

const datasource_MusicTemplate = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://res.cloudinary.com/dfd0b4jhf/video/upload/v1719995718/sound/dmem0tudm1gnlj5h2nnv.mp3"
            ],
            "backgroundImage": "https://grupo.iberia.es/contents/archives/475/109/images/thumb730x320_width/tokio-b0d4e_thumb.jpg",
            "coverImageSource": "http://www.esjapon.com/wp/wp-content/uploads/2020/10/Oct2020_EMJ-Otono-Cultural-Japones_main.jpg",
            "headerTitle": "'La música típica",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Roses",
            "secondaryText": "OTOÑO CULTURAL JAPONÉS",
            "sliderType": "determinate"
        }
    }
};


const datasource_CityDescriptionTemplate = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://res.cloudinary.com/dfd0b4jhf/image/upload/v1719996749/sound/tnzpq9zfkt6lzulnshol.png",
            "displayFullscreen": false,
            "headerTitle": "presentacion de tokio  ---- APL ",
            "headerSubtitle": "",
            "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "videoControlType": "skip",
            "videoSources": [
                "https://res.cloudinary.com/dfd0b4jhf/video/upload/v1719993892/sound/mdlf3yykkkc57ny53szr.mp4",
                "https://d2o906d8ln7ui1.cloudfront.net/videos/AdobeStock_292807382.mov"
            ],
            "sliderType": "determinate"
        }
    }
};

const datasource_FamousPeopleTemplate = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://res.cloudinary.com/dfd0b4jhf/image/upload/v1719997111/sound/yknoqion2abzzawnredu.png",
            "foregroundImageLocation": "left",
            "foregroundImageSource": "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2010/3/23/1269346127378/Akira-Kurosawa-001.jpg?width=620&dpr=2&s=none",
            "headerTitle": "Famous People",
            "headerSubtitle": "",
            "hintText": "persona sobresaliente",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "fue un aclamado director, guionista y productor de cine japonés, conocido por sus influyentes y revolucionarias películas. Nacido el 23 de marzo de 1910 en Tokio, Kurosawa comenzó su carrera en el cine a fines de la década de 1930. Su estilo distintivo y su narrativa visual le ganaron reconocimiento internacional.   Entre sus obras más famosas se encuentran \"Rashomon\" (1950), que introdujo la narrativa de perspectivas múltiples al cine, y \"Los Siete Samuráis\" (1954), una epopeya que ha influenciado innumerables películas de acción. Kurosawa también es conocido por su habilidad para adaptar obras literarias occidentales, como en \"Ran\" (1985), basada en \"El Rey Lear\" de Shakespeare.  A lo largo de su carrera, Kurosawa ganó numerosos premios y reconocimientos, incluidos el León de Oro en el Festival de Cine de Venecia y el Oscar Honorífico por su trayectoria. Su legado perdura en el cine contemporáneo, y es considerado uno de los más grandes cineastas de todos los tiempos.",
            "textAlignment": "start",
            "titleText": "Akira Kurosawa"
        }
    }
};


const datasource_TraditionalDressTemplate = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://res.cloudinary.com/dfd0b4jhf/image/upload/v1719997111/sound/yknoqion2abzzawnredu.png",
                    "size": "large"
                }
            ]
        },
        "title": "El traje típico de Tokio es el kimono, una prenda tradicional japonesa usada en ocasiones especiales",
        "listItems": [
            {
                "primaryText": "Kimono",
                "imageSource": "https://m.media-amazon.com/images/I/6127rAFk5-L._AC_SX679_.jpg"
            },
            {
                "primaryText": "Yukata",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Himeji_Yukata_Matsuri_2009p1_006.jpg/450px-Himeji_Yukata_Matsuri_2009p1_006.jpg"
            },
            {
                "primaryText": "Hakama",
                "imageSource": "https://lr3-studio.com/wp-content/uploads/2020/10/lr3-theghost_hakama_blackfront-1-1920x1280.jpg"
            },
            {
                "primaryText": "Haori",
                "imageSource": "https://agnes.store/cdn/shop/products/HaoriL_Anahita_S2.png?v=1680052166&width=990"
            },
            {
                "primaryText": "Furisode",
                "imageSource": "https://muza-chan.net/aj/poze-weblog4/coming-age-day-seijin-no-hi-big.jpg"
            },
            {
                "primaryText": "Jinbei",
                "imageSource": "https://mcraftsmanship.com/cdn/shop/products/Jinbeisetm_900x.jpg?v=1640919609"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
        "hintText": "Traje típico*"
    }
};

const datasource_FoodTemplate = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://res.cloudinary.com/dfd0b4jhf/image/upload/v1719996749/sound/ad9rl4jtizsicqanhjwk.png",
            "headerTitle": "",
            "headerSubtitle": "",
            "headerAttributionImage": "",
            "primaryText": "La comida típica de Tokio incluye sushi, ramen y tempura.",
            "listItems": [
                {
                    "primaryText": "Sushi",
                    "secondaryText": " arroz avinagrado acompañado de diversos ingredientes,",
                    "thumbnailImage": "https://i.blogs.es/602b31/como-hacer-sushi-empanizado/450_1000.png"
                },
                {
                    "primaryText": "Ramen",
                    "secondaryText": "sopa de fideos japonesa",
                    "thumbnailImage": "https://www.hola.com/horizon/landscape/2f899a0850e1-ramen-adobe-t.jpg"
                },
                {
                    "primaryText": "Tempura",
                    "secondaryText": "mariscos y verduras cubiertos ",
                    "thumbnailImage": "https://s2.abcstatics.com/media/gurme/2023/08/28/s/verduras-en-tempura.jpg-kI0B--940x529@abc.jpg"
                },
                {
                    "primaryText": "Sashimi",
                    "secondaryText": "pescado o mariscos crudos",
                    "thumbnailImage": "https://monstersushi.es/blog/wp-content/uploads/2022/06/Sushi-Clasic-Completo-2048x1365.jpg"
                },
                {
                    "primaryText": "Yakitori",
                    "secondaryText": "brochetas de pollo asadas a la parrilla",
                    "thumbnailImage": "https://i.blogs.es/fc7b31/yakitori-de-pollo/450_1000.jpg"
                },
                {
                    "primaryText": "Okonomiyaki",
                    "secondaryText": "especie de panqueque salado japonés ",
                    "thumbnailImage": "https://es.wikipedia.org/wiki/Okonomiyaki#/media/Archivo:Okonomiyaki_001.jpg"
                }
            ]
        }
    }
};


const datasource_TouristSpotsTemplate = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://res.cloudinary.com/dfd0b4jhf/image/upload/v1719997111/sound/yknoqion2abzzawnredu.png",
                    "size": "large"
                }
            ]
        },
        "title": "TouristSpotsTemplate",
        "listItems": [
            {
                "primaryText": "Templo Sensoji",
                "imageSource": "https://www.viaje.jp/wp/wp-content/uploads/2019/08/nicholas-doherty-5aSIRVGoB9s-unsplash-400x267.jpg"
            },
            {
                "primaryText": "Torre de Tokio",
                "imageSource": "https://vivetokio.com/wp-content/uploads/2020/12/visitar-la-torre-de-tokio-1024x576.jpg"
            },
            {
                "primaryText": "Cruce de Shibuya",
                "imageSource": "https://s1.ppllstatics.com/lasprovincias/www/multimedia/201710/06/media/cortadas/cruce-shibuya-tokio-k8BI-U40966758710PvF-624x385@Las%20Provincias.jpg"
            },
            {
                "primaryText": "Palacio Imperial de Tokio",
                "imageSource": "https://images.ecestaticos.com/wVBDEHmcRPWtGLwVtkUfdLdxFLA=/78x34:2133x1576/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F231%2F8b4%2F774%2F2318b4774ef5831c29cf78aa00afdcc8.jpg"
            },
            {
                "primaryText": "Barrio de Asakusa",
                "imageSource": "https://japon-secreto.com/wp-content/uploads/2021/05/asakusa-sensoji02-1068x744.jpg"
            },
            {
                "primaryText": "Parque Ueno",
                "imageSource": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/63/14.jpg"
            }
        ],
        "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/logo/logo-modern-botanical-white.png",
        "hintText": "Try, \"Alexa, lugares turísticos en Tokio \""
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido, puedes preguntarme sobre Tokio. ¿Qué te gustaría saber?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_CityDescriptionTemplate, datasource_CityDescriptionTemplate);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log("APL no es soportado en este dispositivo.");
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const DescriptionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescriptionIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Tokio es la capital de Japón y una de las ciudades más grandes del mundo. Es conocida por su mezcla de modernidad y tradición.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const TouristSpotsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TouristSpotsIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Algunos lugares turísticos populares en Tokio son el Templo Sensoji, la Torre de Tokio y el Cruce de Shibuya.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TouristSpotsTemplate, datasource_TouristSpotsTemplate);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log("APL no es soportado en este dispositivo.");
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FoodIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La comida típica de Tokio incluye sushi, ramen y tempura.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_FoodTemplate, datasource_FoodTemplate);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log("APL no es soportado en este dispositivo.");
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const TraditionalDressIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TraditionalDressIntent';
    },
    handle(handlerInput) {
      const speakOutput = `
1. Kimono: El kimono es una prenda tradicional japonesa usada en ocasiones especiales. Es una vestimenta larga y amplia, generalmente hecha de seda, con mangas largas y un cinturón llamado obi.

2. Yukata: El yukata es una versión más ligera y casual del kimono, hecha de algodón. Se usa comúnmente en festivales de verano y baños termales (onsen).

3. Hakama: El hakama es una prenda que se asemeja a unos pantalones anchos o una falda dividida, y se usa sobre el kimono. Es común en ceremonias formales y artes marciales.

4. Haori,5. Furisode,6. Jinbei.
`;
 if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TraditionalDressTemplate, datasource_TraditionalDressTemplate);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log("APL no es soportado en este dispositivo.");
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FamousPeopleIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FamousPeopleIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Algunas personas sobresalientes de Tokio incluyen al director de cine Akira Kurosawa y al escritor Haruki Murakami.';

       if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_FamousPeopleTemplate, datasource_FamousPeopleTemplate);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log("APL no es soportado en este dispositivo.");
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MusicIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'La música típica de Tokio incluye el J-pop y la música tradicional japonesa como el enka.';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_MusicTemplate, datasource_MusicTemplate);
            handlerInput.responseBuilder.addDirective(aplDirective);
        } else {
            console.log("APL no es soportado en este dispositivo.");
        }

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
        const speakOutput = 'Puedes preguntarme sobre Tokio, como sus lugares turísticos, comida típica y más. ¿Cómo puedo ayudarte?';

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
        const speakOutput = 'Lo siento, no sé sobre eso. Por favor intenta de nuevo.';

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
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
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
        const speakOutput = 'Lo siento, tuve problemas para hacer lo que pediste. Por favor intenta de nuevo.';
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
        DescriptionIntentHandler,
        TouristSpotsIntentHandler,
        FoodIntentHandler,
        TraditionalDressIntentHandler,
        FamousPeopleIntentHandler,
        MusicIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
