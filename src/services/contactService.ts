import { AUTH_SERVER_URL } from '../config/config';
import { CreateContactDTO, IContactParams } from '../Interfaces';

export async function getContacts(payload: IContactParams) {
    try {
        const params = new URLSearchParams(payload as Record<string, string>);
        const res = await fetch(`${AUTH_SERVER_URL}/contact?${params}`, {
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

export async function createContact(payload: { data: CreateContactDTO }) {
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage
                    .getItem('token')!
                    .replace(/"/g, '')}`,
            },
            body: JSON.stringify(payload),
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

export async function getContactById(contactId: string) {
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/contact/${contactId}`, {
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
export async function updateContact(data: {
    payload: { data: CreateContactDTO };
    contactId: string;
}) {
    const { contactId, payload } = data;
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/contact/${contactId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage
                    .getItem('token')!
                    .replace(/"/g, '')}`,
            },
            body: JSON.stringify(payload),
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
