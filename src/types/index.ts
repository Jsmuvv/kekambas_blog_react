
export type UserFormDataType = {
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    password:string,
    confirmPass:string
}

export type CategoryType = "primary" | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'