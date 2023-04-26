export interface ZchatNewUser{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ZchatUserDetails{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface ZchatUserLoginCredentials{
    email: string;
    password: string;
}

export interface ZchatJwt{
   token: string;
}

export interface ZchatUserCredentials extends ZchatJwt{
    user: ZchatUserDetails;
}