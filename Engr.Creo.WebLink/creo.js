///<reference path='includes.ts'/>
var Creo;
(function (Creo) {
    var global;
    var Connect = (function () {
        function Connect() {
            global = new ActiveXObject("pfc.MpfcCOMGlobal");
        }
        Object.defineProperty(Connect.prototype, "version", {
            get: function () {
                return global.GetProEVersion();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Connect.prototype, "buildCode", {
            get: function () {
                return global.GetProEBuildCode();
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Connect.prototype, "session", {
            get: function () {
                return new Session(global.GetProESession());
            },
            enumerable: true,
            configurable: true
        });
        return Connect;
    })();
    Creo.Connect = Connect;

    var Session = (function () {
        function Session(session) {
            this.o = session;
        }
        Object.defineProperty(Session.prototype, "directory", {
            get: function () {
                return this.o.GetCurrentDirectory();
            },
            set: function (path) {
                this.o.ChangeDirectory(path);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Session.prototype, "connectionId", {
            get: function () {
                return this.o.ConnectionId;
            },
            enumerable: true,
            configurable: true
        });
        return Session;
    })();
    Creo.Session = Session;
})(Creo || (Creo = {}));
///<reference path='creo.ts'/>
///<reference path='includes.ts'/>
window.onload = function () {
    var creo = new Creo.Connect();
    var session = creo.session;
    alert(creo.version);
};
//# sourceMappingURL=creo.js.map
