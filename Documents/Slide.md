---
marp: true
---

# Como estruturar o projeto com Nextjs

---

# CONFIGURAR O ESLINT
https://youtu.be/btoUed8wg20 

# CONFIGURAR MARKDOWN
https://youtu.be/Y2N9LswHNhc

---

# Configuar os testes

## instalar os pacotes

npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @swc/core @swc/jest @types/jest


https://nextjs.org/docs/app/building-your-application/testing/jest
https://jestjs.io/pt-BR/docs/getting-started 
https://testing-library.com/docs/react-testing-library/intro/

---
# Criar Profile Supabase
##Criar função
create_profile_for_new_users

Schema: public

Return type: trigger

begin
insert into public.profiles(id, email)
values (
  new.id,
  new.email
);
return new;
end;

## criar a trigger
create trigger on_auth_users_insert after insert on auth.users for each row execute function create_profile_for_new_users();

---
# Nextjs pacotes supabase

npm i @supabase/auth-helpers-nestjs @supabase/supabase-js
---
# Configurar o Prisma

npm install prisma --save-dev

## Criar os arquivos do prisma
npx prisma init

## Criar a migração do modelo
npx prisma migrate dev --name create_tb_students
npx prisma migrate dev --name create_tb_profiles
npx prisma migrate dev --name update_tb_profiles

Ver vídeos:
https://www.youtube.com/watch?v=4x6V_r_XJBU

---

---
# Gerar chave ssh
ssh-keygen -t rsa -b 4096 -C "e-mail"


---

---
# Configuração VSCODE
### Criar pasta .vscode na raiz do projeto e adicionar o arquivo settings.json

{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.organizeImports": true
    },
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
}

### Comando VSCODE 
Ctrl + Shift + P para digitar comandos
Simple Browser para abrir um navegador
- CTRL+F2 selecionar e alterar palavras
- alt + Shift + (seta para cima) para duplicar a linha



### Plugins
Material Icon Theme
---

---
# Shadcn-ui configurar componentes

npx shadcn-ui@latest init
npx shadcn-ui@latest add

---

---
# AUTENTICAÇÃO E AUTORIZAÇÃO COM NEXT-AUTH

npm install next-auth

Parei aqui
https://youtu.be/KHKpKR1NuaU?t=10536

---

# Nextjs Multi-Idioma
https://youtu.be/Zy6vRMvQEng?list=PLR8OzKI52ppWoTRvAmB_FQPPlHS0otV7V

---

---
# Configuração do Git Flow

git branch
git flow init
git flow feature start home_page



https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
---