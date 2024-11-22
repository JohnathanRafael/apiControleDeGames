// interface de um game

export interface Game{
    id: string;
    name: string;
    tipo: string;
    descricao: string;
    status : boolean | null;
    created_at : Date | null;
    update_at : Date | null;
}

