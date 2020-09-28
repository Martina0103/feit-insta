export interface IUser {
    id: number,
    profilna: string,
    Ime: string,
    account: string,
    slika: string,
    opis: string
}

export interface IComment {
    id: number,
    fullName: string,
    accountName: string,
    photoUrl: string,
    comment: string
}