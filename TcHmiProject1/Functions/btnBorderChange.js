// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var btnBorderChange = function (color) {
        //color assignment
        const orangeLight = 'rgba(229, 111, 37, 1)';
        const blueLight ="rgba(62, 103, 161, 1)";
        const greenLight ="rgba(106, 209, 68, 1)";
        const redLight = "rgba(210, 30, 30, 1)";
        const greyLight = "rgba(88, 88, 88, 1)";

        switch (color) {
            case 'orange':
                return { 'color': orangeLight }
            case 'blue':
                return { 'color': blueLight }
            case 'green':
                return { 'color': greenLight }
            case 'red':
                return { 'color': redLight }
            case 'grey':
                return { 'color': greyLight }
        }

    };
    
    TcHmi.Functions.registerFunction('btnBorderChange', btnBorderChange);
})(TcHmi);