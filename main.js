//calculo de produtos da minha empresa, pela quantidade, valor e dividido em frágeis ou não frágeis.
const carrinho = [
    { nome: 'Farinha de trigo', qtde: 10, preco: 190.00, fragil: true },
    { nome: 'Leite condensado', qtde: 27, preco: 6.50, fragil: false },
    { nome: 'Creme de leite', qtde: 25, preco: 3.85, fragil: false },
    { nome: 'Mucilon', qtde: 10, preco: 8.50, fragil: false },
    { nome: 'Cartela de ovo', qtde: 30, preco: 14.00, fragil: true },
]
const todos = (p1, p2, p3, p4, p5) =>
    p1.qtde * p1.preco +
    p2.qtde * p2.preco +
    p3.qtde * p3.preco +
    p4.qtde * p4.preco +
    p5.qtde * p5.preco 

const frageis = (p1, p2, p3, p4, p5) => {
    const parcial1 = p1.fragil ? p1.qtde +p1.preco : 0
    const parcial2 = p2.fragil ? p2.qtde +p2.preco : 0
    const parcial3 = p3.fragil ? p3.qtde +p3.preco : 0
    const parcial4 = p4.fragil ? p4.qtde +p4.preco : 0
    const parcial5 = p5.fragil ? p5.qtde +p5.preco : 0
    return parcial1 + parcial2 + parcial3 + parcial4 + parcial5
}
const nfrageis = (p1, p2, p3, p4, p5) => {
    const parcial1 = p1.fragil ? 0 : p1.qtde +p1.preco
    const parcial2 = p2.fragil ? 0 : p2.qtde +p2.preco
    const parcial3 = p3.fragil ? 0 : p3.qtde +p3.preco
    const parcial4 = p4.fragil ? 0 : p4.qtde +p4.preco
    const parcial5 = p5.fragil ? 0 : p5.qtde +p5.preco
    return parcial1 + parcial2 + parcial3 + parcial4 + parcial5
}
const desc = (d=0) => (valor) => (1-d)*valor
const desc10 = desc(0.1)
const desc30 = desc(0.3)
const desc20 = desc(0.2)
const desc50 = desc(0.5)
const desc15 = desc(0.15)
const desc0 = desc(0.0)

const soma = (a, b) => a+b
const calcular = (fdesc) => (fcalc) => (p1, p2, p3, p4, p5) => fdesc(fcalc(p1, p2, p3, p4, p5))

const res1 = calcular(desc())(todos)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const res2 = calcular(desc10)(todos)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const res3 = calcular(desc30)(todos)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const parte1 = calcular(desc20)(frageis)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const parte2 = calcular(desc50)(nfrageis)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const res4 = soma(parte1, parte2)
const parte3 = calcular(desc15)(frageis)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const parte4 = calcular(desc0)(nfrageis)(carrinho[0], carrinho[1], carrinho[2], carrinho[3], carrinho[4])
const res5 = soma(parte3, parte4)
console.log(`Valor total é ${res1}!`)
console.log(`Valor total com 10% de desconto é ${res2}!`)
console.log(`Valor total com 30% de desconto é ${res3}!`)
console.log(`Valor total com 20%-frageis, 50%-nfrageis é ${res4}!`)
console.log(`Valor total com 15%-frageis, 0%-nfrageis é ${res5}!`)