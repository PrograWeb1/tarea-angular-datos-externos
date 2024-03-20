import { ILocation } from "./ILocation"
export interface ILocations{
    info:{
        count: number,
        pages: number,
        next?: string,
        prev?: string
    },
    results: ILocation[]
}