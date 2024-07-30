import { ModelsValidation } from "../exceptions/models.validation";
import { StringUtils } from "../utils/string.utils";

export class ProjectModel {
    
    private _title:string;
    private _description:string;
    private _pathImage:string;
    private _projectLink: string;

    public constructor(title:string, description:string, pathImage:string, projectLink:string){
        ModelsValidation.When(StringUtils.isNullOrEmpty(title),
                              'The title is required');
        ModelsValidation.When(StringUtils.isNullOrEmpty(description),
                              'The description is required');
        ModelsValidation.When(StringUtils.isNullOrEmpty(pathImage),
                               'The path image is required');
        ModelsValidation.When(StringUtils.isNullOrEmpty(projectLink),
                              'The link of project is required')

        this._title = title;
        this._description = description;
        this._pathImage = pathImage;
        this._projectLink = projectLink;
    }

    public get Title(): string {
        return this._title;
    }

    public get Description(): string {
        return this._description;
    }

    public get ImagePath(): string {
        return this._pathImage;
    }

    public get ProjectLink(): string {
        return this._projectLink;
    }
    
}