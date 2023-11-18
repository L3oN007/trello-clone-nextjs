import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
	const { userId, orgId } = auth();
	return <div>organization id page</div>;
};
export default OrganizationIdPage;
