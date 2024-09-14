import { ScryfallService } from './scryfall.service';
export declare class ScryfallController {
    private readonly scryfallService;
    constructor(scryfallService: ScryfallService);
    createDeck(req: any, deck: any): any;
    findUserDecks(req: any): any[];
    findUserDecksCached(req: any): any[];
    importDeck(deck: any): any;
}
