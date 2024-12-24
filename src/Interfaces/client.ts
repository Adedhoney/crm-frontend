import { ClientType } from './Enums';
import { NamedUser } from './shared';

export interface Client {
    id?: number;
    clientId: string;
    logoUrl: string;
    name: string;
    industry: string;
    email: string;
    phone: string;
    type: ClientType;
    bankingDetails: string;
    responsibleUserId: string;
    createdOn: string;
    lastModifiedOn: number;
    createdBy: string;
    modifiedBy: string;
    responsibleUser: NamedUser;
    creator: NamedUser;
    modifier: NamedUser;
}

export interface CreateClientDTO {
    name: string;
    industry: string;
    email?: string;
    phone?: string;
    type: ClientType;
    bankingDetails?: string;
    responsibleUserId?: string;
}

export interface IClientParams {
    search?: string;
    pageLimit?: number;
    pageNumber?: number;
    responsibleUserId?: string;
    sort?: ClientSort;
}

export type ClientSort = 'name-asc' | 'name-desc' | 'date-asc' | 'date-desc';
