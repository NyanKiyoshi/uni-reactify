interface IPersonBody {
    id: number,
    firstname: string,
    lastname: string,
}

interface IPersonListState {
    body: IPersonBody[]
}
