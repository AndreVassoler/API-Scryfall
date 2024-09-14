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
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const cache_manager_1 = require("@nestjs/cache-manager");
let ScryfallController = class ScryfallController {
    constructor(scryfallService) {
        this.scryfallService = scryfallService;
    }
    createDeck(req, deck) {
        return this.scryfallService.createDeck(req.user.id, deck);
    }
    findUserDecks(req) {
        return this.scryfallService.findDecksByUser(req.user.id);
    }
    findUserDecksCached(req) {
        return this.scryfallService.findDecksByUser(req.user.id);
    }
    importDeck(deck) {
        const isValid = this.scryfallService.validateCommanderRules(deck);
        if (!isValid) {
            throw new common_1.BadRequestException('O baralho não segue as regras do Commander.');
        }
        return this.scryfallService.saveDeck(deck);
    }
};
exports.ScryfallController = ScryfallController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ScryfallController.prototype, "createDeck", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScryfallController.prototype, "findUserDecks", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    (0, common_1.Get)('cached'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScryfallController.prototype, "findUserDecksCached", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('import'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScryfallController.prototype, "importDeck", null);
exports.ScryfallController = ScryfallController = __decorate([
    (0, common_1.Controller)('decks'),
    __metadata("design:paramtypes", [scryfall_service_1.ScryfallService])
], ScryfallController);
//# sourceMappingURL=scryfall.controller.js.map