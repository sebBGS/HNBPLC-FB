// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var lampNStateChange = function (stateVar,stateObj,textOrColor) {

        //colour assignment
        const orange = "rgba(186, 80, 14, 1)";
        const blue = "rgba(19, 63, 122, 1)";
        const green= "rgba(52, 158, 12, 1)";
        const red = "rgba(120, 15, 15, 1)";
        const grey = "rgba(44, 44, 44, 1)";

        if (textOrColor) {
            return stateObj.states[stateVar].desc;
        } else if (!textOrColor) {
            switch (stateObj.states[stateVar].color) {
                case 'orange':
                    return { 'color': orange }
                case 'blue':
                    return { 'color': blue }
                case 'green':
                    return { 'color': green }
                case 'red':
                    return { 'color': red }
                case 'grey':
                    return { 'color': grey }
            }
        }

    };
    
    TcHmi.Functions.registerFunction('lampNStateChange', lampNStateChange);
})(TcHmi);