export class ModelsValidation extends Error{
    
    constructor(msg: string){
        super(msg)
    }

    public static When(hasError:boolean, errorMessage:string):void{
        if(hasError)
            throw new ModelsValidation(errorMessage);
    }
}