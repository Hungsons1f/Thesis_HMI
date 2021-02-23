// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function GetUserData(par1) {
                var username;
                var userdata;
                var result = "{";

                let [username, userdata] = await Promise.all([
                    TcHmi.Server.UserManagement.listUsernames(function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            username = data.userList;
                            console.log(data.userList);
                        } else {
                            console.log(data);
                        }
                    }),
                    TcHmi.Server.UserManagement.listUsers(function (data) {
                        if (data.error === TcHmi.Errors.NONE) {
                            userdata = JSON.parse(data.userDetails);
                            console.log(data.userDetails);
                        } else {
                            console.log(data);
                        }
                    })
                ]);



                for (var i in userdata) {
                    result = result + username[i] + userdata[i]; 
                }

                console.log(result);
            }
            Thesis_HMI.GetUserData = GetUserData;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('GetUserData', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.GetUserData);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);