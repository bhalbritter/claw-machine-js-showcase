import {useRef, useState} from 'react'
import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import SettingsCard from '@/modules/settingsCard/SettingsCard.tsx'
import {Button} from '@/components/ui/button.tsx'
import {Select, SelectContent, SelectItem, SelectTrigger} from '@/components/ui/select'
import react from '../public/img.png'
import {IInitialBall} from 'claw-machine-js/dist/interfaces/InitialBall'
import {IBall} from 'claw-machine-js/dist/interfaces/Ball'
import {ClawMachine} from 'claw-machine-js'
import {ClawMachineCommands} from 'claw-machine-js/dist/ClawMachine'
import SettingsDrawer from '@/modules/settingsCard/SettingsDrawer.tsx'
import reloadIcon from '../public/reload-outline.svg'

function App() {
	const initialState: IInitialBall[] = [
		{
			text: 'test',
			ballColor: 'gray',
			ballTextColor: 'yellow',
			icon: react,
		},
	]
	const [clawSettings, setClawSettings] = useState<IClawSettings>({
		height: 500,
		width: 500,
		gravity: 0.8,
		friction: 0.99,
		groundFriction: 0.8,
		ballRadius: 20,
		clawSize: 25,
		clawWidth: 5,
		clawSpeedX: 10,
		clawSpeedY: 5,
		clawColor: '#808080',
		clawBoldColor: '#000000',
		dividerLineWidth: 70,
		dividerLineHeight: 140,
		dividerLineThickness: 20,
		dividerLineBorderColor: '#808080',
		dividerLineFillColor: '#808080',
	})
	const [balls, setBalls] = useState<IInitialBall[]>(initialState)
	const [alreadyDroppedBalls, setAlreadyDroppedBalls] = useState<IBall[]>([])
	const clawMachineRef = useRef<ClawMachineCommands>(null)

	const handleMoveClawRight = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.moveClawRight()
		}
	}
	const handleMoveClawLeft = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.moveClawLeft()
		}
	}

	const handleStopMoving = async () => {
		if (clawMachineRef.current) {
			clawMachineRef.current.stopMoving()
		}
	}

	const handleMoveClawDown = async () => {
		if (clawMachineRef.current) {
			await clawMachineRef.current.moveClawDown()
		}
	}

	const addToDroppedBalls = (newDroppedBalls: IBall[]) => {
		setAlreadyDroppedBalls((prevToShowBalls: IBall[]) => prevToShowBalls.concat(newDroppedBalls))
	}

	const handleReset = () => {
		setAlreadyDroppedBalls([])
		setBalls(initialState)
	}

	return (
		<div className={'flex flex-row w-full h-dvh'}>
			<div className={'flex flex-col w-full h-dvh'}>
				<div className={'flex text-3xl md:text-6xl font-bold m-1'}>Claw Machine JS v1.0.4 - Demo</div>
				<div className={'flex justify-center items-center h-full'}>
					<ClawMachine
						alreadyDroppedBalls={alreadyDroppedBalls}
						ref={clawMachineRef}
						addToDroppedBalls={addToDroppedBalls}
						ballData={balls}
						height={clawSettings.height}
						width={clawSettings.width}
						gravity={clawSettings.gravity}
						friction={clawSettings.friction}
						groundFriction={clawSettings.groundFriction}
						clawSize={clawSettings.clawSize}
						clawColor={clawSettings.clawColor}
						clawBoltColor={clawSettings.clawBoldColor}
						clawWidth={clawSettings.clawWidth}
						clawSpeedY={clawSettings.clawSpeedY}
						clawSpeedX={clawSettings.clawSpeedX}
						ballRadius={clawSettings.ballRadius}
						dividerLineWidth={clawSettings.dividerLineWidth}
						dividerLineHeight={clawSettings.dividerLineHeight}
						dividerLineThickness={clawSettings.dividerLineThickness}
						dividerLineBorderColor={clawSettings.dividerLineBorderColor}
						dividerLineFillColor={clawSettings.dividerLineFillColor}
					/>
				</div>
				<div className={'md:flex m-2 hidden'}>
					<Button onClick={() => handleReset()}>Reset dropped balls</Button>
					<div className={'w-full flex justify-center gap-2'}>
						<Button
							onMouseDown={() => handleMoveClawLeft()}
							onTouchStart={() => handleMoveClawLeft()}
							onTouchEnd={() => handleStopMoving()}
							onMouseUp={() => handleStopMoving()}
							onMouseLeave={() => handleStopMoving()}
						>
							Left
						</Button>
						<Button
							onMouseDown={() => handleMoveClawRight()}
							onTouchStart={() => handleMoveClawRight()}
							onTouchEnd={() => handleStopMoving()}
							onMouseUp={() => handleStopMoving()}
							onMouseLeave={() => handleStopMoving()}
						>
							Right
						</Button>
						<Button onClick={() => handleMoveClawDown()}>Go</Button>
					</div>
					<Select key={balls.length}>
						<SelectTrigger className="w-[180px]">Dropped balls</SelectTrigger>
						<SelectContent>
							{alreadyDroppedBalls.map((balls, index) => {
								return (
									<SelectItem value={'1'} disabled={true} key={index}>
										{balls.text}
									</SelectItem>
								)
							})}
						</SelectContent>
					</Select>
				</div>
				<div className={'flex md:hidden justify-around align-middle mb-8'}>
					<div className={'flex p-2 rounded-full'} onClick={() => handleReset()}>
						<img className={'w-8'} alt={'wrenchIcon'} src={reloadIcon} />
					</div>
					<div className={'p-4 bg-white shadow-lg rounded-lg border border-gray-200 flex gap-5'}>
						<Button
							onMouseDown={() => handleMoveClawLeft()}
							onTouchStart={() => handleMoveClawLeft()}
							onTouchEnd={() => handleStopMoving()}
							onMouseUp={() => handleStopMoving()}
							onMouseLeave={() => handleStopMoving()}
						>
							Left
						</Button>
						<Button
							onMouseDown={() => handleMoveClawRight()}
							onTouchStart={() => handleMoveClawRight()}
							onTouchEnd={() => handleStopMoving()}
							onMouseUp={() => handleStopMoving()}
							onMouseLeave={() => handleStopMoving()}
						>
							Right
						</Button>
						<Button onClick={() => handleMoveClawDown()}>Go</Button>
					</div>
					<SettingsDrawer
						clawSettings={clawSettings}
						balls={balls}
						setBalls={setBalls}
						setClawSettings={setClawSettings}
					/>
				</div>
			</div>
			<div className={'hidden md:flex m-1 md:m-0 md:w-1/4 overflow-scroll'}>
				<SettingsCard
					clawSettings={clawSettings}
					balls={balls}
					setBalls={setBalls}
					setClawSettings={setClawSettings}
				/>
			</div>
		</div>
	)
}

export default App
