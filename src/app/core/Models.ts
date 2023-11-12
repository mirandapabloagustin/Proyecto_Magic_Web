import { Iuser,Icard, IdeckCard } from "./Interfaces";


export class Card implements Icard {
    id: any;
    nameCard: any;
    imagenUris: string | null;
    cmc: number | null;
    colorIdentity: string | null;
    type: string | null;

    constructor(card?: Icard) {
        this.id = card?.id == undefined ? null : card.id;
        this.nameCard = card?.nameCard == undefined ? null : card.nameCard;
        this.imagenUris = card?.imagenUris == undefined ? null : card.imagenUris;
        this.cmc = card?.cmc == undefined ? null : card.cmc;
        this.colorIdentity = card?.colorIdentity == undefined ? null : card.colorIdentity;
        this.type = card?.type == undefined ? null : card.type;
    }
}

export class DeckCard implements IdeckCard {

    id: number | null;
    userIdDeck: number | null;
    nameDeck: string | null;
    cards: Card[] | null;

    constructor(deckCard ?: IdeckCard) {
        this.id = deckCard?.id == undefined ? null : deckCard.id;
        this.userIdDeck = deckCard?.userIdDeck == undefined ? null : deckCard.userIdDeck;
        this.nameDeck = deckCard?.nameDeck == undefined ? null : deckCard.nameDeck;
        this.cards = deckCard?.cards == undefined ? null : deckCard.cards;
    }
}

export class User implements Iuser {
    id: number | null;
    nickName: string | null;
    email: string | null;
    password: string | null;
    imagUser: string | null;


    constructor(user?: Iuser) {
        this.id = user?.id == undefined ? null : user.id;
        this.nickName = user?.nickName == undefined ? '' : user.nickName;
        this.email = user?.email == undefined ? '' : user.email;
        this.password = user?.password == undefined ? '' : user.password;
        this.imagUser = user?.imagUser == undefined ? "assets/iconUsers/new-user.png" : user.imagUser;
    }
  
}