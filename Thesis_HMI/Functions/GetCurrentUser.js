// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function GetCurrentUser(par1) {
                return TcHmi.Server.getCurrentUser();
            }
            Thesis_HMI.GetCurrentUser = GetCurrentUser;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('GetCurrentUser', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.GetCurrentUser);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);