///<reference path='includes.ts'/>
module Creo {
    var global;
    export class Connect {
        get version(): string { return global.GetProEVersion(); }
        get buildCode(): string { return global.GetProEBuildCode(); }

        get session() {
            return new Session(global.GetProESession());
        }

        constructor() {
            global = new ActiveXObject("pfc.MpfcCOMGlobal");
        }
    }

    export class Session {
        private o;

        constructor(session) {
            this.o = session;

        }
        get directory(): string { return this.o.GetCurrentDirectory(); }
        set directory(path: string) { this.o.ChangeDirectory(path); }

        get connectionId(): string { return this.o.ConnectionId; }
        //get CurrentModel(): string { return this.o.CurrentModel; }
        //get CurrentWindow(): string { return this.o.CurrentWindow; }
        //get DimensionDisplayMode(): string { return this.o.DimensionDisplayMode; }
         /*
        allowDuplicateModelItems(val:boolean) { this.o.AllowDuplicateModelItems(val); }
        authenticateBrowser(username: string, password: string) { this.o.AuthenticateBrowser(username,password); }
       
        ChangeDirectory
*/

    }
}