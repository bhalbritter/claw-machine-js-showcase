import {LabeledSlider} from '@/components/labeled-slider.tsx'
import {ClawSettings} from '@/interfaces/clawSettings.ts'

interface SettingsCardProps {
	clawSettings: ClawSettings
	setClawSettings: (newSettings: ClawSettings) => void
}

function SettingsCard({clawSettings, setClawSettings}: SettingsCardProps) {
	return (
		<div>
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
		</div>
	)
}

export default SettingsCard
