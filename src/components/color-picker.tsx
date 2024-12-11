import {Label} from '@/components/ui/label'
import {Input} from '@/components/ui/input'

interface ColorPickerProps {
	label: string
	color: string
	setValue: (newValue: string) => void
}

export default function ColorPicker({label, color, setValue}: ColorPickerProps) {
	return (
		<div className="w-full max-w-sm space-y-4 mt-1.5">
			<div className="space-y-2">
				<Label htmlFor="color-picker">{label}</Label>
				<div className="flex items-center space-x-4">
					<Input
						id="color-picker"
						type="color"
						value={color}
						onChange={(e) => setValue(e.target.value)}
						className="h-10 w-10 cursor-pointer appearance-none border-0 bg-transparent p-0"
					/>
					<span className="text-sm font-medium">{color}</span>
				</div>
			</div>
		</div>
	)
}
