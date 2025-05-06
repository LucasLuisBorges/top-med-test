# TopMed Test Project

Este é um projeto de teste para a TopMed. O projeto utiliza Next.js, Prisma com SQL Server e outras tecnologias modernas para desenvolvimento web.

## Requisitos

- Node.js (versão recomendada: 18.x ou superior)
- npm ou Bun
- SQL Server

## Instalação

Clone o repositório e instale as dependências:

```bash
# Instalar dependências
npm install
```

## Configuração

### Configuração do Prisma

1. Existe um arquivo `.env.example` na raiz do projeto que serve como modelo. Crie um arquivo `.env` baseado neste exemplo e preencha todas as variáveis necessárias:

```
DATABASE_URL="sqlserver://localhost:1433;database=topmed;user=username;password=password;trustServerCertificate=true"
AUTH_SECRET="sua_chave_secreta_aqui"
```

Detalhes das variáveis:

- `DATABASE_URL`: URL de conexão com o SQL Server. Substitua os valores (localhost, username, password) de acordo com seu ambiente.
- `AUTH_SECRET`: Chave de segurança para autenticação e criptografia. Deve ser uma string aleatória complexa para garantir a segurança. Você pode gerar uma usando um gerador de senha ou hash.

Certifique-se de que todas as variáveis presentes no `.env.example` estejam configuradas no seu arquivo `.env`.

### Inicialização do Banco de Dados

Execute o comando abaixo para sincronizar o schema do Prisma com o banco de dados:

```bash
npx prisma db push
```

Se desejar visualizar seus dados através do Prisma Studio:

```bash
npx prisma studio
```

## Executando o Projeto

```bash
# Desenvolvimento com npm
npm run dev

# Ou utilizando Bun
bun dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- `/app` - Componentes e páginas da aplicação
- `/prisma` - Schema e configurações do Prisma
- `/public` - Arquivos estáticos

## Tecnologias Utilizadas

- Next.js
- Prisma ORM
- SQL Server
- TypeScript
- Tailwind CSS (se aplicável)
