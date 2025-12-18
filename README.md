# Gioiosa Futsal — Sito vetrina

Sito web statico per la squadra Gioiosa Futsal: presenta la rosa, la storia del club, il calendario, la classifica stagionale e gli sponsor.

## Sommario
- Descrizione del progetto
- Tecnologie usate
- Come eseguire il progetto in locale
- Struttura dei file
- Come aggiornare i contenuti (file JSON)
- Deployment e contributi

## Descrizione
Questo repository contiene il front-end di un sito vetrina per una squadra di futsal. Le pagine sono realizzate con HTML/CSS/Tailwind e JavaScript; i contenuti dinamici (rosa, calendario, sponsor, storia) sono memorizzati in file JSON sotto la cartella `data/` e caricati tramite script in `src/js/`.

## Tecnologie
- HTML5
- Tailwind CSS (PostCSS)
- JavaScript (ES6+)
- Build: script NPM (PostCSS/Tailwind o altro configurato in `package.json`)

## Requisiti
- Node.js e npm installati per eseguire eventuali script di build.

## Installazione e sviluppo
1. Clona il repository.
2. Entra nella cartella del progetto:

```bash
cd "Materiale Web/Gioiosa_Futsal"
```

3. Installa le dipendenze:

```bash
npm install
```

4. Avvia il workflow di sviluppo:

```bash
npm run dev
```

Nota: i nomi degli script possono variare; verifica il tuo `package.json` per i comandi esatti.

## Struttura del progetto (sintesi)
- `index.html` — pagina principale
- `src/` — sorgenti JS e componenti
  - `src/main.js` — entry JavaScript
  - `src/components/` — componenti riutilizzabili (`header.js`, `footer.js`)
  - `src/js/` — script specifici per pagina (`rosa.js`, `storia.js`, `calendario.js`, `swiper.js`)
  - `src/assets/images/` — immagini di sponsor e squadre
- `styles/` — sorgente Tailwind (`input.css`)
- `data/` — file JSON con i contenuti: `rosa.json`, `calendario.json`, `sponsor.json`, `storia.json`
- `postcss.config.js`, `tailwind.config.js` — configurazioni CSS
- `package.json` — script e dipendenze

## Dati e personalizzazione
- I contenuti vengono letti dai file in `data/`. Per aggiornare la rosa, il calendario o gli sponsor, modifica gli opportuni file JSON mantenendone la struttura.
- Per cambiare i colori o il design, modifica `styles/input.css` e la configurazione di Tailwind.

## Licenza
Inserisci qui la licenza desiderata (es. MIT) o specifica che il progetto è privato.

