// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function Num2Time(Num) {
                var hours = Math.floor(Num / 3600);
                var minutes = Math.floor((Num - hours*3600) / 60);
                var seconds = Num - hours * 3600 - minutes * 60;
                return String('00' + hours).slice(-2) + ":" + String('00' + minutes).slice(-2) + ":" + String('00' + seconds).slice(-2);
            }
            Thesis_HMI.Num2Time = Num2Time;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('Num2Time', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.Num2Time);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);