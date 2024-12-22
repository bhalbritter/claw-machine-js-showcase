import {IClawSettings} from '@/interfaces/IClawSettings.ts'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerDescription,
	DrawerTrigger,
} from '@/components/ui/drawer'
import {IInitialBall} from 'claw-machine-js/dist/interfaces/InitialBall'
import {Button} from '@/components/ui/button.tsx'
import SettingsCard from '@/modules/settingsCard/SettingsCard.tsx'
import {useState} from 'react'
import wrenchIcon from './../../../public/build-outline.svg'

interface SettingsCardProps {
	clawSettings: IClawSettings
	balls: IInitialBall[]
	setBalls: (newBalls: IInitialBall[]) => void
	setClawSettings: (newSettings: IClawSettings) => void
}

function SettingsDrawer({clawSettings, balls, setBalls, setClawSettings}: SettingsCardProps) {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

	return (
		<Drawer open={isDrawerOpen} closeThreshold={1} dismissible={false} disablePreventScroll={true}>
			<DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
				<div className={'p-2 bg-black rounded-full'}>
					<img className={'w-7'} alt={'wrenchIcon'} src={wrenchIcon} />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Settings</DrawerTitle>
					<DrawerDescription>Play around with different Settings for the Simulation</DrawerDescription>
				</DrawerHeader>
				<DrawerHeader className="max-h-[60vh] overflow-y-auto">
					<SettingsCard
						clawSettings={clawSettings}
						balls={balls}
						setBalls={setBalls}
						setClawSettings={setClawSettings}
					/>
				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose>
						<Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
							Close
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default SettingsDrawer
