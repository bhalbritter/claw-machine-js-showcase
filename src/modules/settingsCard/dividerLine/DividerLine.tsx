import {AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion.tsx'
import {LabeledSlider} from '@/components/labeled-slider.tsx'
import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import ColorPicker from '@/components/color-picker.tsx'

interface DividerLineProps {
	clawSettings: IClawSettings
	setClawSettings: (settings: IClawSettings) => void
}

function DividerLine({clawSettings, setClawSettings}: DividerLineProps) {
	return (
		<AccordionItem value="item-4">
			<AccordionTrigger className={'font-extrabold'}>Divider Line Settings</AccordionTrigger>
			<AccordionContent>
				<LabeledSlider
					value={clawSettings.dividerLineWidth}
					setValue={(newValue) => setClawSettings({...clawSettings, dividerLineWidth: newValue})}
					label={'Divider Line Width'}
					min={10}
					max={250}
					step={5}
					defaultValue={70}
				/>
				<LabeledSlider
					value={clawSettings.dividerLineHeight}
					setValue={(newValue) => setClawSettings({...clawSettings, dividerLineHeight: newValue})}
					label={'Divider Line Height'}
					min={0}
					max={300}
					step={5}
					defaultValue={140}
				/>
				<LabeledSlider
					value={clawSettings.dividerLineThickness}
					setValue={(newValue) => setClawSettings({...clawSettings, dividerLineThickness: newValue})}
					label={'Divider Line Thickness'}
					min={5}
					max={60}
					step={5}
					defaultValue={20}
				/>
				<ColorPicker
					color={clawSettings.dividerLineFillColor}
					label={'Divider Line Fill Color'}
					setValue={(newValue) => setClawSettings({...clawSettings, dividerLineFillColor: newValue})}
				/>
				<ColorPicker
					color={clawSettings.dividerLineBorderColor}
					label={'Divider Line Border Color'}
					setValue={(newValue) => setClawSettings({...clawSettings, dividerLineBorderColor: newValue})}
				/>
			</AccordionContent>
		</AccordionItem>
	)
}

export default DividerLine
