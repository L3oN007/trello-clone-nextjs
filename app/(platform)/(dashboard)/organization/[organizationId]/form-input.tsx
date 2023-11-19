import { Input } from '@/components/ui/input';

interface FormInputProps {
	errors?: {
		title?: string[];
	};
}
export const FormInput = ({ errors }: FormInputProps) => {
	return (
		<div>
			<Input
				type='text'
				id='title'
				name='title'
				required
				placeholder='Enter a board title'
			/>
			{errors?.title ? (
				<div>
					{errors.title.map((error: string) => (
						<p key={error} className='text-rose-500'>
							{error}
						</p>
					))}
				</div>
			) : null}
		</div>
	);
};
