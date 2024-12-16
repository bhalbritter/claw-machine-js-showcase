import {IInitialBall} from '../../../../../../clawjs/dist/interfaces/InitialBall'

import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover.tsx'
import {Input} from '@/components/ui/input.tsx'
import {Label} from '@/components/ui/label.tsx'
import {useState} from 'react'
import {Button} from '@/components/ui/button.tsx'

interface BallsComponentProps {
	balls: IInitialBall[]
	setBalls: (newBalls: IInitialBall[]) => void
}

function BallsComponent({balls, setBalls}: BallsComponentProps) {
	const [currentBall, setCurrentBall] = useState<IInitialBall>({
		text: '',
		startX: undefined,
		startY: undefined,
		startXMomentum: undefined,
		startYMomentum: undefined,
	})

	const handleAddBall = () => {
		setBalls(balls.concat(currentBall))
	}

	const handleDeleteBall = (deleteIndex: number) => {
		const filteredBalls = balls.filter((_, index) => index !== deleteIndex)
		setBalls(filteredBalls)
	}

	const handleAddRandomBalls = () => {
		const newBalls: IInitialBall[] = []
		const ballsLength: number = balls.length

		for (let i = 0; i < 5; i++) {
			newBalls.push({
				text: 'Ball ' + (ballsLength + i),
				startX: undefined,
				startY: undefined,
				startXMomentum: undefined,
				startYMomentum: undefined,
			})
		}

		setBalls(balls.concat(newBalls))
	}

	return (
		<div>
			<div className={'h-72 border border-black overflow-y-scroll rounded-lg mt-3.5'}>
				{balls.map((ball, index) => {
					return (
						<div
							key={index}
							className="p-4 m-2 bg-white shadow-md rounded-lg border border-gray-200 flex flex-row justify-between "
						>
							<div>
								<div className="flex items-center">
									<span className="font-semibold text-gray-700 w-32">Text:</span>
									<span className="text-gray-900">{ball.text}</span>
								</div>

								<div className="flex items-center">
									<span className="font-semibold text-gray-700 w-32">Start X:</span>
									<span className="text-gray-900">{ball.startX || 'Random'}</span>
								</div>

								<div className="flex items-center">
									<span className="font-semibold text-gray-700 w-32">Start Y:</span>
									<span className="text-gray-900">{ball.startY || 'Random'}</span>
								</div>

								<div className="flex items-center">
									<span className="font-semibold text-gray-700 w-32">X Momentum:</span>
									<span className="text-gray-900">{ball.startXMomentum || 'Random'}</span>
								</div>

								<div className="flex items-center">
									<span className="font-semibold text-gray-700 w-32">Y Momentum:</span>
									<span className="text-gray-900">{ball.startYMomentum || 'Random'}</span>
								</div>
							</div>
							<div
								className={'hover:cursor-pointer text-red-600'}
								onClick={() => handleDeleteBall(index)}
							>
								X
							</div>
						</div>
					)
				})}
			</div>
			<Popover>
				<div className={'mt-2.5 flex justify-between mr-2.5'}>
					<div className={'cursor-pointer'} onClick={() => handleAddRandomBalls()}>
						Add 10 Random Balls
					</div>
					<PopoverTrigger>
						<div>+ Add a Ball</div>
					</PopoverTrigger>
				</div>

				<PopoverContent>
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="font-medium leading-none">Create Ball</h4>
							<p className="text-sm text-muted-foreground">
								Create a new Ball. If you enter nothing, a random value will be choosen insted
							</p>
						</div>
						<div className="grid gap-2">
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="text">Text</Label>
								<Input
									id="text"
									maxLength={8}
									value={currentBall.text}
									onChange={(e) => setCurrentBall({...currentBall, text: e.target.value})}
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startX">Start X</Label>
								<Input
									id="startX"
									type={'number'}
									value={currentBall.startX}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startX: parseInt(e.target.value || '0'),
										})
									}
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startY">Start Y</Label>
								<Input
									id="startY"
									type={'number'}
									value={currentBall.startY}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startY: parseInt(e.target.value || '0'),
										})
									}
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startXMomentum">Start Momentum X</Label>
								<Input
									id="startXMomentum"
									type={'number'}
									value={currentBall.startXMomentum}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startXMomentum: parseInt(e.target.value || '0'),
										})
									}
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startYMomentum">Start Momentum Y</Label>
								<Input
									id="startYMomentum"
									type={'number'}
									value={currentBall.startYMomentum}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startYMomentum: parseInt(e.target.value || '0'),
										})
									}
									className="col-span-2 h-8"
								/>
							</div>
							<Button onClick={() => handleAddBall()}>Add</Button>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default BallsComponent
