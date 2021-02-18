// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            var FillColor = function FillColor(State, Control) {

                if (!TCHMI_ENABLE_DESIGNER_MODE_MASTER) {
                    var _gray = TcHmi.Symbol.readEx('%i%clDefaultGray%/i%');
                    var _green = TcHmi.Symbol.readEx('%i%clDefaultGreen%/i%');
                    var _yellow = TcHmi.Symbol.readEx('%i%clDefaultYellow%/i%');
                    var _red = TcHmi.Symbol.readEx('%i%clDefaultRed%/i%');
                    var _blue = TcHmi.Symbol.readEx('%i%clDefaultBlue%/i%');

                    switch (State) {
                        case 1:
                            Control.setFillColor(_green);
                            break;
                        case 2:
                            Control.setFillColor(_yellow);
                            break;
                        case 3:
                            Control.setFillColor(_red);
                            break;
                        case 4:
                            Control.setFillColor(_blue);
                            break;
                        default:
                            Control.setFillColor(_gray);
                    }
                }




            }
            Thesis_HMI.FillColor = FillColor;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('FillColor', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.FillColor);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);