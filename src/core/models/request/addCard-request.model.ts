export interface AddCardRequest {
    UserId: number;
    cardHolderName: string;
    cardNumber: string ;
    expirationDate: Date;
    cardCvc: number;
    cardType: string;
}