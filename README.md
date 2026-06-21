# 💻 Portfólio — Antonio Harlisson Sousa Paiva

Site de portfólio profissional construído com **Next.js 16**, **TypeScript** e **Tailwind CSS**,
pronto para deploy na Vercel.

---

## 🚀 Tecnologias

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Zero dependências desnecessárias

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Copie o arquivo de variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ✏️ Como editar seus dados

Todos os dados do site estão centralizados na pasta `data/`. Você **nunca precisa mexer nos componentes** para atualizar seu conteúdo.

| Arquivo                   | O que editar                        |
|--------------------------|--------------------------------------|
| `data/profile.ts`        | Nome, bio, links, foto, currículo   |
| `data/projects.ts`       | Projetos                            |
| `data/skills.ts`         | Habilidades e tecnologias           |
| `data/experience.ts`     | Experiências profissionais          |
| `data/education.ts`      | Formação acadêmica                  |
| `data/certificates.ts`   | Certificados e cursos               |

### Editar perfil

Abra `data/profile.ts` e substitua os valores marcados com `🔧`.

### Adicionar um novo projeto

```ts
// data/projects.ts
{
  id: "meu-novo-projeto",
  title: "Nome do Projeto",
  description: "Descrição curta do projeto.",
  image: "/projects/meu-projeto.png",  // coloque a imagem em /public/projects/
  technologies: ["Next.js", "TypeScript"],
  status: "completed",  // "completed" | "in-progress" | "study"
  githubUrl: "https://github.com/SEU-USUARIO/projeto",
  demoUrl: "https://projeto.vercel.app",
},
```

### Adicionar um certificado

```ts
// data/certificates.ts
{
  id: "meu-certificado",
  title: "Nome do Curso/Certificado",
  issuer: "Plataforma ou Instituição",
  date: "2025-03",         // formato: "AAAA-MM"
  credentialUrl: "https://link-do-certificado.com",
  tags: ["JavaScript", "Front-end"],
},
```

### Trocar foto

1. Coloque sua foto em `public/avatar.png` (recomendado: quadrada, mínimo 400×400px).
2. Confirme que `data/profile.ts` aponta para `"/avatar.png"`.

### Adicionar currículo PDF

1. Coloque seu currículo em `public/curriculo.pdf`.
2. Confirme que `data/profile.ts` tem `resumeUrl: "/curriculo.pdf"`.

---

## 📬 Configurar formulário de contato

Por padrão, o formulário valida os dados e salva no log do servidor (sem envio de e-mail).
Para habilitar o envio real, escolha **uma** das opções:

### Opção 1 — Resend (recomendado)

1. Crie conta em [resend.com](https://resend.com)
2. Gere uma API Key
3. No `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxx
   CONTACT_EMAIL_TO=antharlison12@gmail.com
   CONTACT_EMAIL_FROM=portfolio@seudominio.com
   ```
4. Descomente o bloco `--- Opção 1: Resend ---` em `app/api/contact/route.ts`

### Opção 2 — Formspree (mais simples)

1. Crie um formulário em [formspree.io](https://formspree.io)
2. No `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
3. Altere o `fetch` em `Contact.tsx` para enviar para o endpoint do Formspree.

---

## 🌐 Deploy na Vercel

1. Faça push do projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. Adicione as variáveis de ambiente em **Settings → Environment Variables**
4. Clique em **Deploy**

```bash
# Build local para testar antes do deploy
npm run build
npm run start
```

---

## 🔒 Segurança — antes do deploy

- [ ] Nunca envie `.env.local` para o Git (já está no `.gitignore`)
- [ ] Não coloque API keys no código — use variáveis de ambiente
- [ ] Confirme que `.env.example` não tem chaves reais
- [ ] Revise os links em `data/profile.ts`

---

## 🛠️ Comandos disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm run start    # Servidor de produção (após build)
npm run lint     # Verificação de código com ESLint
```

---

## 📁 Estrutura do projeto

```
portfolio/
├── app/
│   ├── api/contact/route.ts   # API de formulário de contato
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout raiz (SEO, tema)
│   └── page.tsx               # Página principal
├── components/
│   ├── sections/              # Seções do site (Hero, About, etc.)
│   └── ui/                    # Componentes reutilizáveis
├── data/                      # ← EDITE AQUI seus dados
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   └── certificates.ts
├── public/
│   ├── avatar.png             # 🔧 Sua foto
│   ├── curriculo.pdf          # 🔧 Seu currículo
│   └── projects/              # 🔧 Screenshots dos projetos
├── .env.example               # Variáveis necessárias
├── .gitignore
└── README.md
```

---

## 🗺️ Próximos passos recomendados

- [ ] Substituir placeholders em `data/profile.ts`
- [ ] Adicionar foto em `public/avatar.png`
- [ ] Adicionar currículo em `public/curriculo.pdf`
- [ ] Criar imagem Open Graph (`public/og-image.png`, 1200×630px)
- [ ] Adicionar screenshots dos projetos em `public/projects/`
- [ ] Configurar serviço de e-mail para o formulário
- [ ] Fazer deploy na Vercel
- [ ] Adicionar Google Analytics (opcional)
- [ ] Conectar domínio personalizado (opcional)

---

Feito com 💙 por **Antonio Harlisson Sousa Paiva**
