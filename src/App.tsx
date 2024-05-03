import './App.css'
import { Stage, Container, Sprite, Text, AnimatedSprite } from '@pixi/react'
import GameoverView from './components/GameoverView'
import PlayerView from './components/PlayerView'
import BackgroundView from './components/BackgroundView'
import React, { useEffect, useRef, useState } from 'react'
import { GameState } from './states/GameState'
import ScoreUIView from './components/ScoreUIView'
import ObstacleSpawnView from './components/ObstacleSpawnView'

const App = () => {
    const [gameState, setState] = useState<GameState>(GameState.GamePlay)
    const player = useRef<any>()

    const width = window.innerWidth
    const height = window.innerHeight

    console.log('width : ' + width + 'height : ' + height)

    switch (gameState) {
        case GameState.GamePlay:
        case GameState.Menu:
            return (
                <Stage width={width} height={height} options={{ background: 0xffffff }}>
                    <BackgroundView x={0} y={height / 2} gameState={gameState} />
                    <ObstacleSpawnView
                        x={width}
                        y={height / 2 + 15}
                        gameState={gameState}
                        width={width}
                        player={player}
                        setState={setState}
                    />
                    <PlayerView x={100} y={height / 2 + 10} gameState={gameState} player={player} />
                    <Sprite
                        image={'/src/assets/dinosaur_die.png'}
                        x={width - 50}
                        y={20}
                        interactive={true}
                        pointerdown={() => {
                            setState(GameState.GameOver)
                        }}
                    />
                    <ScoreUIView x={width - 100} y={height / 2 - 150} gameState={gameState} />
                </Stage>
            )
        case GameState.GameOver:
            return (
                <Stage width={width} height={height} options={{ background: 0xffffff }}>
                    <BackgroundView x={0} y={height / 2} gameState={gameState} />
                    <ObstacleSpawnView
                        x={width}
                        y={height / 2 + 15}
                        gameState={gameState}
                        width={width}
                        player={player}
                        setState={setState}
                    />
                    <PlayerView x={100} y={height / 2 + 10} gameState={gameState} player={player} />
                    <GameoverView x={width / 2} y={height / 2 - 100} setState={setState} />
                    <ScoreUIView x={width - 100} y={height / 2 - 150} gameState={gameState} />
                </Stage>
            )
    }
}

export default App
