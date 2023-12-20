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
# Nextjs pacotes supabase

npm i @supabase/auth-helpers-nestjs @supabase/supabase-js
---
# Configurar o Prisma

npm install prisma --save-dev

## Criar os arquivos do prisma
npx prisma init

## Criar a migração do modelo
npx prisma migrate dev --name create_tb_students

Ver vídeos:
https://www.youtube.com/watch?v=4x6V_r_XJBU

---

---
# Gerar chave ssh
ssh-keygen -t rsa -b 4096 -C "prof.marcelopontes@gmail.com"