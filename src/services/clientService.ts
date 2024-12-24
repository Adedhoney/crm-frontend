import { AUTH_SERVER_URL } from '../config/config';
import { CreateClientDTO, IClientParams } from '../Interfaces';

export async function getClients(payload: IClientParams) {
    try {
        const params = new URLSearchParams(payload as Record<string, string>);
        const res = await fetch(`${AUTH_SERVER_URL}/client?${params}`, {
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

export async function createClient(payload: FormData) {
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/client`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage
                    .getItem('token')!
                    .replace(/"/g, '')}`,
            },
            body: payload,
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

export async function getClientById(clientId: string) {
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/client/${clientId}`, {
            method: 'GET',
            headers: {
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
export async function updateClient(data: {
    payload: { data: CreateClientDTO };
    clientId: string;
}) {
    const { clientId, payload } = data;
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/client/${clientId}`, {
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
export async function updateClientImage(data: {
    payload: FormData;
    clientId: string;
}) {
    const { clientId, payload } = data;
    try {
        const res = await fetch(`${AUTH_SERVER_URL}/client/${clientId}/logo`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage
                    .getItem('token')!
                    .replace(/"/g, '')}`,
            },
            body: payload,
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
