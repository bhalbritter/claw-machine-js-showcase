import {AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion.tsx'
import {LabeledSlider} from '@/components/labeled-slider.tsx'
import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import ColorPicker from '@/components/color-picker.tsx'

interface ClawSettingsProps {
	clawSettings: IClawSettings
	setClawSettings: (settings: IClawSettings) => void
}

function ClawSettings({clawSettings, setClawSettings}: ClawSettingsProps) {
	return (
		<AccordionItem value="item-3">
			<AccordionTrigger className={'font-extrabold'}>Claw Settings</AccordionTrigger>
			<AccordionContent>
				<LabeledSlider
					value={clawSettings.clawSize}
					setValue={(newValue) => setClawSettings({...clawSettings, clawSize: newValue})}
					label={'Claw Size'}
					min={10}
					max={75}
					step={5}
					defaultValue={25}
				/>
				<LabeledSlider
					value={clawSettings.clawWidth}
					setValue={(newValue) => setClawSettings({...clawSettings, clawWidth: newValue})}
					label={'Claw Size'}
					min={2}
					max={20}
					step={1}
					defaultValue={5}
				/>
				<LabeledSlider
					value={clawSettings.clawSpeedX}
					setValue={(newValue) => setClawSettings({...clawSettings, clawSpeedX: newValue})}
					label={'Claw Speed X'}
					min={1}
					max={20}
					step={1}
					defaultValue={10}
				/>
				<LabeledSlider
					value={clawSettings.clawSpeedY}
					setValue={(newValue) => setClawSettings({...clawSettings, clawSpeedY: newValue})}
					label={'Claw Speed Y'}
					min={1}
					max={20}
					step={1}
					defaultValue={10}
				/>
				<ColorPicker
					color={clawSettings.clawColor}
					label={'Claw Color'}
					setValue={(newValue) => setClawSettings({...clawSettings, clawColor: newValue})}
				/>
				<ColorPicker
					color={clawSettings.clawBoldColor}
					label={'Claw Bolt Color'}
					setValue={(newValue) => setClawSettings({...clawSettings, clawBoldColor: newValue})}
				/>
			</AccordionContent>
		</AccordionItem>
	)
}

export default ClawSettings
