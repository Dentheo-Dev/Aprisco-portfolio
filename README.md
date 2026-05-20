# Aprisco 🐑

> Sistema SaaS de gestão de igrejas brasileiras — multi-tenant, completo e em produção.

[![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)](https://python.org)
[![Django](https://img.shields.io/badge/Django-6-green?logo=django)](https://djangoproject.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-produção-blue?logo=postgresql)](https://postgresql.org)
[![Status](https://img.shields.io/badge/Status-Em%20Produção-brightgreen)]()

---

## 🔗 Demo ao vivo

Acesse e explore o sistema completo com dados reais de demonstração:

👉 **[apriscoapp.com.br/entrar/DEMO](https://apriscoapp.com.br/entrar/DEMO/)**

> Se redirecionar para a tela de login, use o código: `DEMO`

### Perfis disponíveis para teste

| Nome | CPF | Perfil |
|---|---|---|
| Martes Oliveira | 000.090.001-00 | Pastor + Líder de célula |
| Lucas Ferreira | 000.090.002-83 | Pastor de rede + Líder + Responsável por curso |
| Beatriz Santos | 000.090.003-64 | Líder de célula + Formada em curso |
| Carolina Lima | 000.090.004-45 | Membro de célula |
| Roberto Dias | 000.090.005-26 | Membro simples |

> **Senha de todos:** `Senha123`

---

## 📋 Sobre o projeto

O Aprisco nasceu para resolver um problema real: igrejas brasileiras não tinham um sistema acessível, simples e completo para gerenciar membros, células, eventos e finanças em um só lugar.

Cada igreja acessa o sistema via **subdomínio próprio** (`suaigreja.apriscoapp.com.br`), com dados completamente isolados de outras igrejas — arquitetura **multi-tenant**.

---

## ✅ Funcionalidades

- **Membros** — Cadastro completo, perfil editável, vínculos familiares, importação via XLSX
- **Células e Redes** — Gestão de células, presença, multiplicação, árvore de células, busca por CEP
- **Cursos** — Inscrições, aulas, certificados, trilhas de aprendizado
- **Eventos** — Ingressos, QR Code de check-in, cupons de desconto
- **Financeiro** — Lançamentos, categorias, relatórios mensais
- **Voluntários** — Escalas, trocas, check-in por QR Code, ranking de pontos
- **Home da Igreja** — Página configurável com banners, cards, mural de oração, transmissões ao vivo
- **Colaboradores** — Área separada com permissões granulares por módulo
- **Solicitações** — Sistema de atendimento com mensagens e anexos
- **Notificações** — Sistema interno de avisos
- **PWA** — Instalável como app no celular
- **Subdomínio por igreja** — Cada igreja com seu próprio acesso

---

## 🛠️ Stack tecnológica

| Camada | Tecnologia |
|---|---|
| Back-end | Python 3.12 + Django 6 |
| Front-end | HTML + JavaScript + Bootstrap 5 |
| API | Django REST Framework |
| Banco de dados | PostgreSQL (produção) |
| Mídia | Cloudinary |
| Hospedagem | Render |
| DNS / Subdomínios | Cloudflare |
| Domínio | Registro.br |
| Email | Gmail SMTP |

---

## 🏗️ Arquitetura

### Multi-tenancy
Cada igreja tem isolamento completo de dados, acessível via:
- Subdomínio: `igrejabatista.apriscoapp.com.br`
- Domínio próprio: `app.igrejabatista.com.br`
- Código de entrada: `apriscoapp.com.br/entrar/`

### Design patterns aplicados

```
app/
├── selectors.py  # Somente leitura — queries sem efeitos colaterais
├── services.py   # Somente escrita — mutations com @transaction.atomic
├── policies.py   # Somente booleanos — regras de permissão sem DB
└── views.py      # Orquestra: policy → service/selector → render
```

Essa separação garante código organizado, testável e fácil de manter.

---

## 🗂️ Estrutura do projeto

```
Aprisco/
├── core/           # Middleware, auth, decorators, context processors
├── members/        # Membros e relacionamentos
├── cells/          # Células, redes, estudos semanais
├── courses/        # Cursos e trilhas
├── events/         # Eventos e ingressos
├── finance/        # Financeiro
├── volunteers/     # Voluntários e escalas
├── collaborators/  # Colaboradores externos
├── home/           # Home configurável da igreja
├── notifications/  # Notificações internas
├── requests_app/   # Solicitações e atendimento
└── config/         # Settings e URLs raiz
```

---

## ⚙️ Rodando localmente

```bash
git clone https://github.com/Dentheo-Dev/Aprisco-app.git
cd Aprisco
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

> O repositório com o código-fonte é privado. Este repositório é apenas a documentação pública do projeto.

---

## 📄 Licença

Projeto privado — todos os direitos reservados © Aprisco
