const userTable: { [key: string]: string } = {};

export function addUser(nome: string, senha: string) {
    userTable[nome] = senha;
}

export function authenticateUser(nome: string, senha: string): boolean {
    const storedSenha = userTable[nome];
    return storedSenha === senha;
}
