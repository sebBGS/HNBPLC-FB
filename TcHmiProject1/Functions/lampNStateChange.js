// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var lampNStateChange = function (stateVar,colorTarget) {

        //colour assignment
        const orangeDark = "rgba(186, 80, 14, 1)";
        const orangeLight = "rgba(229, 111, 37, 1)";
        const blueDark = "rgba(19, 63, 122, 1)";
        const blueLight = "rgba(62, 103, 161, 1)";
        const greenDark = "rgba(52, 158, 12, 1)";
        const greenLight = "rgba(106, 209, 68, 1)";
        const redDark = "rgba(120, 15, 15, 1)";
        const redLight = "rgba(210, 30, 30, 1)";
        const greyDark = "rgba(44, 44, 44, 1)";
        const greyLight = "rgba(88, 88, 88, 1)";

        switch (colorTarget) {
            case fill:
                switch (stateVar) {
                    //red
                    case 0:
                        return {
                            "angle": 180.0,
                            "stopPoints": [
                              {
                                  "color": redLight,
                                  "stop": "0%"
                              },
                              {
                                  "color": redDark,
                                  "stop": "100%"
                              }
                            ]
                        }
                        //orange
                    case 1:
                        return {
                            "angle": 180.0,
                            "stopPoints": [
                              {
                                  "color": orangeLight,
                                  "stop": "0%"
                              },
                              {
                                  "color": orangeDark,
                                  "stop": "100%"
                              }
                            ]
                        }
                        //grey
                    case 2:
                        return {
                            "angle": 180.0,
                            "stopPoints": [
                              {
                                  "color": greyLight,
                                  "stop": "0%"
                              },
                              {
                                  "color": greyDark,
                                  "stop": "100%"
                              }
                            ]
                        }
                        //blue
                    case 3:
                        return {
                            "angle": 180.0,
                            "stopPoints": [
                              {
                                  "color": blueLight,
                                  "stop": "0%"
                              },
                              {
                                  "color": blueDark,
                                  "stop": "100%"
                              }
                            ]
                        }
                        //green
                    case 4:
                        return {
                            "angle": 180.0,
                            "stopPoints": [
                              {
                                  "color": greenLight,
                                  "stop": "0%"
                              },
                              {
                                  "color": greenDark,
                                  "stop": "100%"
                              }
                            ]
                        }
                }
            case border:
                switch (stateVar) {
                    //red
                    case '0':
                        return { 'color': redLight }
                    //orange
                    case '1':
                        return { 'color': orangeLight }
                    //grey
                    case '2':
                        return { 'color': greyLight }
                    //blue
                    case '3':
                        return { 'color': blueLight }
                    //green
                    case '4':
                        return { 'color': greenLight }   
                }
        }

    };
    
    TcHmi.Functions.registerFunction('lampNStateChange', lampNStateChange);
})(TcHmi);