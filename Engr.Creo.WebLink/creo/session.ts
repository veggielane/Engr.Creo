module Creo {
    export class Session {
        //TODO Add session
        config;

        constructor(private o: any) {
            this.config = new Config(o);
        }

        get connectionId(): string { return this.o.ConnectionId; }

        get window(): Window { return new Window(this.o.CurrentWindow); }
        get windows(): Array<Window> { return Seq.read<Window>(this.o.ListWindows(), (i) => new Window(i)); }

        get model(): Model { return new Model(this.o.CurrentModel); }



        get directory(): string { return this.o.GetCurrentDirectory(); }
        set directory(path: string) { this.o.ChangeDirectory(path); }

        allowDuplicateModelItems(val: boolean) { this.o.AllowDuplicateModelItems(val); }
        authenticateBrowser(username: string, password: string) { this.o.AuthenticateBrowser(username, password); }

        runMacro(macro: string) {
            this.o.RunMacro(macro);
        }


        //TODO pfcDimDisplayMode	DimensionDisplayMode
        //TODO void	CheckoutToWS (pfcModelDescriptors Objects, string WSName, boolean AsLink, pfcRelCriterion RelCriterion)
        //TODO void	CopyFileFromWS (string SourceFile, string TargetDirectory)
        //TODO void	CopyFileToWS (string SourceFile, string TargetWorkspace, /* optional */ string PrimaryContent)
        //TODO pfcAssembly	CreateAssembly(string Name)
        //TODO pfcDrawing	CreateDrawingFromTemplate(string Name, string Template, pfcModelDescriptor DrawingModel, pfcDrawingCreateOptions Options)
        //TODO pfcWindow	CreateModelWindow(pfcModel Mdl)
        //TODO pfcPart	CreatePart(string Name)
        eraseUndisplayedModels() { this.o.EraseUndisplayedModels(); }
        //TODO pfcModelCheckResults	ExecuteModelCheck (pfcModel Model, /* optional */ pfcModelCheckInstructions Instructions)
        //TODO void	ExportCurrentRasterImage (string ImageFileName, pfcRasterImageExportInstructions Instructions)
        //TODO void	ExportDirectVRML (pfcVRMLDirectExportInstructions ExportData)
        //TODO pfcWSImportExportMessages	ExportFromCurrentWS (stringseq FileNames, string TargetLocation, pfcRelCriterion Dependency)
        flushCurrentWindow() { this.o.FlushCurrentWindow(); }
        //TODO /* optional */ pfcModel	GetActiveModel ()
        //TODO /* optional */ pfcServer	GetActiveServer ()
        //TODO string	GetAliasFromAliasedUrl (string AliasedUrl)
        //TODO /* optional */ pfcModel	GetByRelationId (integer Id)
        //TODO /* optional */ string	GetConfigOption (string Name)
        //TODO /* optional */ stringseq	GetConfigOptionValues (string Name)
        //TODO /* optional */ string	GetCurrentWS ()
        //TODO /* optional */ string	GetEnvironmentVariable (string Name)
        //TODO pfcModelType	GetImportSourceType (string FileToImport, pfcNewModelImportType NewModelType)
        //TODO string	GetLocalizedMessageContents (string MsgFile, string Format, /* optional */ stringseq MessageTexts)
        //TODO string	GetMessageContents (string MsgFile, string Format, /* optional */ stringseq MessageTexts)
        //TODO /* optional */ pfcModel	GetModel (string Name, pfcModelType Type)
        //TODO /* optional */ pfcModel	GetModelFromDescr (pfcModelDescriptor MdlDescr)
        //TODO /* optional */ pfcModel	GetModelFromFileName (string FileName)
        //TODO string	GetModelNameFromAliasedUrl (string AliasedUrl)
        //TODO /* optional */ pfcWindow	GetModelWindow (pfcModel Mdl)
        //TODO pfcPrintMdlOption	GetPrintMdlOptions (pfcModel model)
        //TODO pfcPrinterPCFOptions	GetPrintPCFOptions (string filename, pfcModel model)
        //TODO pfcPrintPlacementOption	GetPrintPlacementOptions ()
        //TODO pfcPrintPrinterOption	GetPrintPrinterOptions (string printer_type)
        //TODO /* optional */ pfcDll	GetProToolkitDll (string ApplicationId)
        //TODO pfcColorRGB	GetRGBFromStdColor (pfcStdColor StdClr)
        //TODO /* optional */ pfcServer	GetServerByAlias (string Alias)
        //TODO /* optional */ pfcServer	GetServerByUrl (string Url, /* optional */ string WorkspaceName)
        //TODO pfcServerLocation	GetServerLocation (string Url)
        //TODO string	GetUrlFromAliasedUrl (string AliasedUrl)
        //TODO /* optional */ pfcWindow	GetWindow (integer Id)
        //TODO pfcModel	Import2DModel (string NewModelName, pfcModelType Type, string FilePath, pfcImport2DInstructions Instructions)
        //TODO pfcModel	ImportNewModel (string FileToImport, pfcNewModelImportType NewModelType, pfcModelType Type, string NewModelName, /* optional */ pfcLayerImportFilter Filter)
        //TODO pfcWSImportExportMessages	ImportToCurrentWS(stringseq Filepaths, pfcRelCriterion Dependency)
        //TODO boolean	IsConfigurationSupported (pfcExportType Type, pfcAssemblyConfiguration Configuration)
        //TODO boolean	IsGeometryRepSupported (pfcExportType Type, pfcGeometryFlags Flags)

        listFiles(filter: string, options: FileListOpt = FileListOpt.OptNil, path?: string): Array<string> { return Seq.read(this.o.ListFiles(filter, options,path), (i) => i); }
        //TODO pfcModels	ListModels ()
        //TODO pfcModels	ListModelsByType (pfcModelType Type)
        //TODO /* optional */ pfcServers	ListServers ()

        listSubdirectories(path?: string): Array<string> { return Seq.read(this.o.ListSubdirectories(path), (i) => i); }
        //TODO void	LoadConfigFile (string ConfigFileName)
        //TODO pfcDll	LoadProToolkitDll (string ApplicationName, string DllPath, string TextPath, boolean UserDisplay)
        //TODO pfcDll	LoadProToolkitLegacyDll (string ApplicationName, string DllPath, string TextPath, boolean UserDisplay)
        //TODO pfcWindow	OpenFile (pfcModelDescriptor MdlDescr)
        //TODO string	PLMSInitialize (string request)
        //TODO pfcServer	RegisterServer (string Alias, string Location, /* optional */ string WorkspaceName)
        //TODO pfcAssembly	RetrieveAssemSimpRep (string AssemName, /* optional */ pfcSimpRepInstructions Instructions)
        //TODO pfcPart	RetrieveGeometryPartRep (string PartName)
        //TODO pfcAssembly	RetrieveGeomSimpRep (string AssemName)
        //TODO pfcPart	RetrieveGraphicsPartRep (string PartName)
        //TODO pfcAssembly	RetrieveGraphicsSimpRep (string AssemName)
        //TODO pfcModel	RetrieveModel (pfcModelDescriptor MdlDescr)
        //TODO pfcModel	RetrieveModelWithOpts (pfcModelDescriptor MdlDescr, pfcRetrieveModelOptions Opts)
        //TODO pfcPart	RetrievePartSimpRep (string PartName, string RepName)
        //TODO pfcPart	RetrieveSymbolicPartRep (string PartName)
        //TODO pfcAssembly	RetrieveSymbolicSimpRep (string AssemName)

        //TODO /* optional */ pfcSelections	Select(pfcSelectionOptions Options, /* optional */ pfcSelections InitialSels)
        //TODO void	SetConfigOption (string Name, string Value)
        //TODO void	SetCurrentWS (string NewWSName)
        //TODO pfcStdLineStyle	SetLineStyle (pfcStdLineStyle NewStyle)
        //TODO void	SetStdColorFromRGB (pfcStdColor StdClr, pfcColorRGB Color)
        //TODO pfcStdColor	SetTextColor (pfcStdColor NewColor)
        //TODO void	SetWSExportOptions (pfcWSExportOptions Options)
        //TODO pfcJLinkApplication	StartJLinkApplication (string ApplicationName, string ClassName, string StartMethod, string StopMethod, /* optional */ string AdditionalClassPath, /* optional */ string TextPath, boolean UserDisplay)

//        Property Summary

///* readonly */ pfcSelectionBuffer	CurrentSelectionBuffer
//The current selection buffer object.


//Method Summary
        //Adds a new Navigator Pane.
        navigatorPaneBrowserAdd(paneName: string, url: string, iconFileName?:string) {
            this.o.NavigatorPaneBrowserAdd(paneName, iconFileName, url);
        }
        //Set the icon for a Navigator Pane.
        navigatorPaneBrowserIconSet(paneName: string, iconFileName: string) {
            this.o.NavigatorPaneBrowserIconSet(paneName, iconFileName);
        }



//        void	NavigatorPaneBrowserURLSet(string PaneName, string URL)
//Set the url for a Navigator Pane.
//        void	RibbonDefinitionfileLoad(string FileName)
//Loads ribbon definition file from a default path.
//    void	UIClearMessage()
//Scrolls the text in the message area up one line after a call to pfcSession.UIDisplayMessage().This command produces only one carriage return; if called multiple times, the command is ignored.
//    void	UIDisplayFeatureParams(pfcSelection Selection, pfcParamType Type)
//Displays parameters of a selected feature.
//    void	UIDisplayLocalizedMessage(string MsgFile, string Format, /* optional */ stringseq Messages)
//Prints a text message to the message area in Creo Parametric.
//    void	UIDisplayMessage(string MsgFile, string Format, /* optional */ stringseq Messages)
//Prints a text message to the message area in Creo Parametric.
//    /* optional */ pfcUICommand	UIGetCommand(string Name)
//Finds the identifier of the specified action or option.
//    pfcMouseStatus	UIGetCurrentMouseStatus(boolean SnapToGrid)
//Returns the status of mouse at this particular moment.This method returns whenever the mouse is moved or a button is pressed.
//    pfcMouseStatus	UIGetNextMousePick( /* optional */ pfcMouseButton ExpectedButton)
//Returns the mouse status at the time that the user makes a mouse pick.
//    string	UIOpenFile(pfcFileOpenOptions Options)
//Prompts the standard file browser interface of Creo Parametric.
//    pfcOutline3D	UIPickMouseBox( /* optional */ pfcPoint3D FirstCorner)
//Prompt the user to select a rectangle using the mouse.


        //Reads an integer from the keyboard.
        readIntMessage(lowerLimit: number, upperLimit: number): number {
            return this.o.UIReadIntMessage(lowerLimit, upperLimit);
        }

        //Reads a double - precision float from the keyboard.
        readRealMessage(lowerLimit: number, upperLimit:number): number {
            return this.o.UIReadRealMessage(lowerLimit, upperLimit);
        }
        //Reads a line of keyboard input and returns the contents as a wide string.
        readStringMessage(hideInput: boolean): string {
            return this.o.UIReadStringMessage(hideInput);
        }
        //Prompts the standard file browser interface of Creo Parametric, set upfor the purpose of allowing the user to save a file.
        saveFile(filterString: string, preselectedItem? :string):string {
            var opt = new ActiveXObject("pfc.pfcFileSaveOptions").Create(filterString);
            opt.PreselectedItem = preselectedItem;
            return this.o.UISaveFile(opt);
        }

//    string	UISelectDirectory(pfcDirectorySelectionOptions Options)
//Prompts the standard file browser interface of Creo Parametric, set upfor the purpose of allowing the user to select a directory.
//    pfcMessageButton	UIShowMessageDialog(string Message, /* optional */ pfcMessageDialogOptions Options)
//Displays the UI Message Dialog.
    }
}
 