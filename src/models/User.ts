export default class User {
  constructor(
    public id: string,
    public userName: string,
    public password: string,
    public fullName: string,
    public salary: number,
    public isManager: boolean
  ) {}
}