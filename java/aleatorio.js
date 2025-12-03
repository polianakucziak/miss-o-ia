const nomes = ["Daiane", "lisiane", "Angela", "Gbrieli"];
export function aleatorio (lista){
    const posicao = Math.floor (Math.rondom()*lista.lenght);
    return lista [posicao];
}
export const nome = aleatorio(nomes);