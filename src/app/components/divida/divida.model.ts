export interface Divida{
    id?: number
    nomeCredor: string
    documentoCredor: string
    titulo: string
    valor: number
    formaPagamento: string
    houveParcelamento : string
    numeroParcelas?: number
    status : string
}