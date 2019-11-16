// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var lampStateChange = function (active,onColor,offColor) {
        //colour assignment
        const orange = "rgba(186, 80, 14, 1)";
        const blue = "rgba(19, 63, 122, 1)";
        const green = "rgba(52, 158, 12, 1)";
        const red = "rgba(120, 15, 15, 1)";
        const grey = "rgba(44, 44, 44, 1)";

        if (active) {
            switch (onColor) {
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
        if (!active) {
            switch (offColor) {
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
    
    TcHmi.Functions.registerFunction('lampStateChange', lampStateChange);
})(TcHmi);