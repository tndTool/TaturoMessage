import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import getConversations from '../actions/getConversations';
import ConversationsList from './components/ConversationsList';

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        // @ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <ConversationsList users={users} initialItems={conversations} />
                {children}
            </div>
        </Sidebar>
    );
}
