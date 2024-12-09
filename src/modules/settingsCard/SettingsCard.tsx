import {LabeledSlider} from '@/components/labeled-slider.tsx'
import {ClawSettings} from '@/interfaces/clawSettings.ts'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import BallsComponent from '@/modules/settingsCard/ballsComponent/BallsComponent.tsx'
import {IInitialBall} from 'clawjs/dist/interfaces/InitialBall'

interface SettingsCardProps {
	clawSettings: ClawSettings
	balls: IInitialBall[]
	setBalls: (newBalls: IInitialBall[]) => void
	setClawSettings: (newSettings: ClawSettings) => void
}

function SettingsCard({clawSettings, balls, setBalls, setClawSettings}: SettingsCardProps) {
	return (
		<div>
			<Accordion type="multiple">
				<AccordionItem value="item-1">
					<AccordionTrigger>General Settings</AccordionTrigger>
					<AccordionContent>
						<LabeledSlider
							value={clawSettings.width}
							setValue={(newValue) => setClawSettings({...clawSettings, width: newValue})}
							label={'Width'}
							min={20}
							max={1000}
							step={10}
							defaultValue={500}
						/>
						<LabeledSlider
							value={clawSettings.height}
							setValue={(newValue) => setClawSettings({...clawSettings, height: newValue})}
							label={'Height'}
							min={20}
							max={1000}
							step={10}
							defaultValue={500}
						/>
						<LabeledSlider
							value={clawSettings.gravity}
							setValue={(newValue) => setClawSettings({...clawSettings, gravity: newValue})}
							label={'Gravity'}
							min={0}
							max={2}
							step={0.1}
							defaultValue={0.8}
						/>
						<LabeledSlider
							value={clawSettings.friction}
							setValue={(newValue) => setClawSettings({...clawSettings, friction: newValue})}
							label={'Friction'}
							min={0}
							max={1}
							step={0.1}
							defaultValue={0.8}
						/>
						<LabeledSlider
							value={clawSettings.groundFriction}
							setValue={(newValue) => setClawSettings({...clawSettings, groundFriction: newValue})}
							label={'Ground Friction'}
							min={0}
							max={1}
							step={0.1}
							defaultValue={0.8}
						/>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Ball Settings</AccordionTrigger>
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
			</Accordion>
		</div>
	)
}

export default SettingsCard
