export type UserProps = {
   email: string;
   role: string;
};

export type CredentialRequestProps = {
   email: string;
   password: string;
};

export type LoginResponseProps = {
   email: string;
   role: string;
   token: string;
};
