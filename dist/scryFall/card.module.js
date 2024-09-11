"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScryfallModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const commander_schema_1 = require("./commander.schema");
const scryfall_service_1 = require("./scryfall.service");
const scryfall_controller_1 = require("./scryfall.controller");
let ScryfallModule = class ScryfallModule {
};
exports.ScryfallModule = ScryfallModule;
exports.ScryfallModule = ScryfallModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: commander_schema_1.Commander.name, schema: commander_schema_1.CommanderSchema }])],
        providers: [scryfall_service_1.ScryfallService],
        controllers: [scryfall_controller_1.ScryfallController],
    })
], ScryfallModule);
//# sourceMappingURL=card.module.js.map