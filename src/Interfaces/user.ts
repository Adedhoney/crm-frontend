import { Gender, UserAccountStatus, UserType } from './Enums';

export interface ILogin {
    email: string;
    password: string;
}

export interface IVerifyOtp {
    email: string;
    otp: string;
}

export interface IResetPassword {
    otpToken: string;
    newPassword: string;
}

export interface IAcceptUserInvite {
    firstName: string;
    gender: number;
    lastName: string;
    password: string;
}

export interface Invite {
    id?: number;
    inviteId: string;
    email: string;
    userType: UserType;
    expiresAt: number;
    createdOn?: number;
    lastModifiedOn?: number;
    createdBy?: string;
    modifiedBy?: string;
}

type UserSort = 'name-desc' | 'name-asc' | 'date-asc' | 'date-desc';
export interface IUserParams {
    userType?: UserType;
    search?: string;
    pageLimit?: number;
    pageNumber?: number;
    sort?: UserSort;
}

export interface User {
    id?: number;
    userId: string;
    sessionId?: string;
    email: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: Gender;
    DOB?: Date;
    phone?: string;
    location?: string;
    status: UserAccountStatus;
    userType: UserType;
    password?: string;
    createdOn?: number;
    lastModifiedOn?: number;
    createdBy?: string;
    modifiedBy?: string;
}
