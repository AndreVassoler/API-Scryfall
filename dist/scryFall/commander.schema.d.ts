import { Document } from 'mongoose';
export declare class Card extends Document {
    name: string;
    type: string;
    manaCost: string;
    imageUrl: string;
}
export declare const CardSchema: import("mongoose").Schema<Card, import("mongoose").Model<Card, any, any, any, Document<unknown, any, Card> & Card & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Card, Document<unknown, {}, import("mongoose").FlatRecord<Card>> & import("mongoose").FlatRecord<Card> & Required<{
    _id: unknown;
}>>;
export declare class Commander extends Document {
    name: string;
    type: string;
    manaCost: string;
    imageUrl: string;
    deck: Card[];
}
export declare const CommanderSchema: import("mongoose").Schema<Commander, import("mongoose").Model<Commander, any, any, any, Document<unknown, any, Commander> & Commander & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Commander, Document<unknown, {}, import("mongoose").FlatRecord<Commander>> & import("mongoose").FlatRecord<Commander> & Required<{
    _id: unknown;
}>>;
