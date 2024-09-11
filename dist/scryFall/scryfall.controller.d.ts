import { ScryfallService } from './scryfall.service';
import { Observable } from 'rxjs';
export declare class ScryfallController {
    private readonly scryfallService;
    constructor(scryfallService: ScryfallService);
    getCardByName(name: string): Observable<any>;
    getAllCommanders(): Observable<any>;
    getCommanderAndDeck(name: string): Observable<any>;
}
