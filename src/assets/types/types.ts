export interface ListData {
  id: string
  login: string
  password: null | string
  type: 'local' | 'LDAP'
  marks: { text: string }[]
}