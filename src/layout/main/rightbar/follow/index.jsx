import SidebarSection from '~/components/sidebarSection';
import UserCard from '~/components/userCard';
import { followUsers } from '~/mock';
import { useAccount } from '~/store/auth/hooks';

export default function Follow() {
    const account = useAccount()
    return (
        <SidebarSection
            title='Who to Follow'
            more={`/connect_people?user_id=${account.id}`}>
            {followUsers.map(user => <UserCard user={user} key={user.id} />)}
        </SidebarSection>
    )
}
