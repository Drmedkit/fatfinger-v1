# Fatfinger

Creatieve React/Vite-site met een kleine Express-API voor het contactformulier.

## Ontwikkelen

```bash
npm install
npm run dev
```

Kwaliteitscontroles:

```bash
npm run check
npm test
npm run build
npm audit
```

## Contactformulier

De API gebruikt deze omgevingsvariabelen:

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

`POST /api/contact` schrijft naar `Fatfinger!A:E` met exact deze kolommen:

1. tijdstip
2. naam
3. e-mail
4. telefoonnummer
5. bericht

De spreadsheet kan worden gedeeld met Club7, maar het tabblad en de kolomvolgorde mogen niet worden gewijzigd. Eventuele e-mailautomatisering vindt na deze write plaats en is niet onderdeel van deze repository.

## Productie

De site kan via Vercel of met Docker worden uitgerold. De productiecontainer draait als een niet-rootgebruiker op Node.js 24.

Zet in Vercel Firewall daarnaast een IP-rate-limitregel op `/api/contact`. De applicatie begrenst aanvragen zelf ook, maar een firewallregel werkt wereldwijd vóórdat een serverless function wordt gestart.
