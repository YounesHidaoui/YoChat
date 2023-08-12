import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Head_section from './components/Head_section.jsx';
export default function Chat({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
        <Head_section title="Dashboard" user={auth.user}/>
        </AuthenticatedLayout>
        
    );

}

