// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var btnStateChange = function (enabled,active,onColor,offColor) {
        //colour assignment
        const orangeDark = "rgba(186, 80, 14, 1)";
        const orangeLight = enabled ? "rgba(229, 111, 37, 1)" : orangeDark;
        const blueDark = "rgba(19, 63, 122, 1)";
        const blueLight = enabled ? "rgba(62, 103, 161, 1)" : blueDark;
        const greenDark = "rgba(52, 158, 12, 1)";
        const greenLight = enabled ? "rgba(106, 209, 68, 1)" : greenDark;
        const redDark = "rgba(120, 15, 15, 1)";
        const redLight = enabled ? "rgba(210, 30, 30, 1)" : redDark;
        const greyDark = "rgba(44, 44, 44, 1)";
        const greyLight = enabled ? "rgba(88, 88, 88, 1)" : greyDark;

        if (active) {
            switch (onColor) {
                case 'orange':
                    return {
                        "angle": 180.0,
                        "stopPoints": [
                          {
                              "color": orangeDark,
                              "stop": "0%"
                          },
                          {
                              "color": orangeLight,
                              "stop": "100%"
                          }
                        ]
                    }
                case 'blue':
                    return {
                        "angle": 180.0,
                        "stopPoints": [
                          {
                              "color": blueDark,
                              "stop": "0%"
                          },
                          {
                              "color": blueLight,
                              "stop": "100%"
                          }
                        ]
                    }
                case 'green':
                    return {
                        "angle": 180.0,
                        "stopPoints": [
                          {
                              "color": greenDark,
                              "stop": "0%"
                          },
                          {
                              "color": greenLight,
                              "stop": "100%"
                          }
                        ]
                    }
                case 'red':
                    return {
                        "angle": 180.0,
                        "stopPoints": [
                          {
                              "color": redDark,
                              "stop": "0%"
                          },
                          {
                              "color": redLight,
                              "stop": "100%"
                          }
                        ]
                    }
                case 'grey':
                    return {
                        "angle": 180.0,
                        "stopPoints": [
                          {
                              "color": greyDark,
                              "stop": "0%"
                          },
                          {
                              "color": greyLight,
                              "stop": "100%"
                          }
                        ]
                    }
            }
        }
        if (!active) {
            switch (offColor) {
                case 'orange':
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
                case 'blue':
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
                case 'green':
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
                case 'red':
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
                case 'grey':
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
            }
        }
    };
    
    TcHmi.Functions.registerFunction('btnStateChange', btnStateChange);
})(TcHmi);