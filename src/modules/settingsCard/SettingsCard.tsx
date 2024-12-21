import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import {Accordion} from '@/components/ui/accordion'
import GeneralSettings from '@/modules/settingsCard/generalSettings/GeneralSettings.tsx'
import BallsSettings from '@/modules/settingsCard/ballsSettings/BallsSettings.tsx'
import ClawSettings from '@/modules/settingsCard/clawSettings/ClawSettings.tsx'
import DividerLine from '@/modules/settingsCard/dividerLine/DividerLine.tsx'
import {IInitialBall} from 'claw-machine-js/dist/interfaces/InitialBall'

interface SettingsCardProps {
	clawSettings: IClawSettings
	balls: IInitialBall[]
	setBalls: (newBalls: IInitialBall[]) => void
	setClawSettings: (newSettings: IClawSettings) => void
}

function SettingsCard({clawSettings, balls, setBalls, setClawSettings}: SettingsCardProps) {
	return (
		<Accordion type="multiple">
			<GeneralSettings clawSettings={clawSettings} setClawSettings={setClawSettings} />
			<BallsSettings
				balls={balls}
				setBalls={setBalls}
				clawSettings={clawSettings}
				setClawSettings={setClawSettings}
			/>
			<ClawSettings clawSettings={clawSettings} setClawSettings={setClawSettings} />
			<DividerLine clawSettings={clawSettings} setClawSettings={setClawSettings} />
		</Accordion>
	)
}

export default SettingsCard
