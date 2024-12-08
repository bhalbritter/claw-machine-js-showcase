import {Slider} from '@/components/ui/slider'
import {Button} from '@/components/ui/button'
import {Label} from '@/components/ui/label'
import {RotateCcw} from 'lucide-react'

interface LabeledSliderProps {
	label: string
	min: number
	max: number
	step: number
	defaultValue: number
	unit?: string
	value: number
	setValue: (newValue: number) => void
}

export function LabeledSlider({label, min, max, step, defaultValue, unit = '', value, setValue}: LabeledSliderProps) {
	const handleReset = () => {
		setValue(defaultValue)
	}

	return (
		<div className="w-full max-w-sm space-y-4">
			<div className="flex items-center justify-between">
				<Label
					htmlFor="slider"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{label}
				</Label>
				<div className="flex items-center space-x-2">
					<span className="text-sm text-muted-foreground">
						{value}
						{unit}
					</span>
					<Button onClick={handleReset} variant="ghost" size="icon" className="h-8 w-8">
						<RotateCcw className="h-4 w-4" />
						<span className="sr-only">Reset</span>
					</Button>
				</div>
			</div>
			<Slider
				id="slider"
				min={min}
				max={max}
				step={step}
				value={[value]}
				onValueChange={(newValue) => setValue(newValue[0])}
				className="w-full"
			/>
		</div>
	)
}
