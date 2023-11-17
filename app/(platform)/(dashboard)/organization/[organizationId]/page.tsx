import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
	const { userId, orgId } = auth();
	return <div>OrganizationIdPage</div>;
};
export default OrganizationIdPage;
