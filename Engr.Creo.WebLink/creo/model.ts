 module Creo {
     export class Model implements IHasParameters {
         //TODO pfcModelItemOwner, pfcViewOwner, pfcChild, pfcActionSource, pfcRelationOwner, pfcParameterOwner
         parameters: Parameters;
         constructor(private o: any) {
             this.parameters = new Parameters(o) ;
         }
         get branch(): string { return this.o.Branch; }
         get commonName(): string { return this.o.CommonName; }
         set commonName(name: string) { this.o.CommonName = name; }
         get descr(): ModelDescriptor { return ModelDescriptor.fromDescriptor(this.o.Descr); }
         get fileName(): string { return this.o.FileName; }
         get fullName(): string { return this.o.FullName; }
         get genericName(): string { return this.o.GenericName; }
         get instanceName(): string { return this.o.InstanceName; }
         get isModified(): string { return this.o.IsModified; }
         get origin(): string { return this.o.Origin; }
         get postRegenerationRelations(): Array<string> { return Seq.readStrings(this.o.PostRegenerationRelations); }
         get relationId(): number { return this.o.RelationId; }
         get releaseLevel(): string { return this.o.ReleaseLevel; }
         get revision(): string { return this.o.Revision; }
         get type(): ModelType { return this.o.Type; }
         get version(): string { return this.o.Version; }
         get versionStamp(): string { return this.o.VersionStamp; }
     }

     export class ModelDescriptor {
         public o: any;
         constructor(obj:any) {
             this.o = obj;
         }
         get device(): string { return this.o.Device; }
         set device(dev: string) { this.o.Device = dev; }

         get fileVersion(): number { return this.o.FileVersion; }
         set fileVersion(ver: number) { this.o.FileVersion = ver; }

         get genericName(): string { return this.o.GenericName; }
         set genericName(ger: string) { this.o.GenericName = ger; }

         get host(): string { return this.o.Host; }
         set host(host: string) { this.o.Host = host; }

         get instanceName(): string { return this.o.InstanceName; }
         set instanceName(name: string) { this.o.InstanceName = name; }

         get path(): string { return this.o.Path; }
         set path(path: string) { this.o.Path = path; }

         get type(): ModelType { return this.o.Type; }
         set type(type: ModelType) { this.o.Type = type; }

         get extension(): ModelType { return this.o.GetExtension(); }
         get fileName(): ModelType { return this.o.GetFileName(); }
         get fullName(): ModelType { return this.o.GetFullName(); }

         static fromDescriptor(obj: any):ModelDescriptor {
             return new ModelDescriptor(obj);
         }

         static create(type: ModelType, instanceName: string, genericName?: string): ModelDescriptor {
             return new ModelDescriptor(new ActiveXObject("pfc.MpfcModelItem").Create(type, instanceName, genericName));
         }

         static createFromFilename(filename: string): ModelDescriptor {
             return new ModelDescriptor(new ActiveXObject("pfc.MpfcModelItem").CreateFromFileName(filename));
         }

     }


     export interface IHasParameters {
         parameters : Parameters;
     }

     export class Parameters {
         constructor(private o: any) {

         }

         get(param: string): Parameter {
             return new Parameter(this.o.GetParam(param));
         }

         set(option: string, value: string) {
             return this.o.SetConfigOption(option, value);
         }

         list(): Array<Parameter> {
             return Seq.read<Parameter>(this.o.ListParams(), (i) => new Parameter(i));
         }
     }

     export class Parameter {
         constructor(private o: any) { }
         get name(): string { return this.o.Name; }
         get description(): string { return this.o.Description; }
         //TODO get Units(): pfcUnit { return this.o.Units; }
         get isDesignated(): boolean { return this.o.IsDesignated; }
         set isDesignated(val: boolean) { this.o.IsDesignated = val; }
         get isModified(): boolean { return this.o.IsModified; }
         get isRelationDriven(): boolean { return this.o.IsRelationDriven; }
         resetFromBackup() { this.o.ResetFromBackup(); }
         delete() { this.o.Delete(); }
         //TODO /* optional */ pfcParameterDriverType	GetDriverType ()
         //TODO /* optional */ pfcParameterRestriction	GetRestriction ()
         //TODO pfcParamValue	GetScaledValue ()
         reorder(other: Parameter) {
             this.o.Reorder(other.o);
         }
         //TODO void	SetScaledValue (pfcParamValue value, /* optional */ pfcUnit Units)
         get value(): any {
             switch (this.o.Value.discr) {
                 case 0:
                     return this.o.Value.StringValue;
                 case 1:
                     return this.o.Value.IntValue;
                 case 2:
                     return this.o.Value.BoolValue;
                 case 3:
                     return this.o.Value.DoubleValue;
                 case 4:
                     return this.o.Value.NoteId;
                 case 5:
                 default:
                     return null;
             }
         }
         set value(val: any) {
             var item = new ActiveXObject("pfc.MpfcModelItem");
             switch (this.o.Value.discr) {
                 case 0:
                     this.o.Value = item.CreateStringParamValue(val);
                     break;
                 case 1:
                     this.o.Value = item.CreateIntParamValue(val);
                     break;
                 case 2:
                     this.o.Value = item.CreateBoolParamValue(val);
                     break;
                 case 3:
                     this.o.Value = item.CreateDoubleParamValue(val);
                     break;
                 case 4:
                 case 5:
                 default:
             }
         }
     }
 }

