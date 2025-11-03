const nomes = ["Daiane", "lisiane", "Maria", "Angela", "Gbrieli"];
export function aleatorio (lista){
    const posicao = Math.floor (Math.rondom()*lista.lenght);
    return lista [posicao];
}
export const nome = aleatorio(nomes);