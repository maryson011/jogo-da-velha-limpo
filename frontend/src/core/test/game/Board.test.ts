import { Board } from "@/index"
import { PlayerType } from "@/shared/PlayerType"

test('Deve criar um tabuleiro vazio', () => {
    const board = Board.empty()
    expect(board.rows).toBe(3)
    expect(board.cols).toBe(3)
    expect(board.isFull()).toBeFalsy()
})

test('Deve retornar todas as celulas do tabuleiro', () => {
    const board = Board.empty()
    expect(board.items.length).toBe(9)
})

test('Deve marcar uma celula por linha e coluna', () => {
    const board = Board.empty().set(1,1,PlayerType.X)
    expect(board.isNotEmpty(1, 1)).toBeTruthy()
    expect(board.isEmpty(1, 1)).toBeFalsy()
})

test('Deve retornar com vazia para celula inexistente', () => {
    const board = Board.empty()
    expect(board.isEmpty(10, 1)).toBeTruthy()
    expect(board.isNotEmpty(10, 1)).toBeFalsy()
})

test('Deve ignorar marcar celula inexistent', () => {
    const board = Board.empty()
    const sameBoard = board.set(10, 1, PlayerType.O)
    expect(board === sameBoard).toBeTruthy()
})