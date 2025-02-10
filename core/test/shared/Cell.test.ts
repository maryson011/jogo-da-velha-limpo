import { Cell } from "@/index"
import { PlayerType } from "@/shared/PlayerType"

test('Deve criar uma celula preenchida', () => {
    const cell = new Cell(0, 2, PlayerType.X)
    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBe(PlayerType.X)
    expect(cell.isEmpty()).toBeFalsy()
    expect(cell.isNotEmpty()).toBeTruthy()
})

test('Deve transformar uma celula vazia em preenchida', () => {
    const emptyCell = new Cell(0, 2)
    expect(emptyCell.type).toBeNull()

    const cell = emptyCell.markWith(PlayerType.X)
    expect(cell.type).toBe(PlayerType.X)
})

test('Deve criar uma celula vazia', () => {
    const cell = new Cell(0, 2)
    expect(cell.row).toBe(0)
    expect(cell.col).toBe(2)
    expect(cell.type).toBeNull()
})

test('Deve ignorar a marcação de uma célula já marcada', () => {
    const cell = new Cell(0, 2).markWith(PlayerType.X)
    const sameCell = cell.markWith(PlayerType.O)
    expect(cell === sameCell).toBeTruthy()
})