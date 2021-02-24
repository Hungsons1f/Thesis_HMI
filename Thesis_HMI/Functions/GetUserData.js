// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function GetUserData(par1) {
                TcHmi.Server.UserManagement.listUsernames(function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        //console.log(data.userList); 
                        TcHmi.Symbol.writeEx("%i%sUserName%/i%", data.userList);
                    } else {
                        // Error
                        //console.log(data);
                    }
                });

                TcHmi.Server.UserManagement.listUsersEx(
                    null,
                    { timeout: 2000 },
                    function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            //console.log(data.userDetails);
                            TcHmi.Symbol.writeEx("%i%sUserData%/i%", data.userDetails);
                        } else {
                            // Error
                            //console.log(data);
                        }
                    }
                );
            }
            Thesis_HMI.GetUserData = GetUserData;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('GetUserData', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.GetUserData);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
