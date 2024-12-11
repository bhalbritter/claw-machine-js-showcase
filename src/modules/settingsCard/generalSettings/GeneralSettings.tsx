import {AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion.tsx'
import {LabeledSlider} from '@/components/labeled-slider.tsx'
import {IClawSettings} from '@/interfaces/IClawSettings.ts'

interface GeneralSettingsProps {
	clawSettings: IClawSettings
	setClawSettings: (settings: IClawSettings) => void
}

function GeneralSettings({clawSettings, setClawSettings}: GeneralSettingsProps) {
	return (
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
	)
}

export default GeneralSettings
