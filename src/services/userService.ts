import { AUTH_SERVER_URL } from '../config/config';
import { IUserParams } from '../Interfaces';

export async function getUsers(payload: IUserParams) {
    try {
        const params = new URLSearchParams(payload as Record<string, string>);
        const res = await fetch(`${AUTH_SERVER_URL}/account/users?${params}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage
                    .getItem('token')!
                    .replace(/"/g, '')}`,
            },
        });
        const j = await res.json();
        if (j.status !== 'success') {
            const errorMessage = j.message || 'Unknown error';
            console.log(errorMessage);
            throw new Error(errorMessage);
        }
        return j.data;
    } catch (err: any) {
        throw err.message.replace(/^Error:\s*/, '');
    }
}
