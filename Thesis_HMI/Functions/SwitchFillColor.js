// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function SwitchFillColor(State, ColorZero, ColorOne, Control) {

                if (!TCHMI_ENABLE_DESIGNER_MODE_MASTER) {
                    switch (State) {
                        case 1:
                            Control.setFillColor(ColorOne);
                            break;
                        default:
                            Control.setFillColor(ColorZero);
                    }
                }

            }
            Thesis_HMI.SwitchFillColor = SwitchFillColor;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('SwitchFillColor', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.SwitchFillColor);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);