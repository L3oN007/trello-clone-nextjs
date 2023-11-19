import { deleteBoard } from '@/action/delete-board';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormDelete } from './form-delete';

interface BoardProps {
	id: string;
	title: string;
}

export const Board = ({ title, id }: BoardProps) => {
	const deleteBoardWithId = deleteBoard.bind(null, id);
	return (
		<form
			className='flex items-center gap-x-2'
			action={deleteBoardWithId}>
			<p>Board title: {title}</p>
			<FormDelete />
		</form>
	);
};
