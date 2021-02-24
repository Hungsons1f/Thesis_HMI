// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (TcHmi) {
    var Functions;
    (function (Functions) {
        var Thesis_HMI;
        (function (Thesis_HMI) {
            function JsonParse(userName, userData) {
                var obj = JSON.parse(userData);
                var name = JSON.parse(userName);
                var array = [];

                var i = 0;
                for (var k in obj) {
                    var x = {
                        'name': name[i++],
                        'enabled': obj[k].enabled,
                        'autoLogout': obj[k].autoLogout,
                        'groups': obj[k].groups
                    }
                    array.push(x);
                }

                return array;
            }
            Thesis_HMI.JsonParse = JsonParse;
        })(Thesis_HMI = Functions.Thesis_HMI || (Functions.Thesis_HMI = {}));
        Functions.registerFunctionEx('JsonParse', 'TcHmi.Functions.Thesis_HMI', Thesis_HMI.JsonParse);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);