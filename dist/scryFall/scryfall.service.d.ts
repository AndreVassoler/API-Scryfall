import { Model } from 'mongoose';
import { Commander, Card } from './commander.schema';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
export declare class ScryfallService {
    private readonly httpService;
    private commanderModel;
    private cardModel;
    constructor(httpService: HttpService, commanderModel: Model<Commander>, cardModel: Model<Card>);
    findCardByName(name: string): Observable<any>;
    findAllcommanders(): Observable<any>;
    findCommanderAndDeck(name: string): Observable<any>;
}
