module Creo {
    export class Config {
        constructor(private o: any) {

        }

        get(option: string) {
            return this.o.GetConfigOption(option);
        }

        getValues(option: string) {
            return Seq.read<string>(this.o.GetConfigOptionValues(option), (i)=>i);
        }

        set(option: string, value: string) {
            return this.o.SetConfigOption(option, value);
        }
    }
}
 