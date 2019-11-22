// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var encodeToDispArr = function (obj) {

        var outputArray = [];
        var i = 0;
        $.each(obj, function (k, value) {
            obj[k].key = k;
            outputArray[i] = obj[k];
            i++;
        })
        for (var i = 0; i < outputArray.length; i++) {
            if (typeof outputArray[i] !== 'object') {
                outputArray.splice(i, 1);
            }
        }
        return outputArray;
    };
    
    TcHmi.Functions.registerFunction('encodeToDispArr', encodeToDispArr);
})(TcHmi);