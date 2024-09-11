import { Document } from "mongoose";
export declare class Commander extends Document {
    name: string;
    type: string;
    manaCost: string;
    imageUrl: string;
}
export declare const CommanderSchema: import("mongoose").Schema<Commander, import("mongoose").Model<Commander, any, any, any, Document<unknown, any, Commander> & Commander & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Commander, Document<unknown, {}, import("mongoose").FlatRecord<Commander>> & import("mongoose").FlatRecord<Commander> & Required<{
    _id: unknown;
}>>;
