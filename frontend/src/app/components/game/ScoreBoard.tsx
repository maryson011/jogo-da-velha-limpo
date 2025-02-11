/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useContext } from 'react'
import Card from '../shared/Card'
import GameContext from '@/contexts/GameContext'

export default function Scoreboard() {
    const { player1, player2 } = useContext(GameContext)

    function renderItem(label: string, value: number, color: string) {
        return (
            <Card color={color as any} noBorder>
                <div className="flex justify-center items-center text-dark-500 w-32 h-18">
                    <div className="flex flex-col justify-center items-center">
                        <span className="uppercase">{label}</span>
                        <span className="text-3xl font-black">{value}</span>
                    </div>
                </div>
            </Card>
        )
    }

    return (
        <div className="flex gap-7">
            {renderItem(`${player1.type} (${player1.name})`, player1.score, 'primary')}
            {renderItem('Empates', 0, 'light')}
            {renderItem(`${player2.type} (${player2.name})`, player2.score, 'secondary')}
        </div>
    )
}