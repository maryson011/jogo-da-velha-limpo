import Player from "@/player/Player";
import Board from "./Board";
import GameResult from "@/result/GameResult";
import { PlayerType } from "@/shared/PlayerType";
import VerticalChecker from "@/result/VerticalChecker";
import HorizontalChecker from "@/result/HorizontalChecker";
import DiagonalChecker from "@/result/DiagonalChecker";
import TieChecker from "@/result/TieChecker";

export default class Game {
    private constructor(
        readonly player1: Player,
        readonly player2: Player,
        readonly board: Board,
        readonly first: Player,
        readonly currentPlayer: Player,
        readonly ties: number = 0,
        readonly result: GameResult = new GameResult()
    ) {}

    static create(player1: Player, player2: Player): Game {
        return new Game(player1, player2, Board.empty(), player1, player1)
    }

    nextRound(): Game {
        const newFirst = this.first.type === this.player1.type ? this.player2 : this.player1
        return new Game(this.player1, this.player2, Board.empty(), newFirst, newFirst, this.ties)
    }

    clear(): Game {
        const newFirst = this.first.type === this.player1.type ? this.player2 : this.player1
        return new Game(
            this.player1.clear(),
            this.player2.clear(),
            Board.empty(),
            newFirst,
            newFirst,
            0
        )
    }

    addMove(row: number, col: number): Game {
        if (this.board.isNotEmpty(row, col)) return this
        if (!this.result.inProgress) return this

        const board = this.board.set(row, col, this.currentPlayer.type)
        const result = this.calculateResult(board)
        const [player1, player2] = this.players(result)

        return new Game(
            player1,
            player2,
            board,
            this.first,
            this.currentPlayer,
            result.tied ? this.ties + 1 : this.ties,
            result
        ).switchPlayer()
    }

    private calculateResult(board: Board): GameResult {
        const results = [
            new VerticalChecker().check(board),
            new HorizontalChecker().check(board),
            new DiagonalChecker().check(board),
        ]
        return results.find((r) => r.finished) ?? new TieChecker().check(board)
    }

    private switchPlayer(): Game {
        if (!this.result.inProgress) return this
        const newCurrent =
            this.currentPlayer.type === this.player1.type ? this.player2 : this.player1
        return new Game(
            this.player1,
            this.player2,
            this.board,
            this.first,
            newCurrent,
            this.ties,
            this.result
        )
    }

    private players(result: GameResult): Player[] {
        if (result.xWins) {
            return this.player1.type === PlayerType.X
                ? [this.player1.addScore(1), this.player2]
                : [this.player1, this.player2.addScore(1)]
        }

        if (result.oWins) {
            return this.player1.type === PlayerType.O
                ? [this.player1.addScore(1), this.player2]
                : [this.player1, this.player2.addScore(1)]
        }

        return [this.player1, this.player2]
    }
 }