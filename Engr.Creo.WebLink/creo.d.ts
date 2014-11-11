declare module Creo {
    class Connect {
        public version : string;
        public buildCode : string;
        public session : Session;
        constructor();
    }
    class Session {
        private o;
        constructor(session: any);
        public directory : string;
        public connectionId : string;
    }
}
