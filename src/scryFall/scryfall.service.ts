import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commander, Card } from './commander.schema';

@Injectable()
export class ScryfallService {
  private decks = [];

  constructor(
    @InjectModel(Commander.name) private commanderModel: Model<Commander>,
    @InjectModel(Card.name) private cardModel: Model<Card>,
  ) {}

  // Cria um baralho para um usuário
  createDeck(userId: number, deck: any): any {
    const newDeck = { ...deck, userId, id: this.decks.length + 1 };
    this.decks.push(newDeck);
    return newDeck;
  }

  // Lista todos os baralhos
  findAllDecks(): any[] {
    return this.decks;
  }

  // Lista os baralhos de um usuário
  findDecksByUser(userId: number): any[] {
    return this.decks.filter(deck => deck.userId === userId);
  }

  // Valida as regras de Commander
  validateCommanderRules(deck: any): boolean {
    // Regras básicas, como verificar número mínimo de cartas, etc.
    if (deck.cards.length < 60) {
      return false;
    }
    return true;
  }

  // Salva um baralho após validação
  saveDeck(deck: any): any {
    const newDeck = { ...deck, id: this.decks.length + 1 };
    this.decks.push(newDeck);
    return newDeck;
  }
}
