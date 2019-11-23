// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var depthIndicator = function (fillPercent,smallIndicator,fillOrigin) {

        if(!smallIndicator){
            return {
                "angle": 0.0,
                "stopPoints": [
                  {
                      "color": "rgba(0, 0, 0, 1)",
                      "stop": ((100-fillPercent)-0.5)+"%"
                  },
                  {
                      "color": "rgba(97, 134, 185, 1)",
                      "stop": (100-fillPercent)+"%"
                  }
                ]
            }
        }
        if (smallIndicator && !fillOrigin) {
            return {
                "angle": 0.0,
                "stopPoints": [
                  {
                      "color": "rgba(0, 0, 0, 1)",
                      "stop": ((100-fillPercent)-0.5) + "%"
                  },
                  {
                      "color": "rgba(244, 142, 79, 1)",
                      "stop": (100-fillPercent) + "%"
                  }
                ]
            }
        } else if (smallIndicator && fillOrigin) {
            return {
                "angle": 0.0,
                "stopPoints": [
                    {
                        "color": "rgba(244, 142, 79, 1)",
                        "stop": ((100-fillPercent)-0.5) + "%"
                    },
                  {
                      "color": "rgba(0, 0, 0, 1)",
                      "stop": (100-fillPercent) + "%"
                  }
                  
                ]
            }
        }

    };
    
    TcHmi.Functions.registerFunction('depthIndicator', depthIndicator);
})(TcHmi);

