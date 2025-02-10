import { Player } from "@/index"
import { PlayerType } from "@/shared/PlayerType"

test('Deve retornar a mesma instancia quandi adicionar 0 pontos', () => {
    const player = new Player('P1', PlayerType.O)
    expect(player.addScore(0) === player).toBeTruthy()
})

test('Deve retornar instancia diferente quando adicionar pontos', () => {
    const player = new Player('P1', PlayerType.O)
    expect(player.addScore(1) === player).toBeFalsy()
})

test('Deve limpar jogador com pontuação existente', () => {
    const player = new Player('P1', PlayerType.O, 100).clear()
    expect(player.name).toBe('P1')
    expect(player.type).toBe(PlayerType.O)
    expect(player.score).toBe(0)
})