# Benefits App — Level 2 + Level 3 Starter Backend

This package helps you start building:

## Level 2: Patient-specific insurance connection
Goal:
- User clicks "Connect Insurance"
- User authorizes with payer/Medicare
- App receives secure OAuth token
- Backend retrieves claims/coverage-style data through FHIR APIs
- App shows deductible status, plan data, claims history, and likely patient responsibility

Best first target:
- CMS Blue Button 2.0 sandbox for Medicare-style claims data

## Level 3: Prior authorization
Goal:
- App checks if prior authorization is likely needed
- App gathers needed documentation
- App can eventually submit/track prior auth through FHIR/Da Vinci PAS-compatible systems

Important:
This is a starter scaffold. It is NOT production-ready and does not make you HIPAA compliant by itself.

## Folder structure

```text
benefits-level-2-3/
├── server.js
├── package.json
├── .env.example
├── routes/
│   ├── bluebutton.js
│   ├── priorauth.js
│   └── estimator.js
├── services/
│   ├── fhirClient.js
│   ├── tokenStore.js
│   └── priorAuthRules.js
├── public/
│   ├── level2-level3.html
│   └── api-client.js
└── docs/
    ├── LEVEL_2_BUILD_PLAN.md
    ├── LEVEL_3_BUILD_PLAN.md
    └── COMPLIANCE_CHECKLIST.md
```

## Local setup

1. Install Node.js
2. Open this folder in VS Code
3. Run:

```bash
npm install
npm run dev
```

4. Open:

```text
http://localhost:3000/level2-level3.html
```

## Environment setup

Copy:

```text
.env.example
```

Rename it:

```text
.env
```

Fill in your real values later.

## Do not put API keys in front-end code

Never place:
- OpenAI API keys
- payer client secrets
- Blue Button client secrets
- database passwords

inside `index.html`, `script.js`, or GitHub Pages browser code.

## Production requirements

Before using real patient data:
- HIPAA/privacy legal review
- encrypted database
- user consent records
- access logs
- secure token storage
- Business Associate Agreements when applicable
- privacy policy and terms
- breach response plan
