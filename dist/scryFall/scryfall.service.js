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
let ScryfallService = class ScryfallService {
    constructor(commanderModel, cardModel) {
        this.commanderModel = commanderModel;
        this.cardModel = cardModel;
        this.decks = [];
    }
    createDeck(userId, deck) {
        const newDeck = { ...deck, userId, id: this.decks.length + 1 };
        this.decks.push(newDeck);
        return newDeck;
    }
    findAllDecks() {
        return this.decks;
    }
    findDecksByUser(userId) {
        return this.decks.filter(deck => deck.userId === userId);
    }
    validateCommanderRules(deck) {
        if (deck.cards.length < 60) {
            return false;
        }
        return true;
    }
    saveDeck(deck) {
        const newDeck = { ...deck, id: this.decks.length + 1 };
        this.decks.push(newDeck);
        return newDeck;
    }
};
exports.ScryfallService = ScryfallService;
exports.ScryfallService = ScryfallService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(commander_schema_1.Commander.name)),
    __param(1, (0, mongoose_1.InjectModel)(commander_schema_1.Card.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ScryfallService);
//# sourceMappingURL=scryfall.service.js.map