export interface DimensionI {
    [key: string]: DimensionDataI
}

interface DimensionDataI {
    width: number;
    height: number
}
