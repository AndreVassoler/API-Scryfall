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
exports.ScryfallController = void 0;
const common_1 = require("@nestjs/common");
const scryfall_service_1 = require("./scryfall.service");
const rxjs_1 = require("rxjs");
let ScryfallController = class ScryfallController {
    constructor(scryfallService) {
        this.scryfallService = scryfallService;
    }
    getCardByName(name) {
        return this.scryfallService.findCardByName(name);
    }
    getAllCommanders() {
        return this.scryfallService.findAllcommanders();
    }
    getCommanderAndDeck(name) {
        return this.scryfallService.findCommanderAndDeck(name);
    }
};
exports.ScryfallController = ScryfallController;
__decorate([
    (0, common_1.Get)('card/:name'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ScryfallController.prototype, "getCardByName", null);
__decorate([
    (0, common_1.Get)('commanders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], ScryfallController.prototype, "getAllCommanders", null);
__decorate([
    (0, common_1.Get)('commander-deck'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], ScryfallController.prototype, "getCommanderAndDeck", null);
exports.ScryfallController = ScryfallController = __decorate([
    (0, common_1.Controller)('scryfall'),
    __metadata("design:paramtypes", [scryfall_service_1.ScryfallService])
], ScryfallController);
//# sourceMappingURL=scryfall.controller.js.map