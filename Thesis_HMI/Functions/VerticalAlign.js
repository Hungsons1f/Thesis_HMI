// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function VerticalAlign(par1) {
                var el = document.getElementById("UcSwitch");
                var x = window.screen.height;
                $(el).css({
                    top: (x * 5 / 480) + "px"
                });

                console.log("hello");
            }
            Thesis_HMI.VerticalAlign = VerticalAlign;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('VerticalAlign', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.VerticalAlign);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);