import { Model } from 'mongoose';
import { Commander, Card } from './commander.schema';
export declare class ScryfallService {
    private commanderModel;
    private cardModel;
    private decks;
    constructor(commanderModel: Model<Commander>, cardModel: Model<Card>);
    createDeck(userId: number, deck: any): any;
    findAllDecks(): any[];
    findDecksByUser(userId: number): any[];
    validateCommanderRules(deck: any): boolean;
    saveDeck(deck: any): any;
}
