import {IInitialBall} from 'clawjs/dist/interfaces/InitialBall'

import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {useState} from 'react'
import {Button} from '@/components/ui/button.tsx'

interface BallsComponentProps {
	balls: IInitialBall[]
	setBalls: (newBalls: IInitialBall[]) => void
}

function BallsComponent({balls, setBalls}: BallsComponentProps) {
	const [currentBall, setCurrentBall] = useState<IInitialBall>({
		text: '',
		startX: 0,
		startY: 0,
		startXMomentum: 1,
		startYMomentum: 1,
	})

	const handleAddBall = () => {
		setBalls(balls.concat(currentBall))
	}

	return (
		<div>
			<div className={'h-72 border border-black'}>
				{balls.map((ball) => {
					return <div>{ball.toString()}</div>
				})}
			</div>
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="font-medium leading-none">Create Ball</h4>
							<p className="text-sm text-muted-foreground">Create a new Ball</p>
						</div>
						<div className="grid gap-2">
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="text">Text</Label>
								<Input
									id="text"
									value={currentBall.text}
									onChange={(e) => setCurrentBall({...currentBall, text: e.target.value})}
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startX">StartX</Label>
								<Input
									id="startX"
									value={currentBall.startX}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startX: parseInt(e.target.value || '0'),
										})
									}
									defaultValue="300px"
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startY">StartY</Label>
								<Input
									id="startY"
									value={currentBall.startY}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startY: parseInt(e.target.value || '0'),
										})
									}
									defaultValue="300px"
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startXMomentum">Start Momentum X</Label>
								<Input
									id="startXMomentum"
									value={currentBall.startXMomentum}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startXMomentum: parseInt(e.target.value || '0'),
										})
									}
									defaultValue="300px"
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="startYMomentum">Start Momentum Y</Label>
								<Input
									id="startYMomentum"
									value={currentBall.startYMomentum}
									onChange={(e) =>
										setCurrentBall({
											...currentBall,
											startYMomentum: parseInt(e.target.value || '0'),
										})
									}
									defaultValue="300px"
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
