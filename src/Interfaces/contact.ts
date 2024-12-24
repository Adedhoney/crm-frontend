import { Client } from './client';
import { NamedUser } from './shared';

export interface CreateContactDTO {
    name: string;
    email?: string;
    phone?: string;
    role?: string;
    title?: string;
    clientId?: string;
    responsibleUserId?: string;
}

export interface Contact {
    id?: number;
    clientId: string;
    contactId: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    title: string;
    responsibleUserId: string;
    createdOn: string;
    lastModifiedOn: number;
    createdBy: string;
    modifiedBy: string;
    responsibleUser: NamedUser;
    creator: NamedUser;
    modifier: NamedUser;
    client: Client;
}

export interface IContactParams {
    search?: string;
    clientId?: string;
    responsibleUserId?: string;
    pageLimit?: number;
    pageNumber?: number;
    sort?: ContactSort;
}
type ContactSort = 'name-asc' | 'name-desc' | 'date-asc' | 'date-desc';
