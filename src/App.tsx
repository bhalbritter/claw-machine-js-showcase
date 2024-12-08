import {ClawMachine} from 'clawjs'
import {useRef, useState} from 'react'
import {ClawMachineCommands} from 'clawjs/dist/ClawMachine'
import {ClawSettings} from '@/interfaces/clawSettings.ts'
import SettingsCard from '@/modules/settingsCard/SettingsCard.tsx'

function App() {
	const [clawSettings, setClawSettings] = useState<ClawSettings>({height: 500, width: 500})
	const clawMachineRef = useRef<ClawMachineCommands>(null)

	/*	const handleMoveClaw = async () => {
		if (clawMachineRef.current) {
			await clawMachineRef.current.moveClaw(100, 500, 45); // Move claw to (100, 150) with a 45-degree angle
			await clawMachineRef.current.moveClaw(100, 100, 0, false); // Move claw to (100, 150) with a 45-degree angle
		}
	};
 */
	return (
		<div className={'flex flex-row w-full h-screen'}>
			<div className={'flex flex-col w-full h-full'}>
				<div>Headline</div>
				<div className={'flex justify-center items-center h-full'}>
					<ClawMachine
						alreadyDroppedBalls={[]}
						ref={clawMachineRef}
						addToDroppedBalls={() => console.log('ASDF')}
						ballData={[
							{
								text: 'test123',
								ballColor: 'green',
								ballTextColor: 'yellow',
							},
						]}
						height={clawSettings.height}
						width={clawSettings.width}
						gravity={0.2}
						friction={0.99}
						groundFriction={0.8}
						clawSize={25}
						dividerLineWidth={70}
						dividerLineHeight={140}
						dividerLineThickness={20}
						clawColor={'green'}
						clawBoltColor={'red'}
						clawWidth={5}
						clawSpeedY={9}
						clawSpeedX={20}
						ballRadius={20}
					/>
				</div>
			</div>
			<div className={'w-1/4'}>
				<SettingsCard clawSettings={clawSettings} setClawSettings={setClawSettings} />
			</div>
		</div>
	)
}

export default App
