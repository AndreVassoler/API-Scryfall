"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScryfallService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const commander_schema_1 = require("./commander.schema");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const axios_1 = require("@nestjs/axios");
let ScryfallService = class ScryfallService {
    constructor(httpService, commanderModel, cardModel) {
        this.httpService = httpService;
        this.commanderModel = commanderModel;
        this.cardModel = cardModel;
    }
    findCardByName(name) {
        const url = `https://api.scryfall.com/cards/named?fuzzy=${name}`;
        return this.httpService.get(url).pipe((0, operators_1.map)((response) => response.data));
    }
    findAllcommanders() {
        const url = 'https://api.scryfall.com/cards/search?q=is%3Acommander';
        return this.httpService.get(url).pipe((0, operators_1.map)((response) => response.data));
    }
    findCommanderAndDeck(name) {
        return this.findCardByName(name).pipe((0, operators_1.switchMap)((commanderData) => {
            const url = `https://api.scryfall.com/cards/search?q=type:${commanderData.type_line}+not:${commanderData.name}`;
            return this.httpService.get(url).pipe((0, operators_1.switchMap)((response) => {
                const deckData = response.data.data.slice(0, 99);
                const deckCards = deckData.map(card => new this.cardModel({
                    name: card.name,
                    type: card.type_line,
                    manaCost: card.mana_cost,
                    imageUrl: card.image_uris?.normal,
                }));
                const commander = new this.commanderModel({
                    name: commanderData.name,
                    type: commanderData.type_line,
                    manaCost: commanderData.mana_cost,
                    imageUrl: commanderData.image_uris?.normal,
                    deck: deckCards,
                });
                return (0, rxjs_1.forkJoin)([
                    this.cardModel.insertMany(deckCards),
                    commander.save(),
                ]).pipe((0, operators_1.map)(() => ({
                    commander,
                    deck: deckCards,
                })));
            }));
        }));
    }
};
exports.ScryfallService = ScryfallService;
exports.ScryfallService = ScryfallService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(commander_schema_1.Commander.name)),
    __param(2, (0, mongoose_1.InjectModel)(commander_schema_1.Card.name)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        mongoose_2.Model,
        mongoose_2.Model])
], ScryfallService);
//# sourceMappingURL=scryfall.service.js.map