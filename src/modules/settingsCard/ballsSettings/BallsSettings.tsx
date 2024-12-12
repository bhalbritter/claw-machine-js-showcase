import {AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion.tsx'
import {LabeledSlider} from '@/components/labeled-slider.tsx'
import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import BallsComponent from '@/modules/settingsCard/ballsSettings/ballsComponent/BallsComponent.tsx'
import {IInitialBall} from 'clawjs/dist/interfaces/InitialBall'

interface BallsSettingsProps {
	clawSettings: IClawSettings
	balls: IInitialBall[]
	setBalls: (newBalls: IInitialBall[]) => void
	setClawSettings: (settings: IClawSettings) => void
}

function BallsSettings({clawSettings, balls, setBalls, setClawSettings}: BallsSettingsProps) {
	return (
		<AccordionItem value="item-2">
			<AccordionTrigger className={'font-extrabold'}>Ball Settings</AccordionTrigger>
			<AccordionContent>
				<LabeledSlider
					value={clawSettings.ballRadius}
					setValue={(newValue) => setClawSettings({...clawSettings, ballRadius: newValue})}
					label={'Ball radius'}
					min={1}
					max={50}
					step={1}
					defaultValue={20}
				/>
				<BallsComponent balls={balls} setBalls={setBalls} />
			</AccordionContent>
		</AccordionItem>
	)
}

export default BallsSettings
