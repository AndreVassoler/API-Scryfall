"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const scryfall_controller_1 = require("./scryFall/scryfall.controller");
const scryfall_service_1 = require("./scryFall/scryfall.service");
const mongoose_1 = require("@nestjs/mongoose");
const commander_schema_1 = require("./scryFall/commander.schema");
const auth_module_1 = require("./auth/auth.module");
const cache_manager_1 = require("@nestjs/cache-manager");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://andre:andre123@scryfall-cards.jwhau.mongodb.net/'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Commander', schema: commander_schema_1.CommanderSchema }, { name: 'Card', schema: commander_schema_1.CardSchema }]),
            cache_manager_1.CacheModule.register(),
            auth_module_1.AuthModule,
        ],
        controllers: [scryfall_controller_1.ScryfallController],
        providers: [scryfall_service_1.ScryfallService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map