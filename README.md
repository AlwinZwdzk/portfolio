# 💼 Portfolio — Alwin Zawadzki

Portfolio personnel développé avec **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, et **Material UI Icons**. Le site est configuré en export statique (`output: 'export'`) pour des performances maximales et une compatibilité d'hébergement universelle (Vercel, GitHub Pages, serveur statique).

Il intègre une architecture complète de **SEO (Search Engine Optimization)** et de **GEO (Generative Engine Optimization)** pour l'indexation par les moteurs de recherche traditionnels (Google, Bing) et les modèles d'intelligence artificielle (ChatGPT, Perplexity, Claude, Gemini).

---

## 🛠️ Stack Technique

- **Framework :** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Compiler)
- **UI & Style :** [Tailwind CSS v4](https://tailwindcss.com/) & [Emotion / MUI Icons](https://mui.com/)
- **Thème :** [next-themes](https://github.com/pacocoursey/next-themes) (Mode Sombre / Clair avec synchronisation système)
- **Export :** Statique HTML / CSS / JS (`output: 'export'`)
- **Langage cible du site :** Anglais (`en`)

---

## 🚀 Installation & Démarrage

### 1. Prérequis
- **Node.js** (v18.18+ ou v20+ recommandé)
- **npm** (v9+) ou pnpm / yarn

### 2. Cloner et installer les dépendances
```bash
git clone https://github.com/AlwinZwdzk/portfolio.git
cd portfolio
npm install
```

### 3. Configuration des variables d'environnement (`.env`)
Le projet utilise une variable d'environnement pour définir l'URL de base utilisée pour les balises canoniques, le sitemap, les données structurées et les métadonnées Open Graph.

1. Créez votre fichier local à partir du modèle :
   ```bash
   cp .env.example .env.local
   ```
2. Adaptez la variable `NEXT_PUBLIC_SITE_URL` dans `.env.local` selon votre environnement :
   ```env
   # En développement local :
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # En production :
   # NEXT_PUBLIC_SITE_URL=https://alwin-zawadzki.vercel.app
   # NEXT_PUBLIC_SITE_URL=https://alwin-zawadzki.fr
   ```

> 💡 **Sur Vercel :** Vous pouvez définir `NEXT_PUBLIC_SITE_URL` directement dans l'onglet **Settings > Environment Variables** de votre projet.

### 4. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 5. Compiler pour la production (Export statique)
```bash
npm run build
```
La commande génère l'ensemble des pages statiques, du sitemap et du robots.txt dans le dossier `out/`.

---

## 📝 Guide : Ajouter un Projet ou une Expérience

Le système de métadonnées a été conçu pour être **automatisé au maximum**. Voici la procédure pas à pas lorsque vous ajoutez du contenu.

---

### A. Ajouter un Projet

#### 1. Ajouter les médias
Déposez les captures d'écran de votre projet dans le dossier :
`public/images/projects/<nom-du-projet>/` ou directement `public/images/projects/<image>.webp`.
*(Privilégiez le format `.webp` pour un temps de chargement optimal).*

#### 2. Déclarer le projet dans `src/resources/content.tsx`
Rendez-vous dans [src/resources/content.tsx](src/resources/content.tsx) et ajoutez votre projet dans le tableau `projects.projects` :

```tsx
{
    title: "Nom Du Projet",
    subtitle: "Sous-titre court et percutant",
    description: "Description détaillée du projet...",
    achievements: [
        "Réalisation 1...",
        "Réalisation 2...",
    ],
    technologies: [
        skills.typescript,
        skills.react,
        // ... vos compétences définies dans 'skills'
    ],
    images: [
        {
            src: "/images/projects/mon-projet1.webp",
            alt: "Aperçu de la page d'accueil",
            width: 1920,
            height: 1080,
        },
    ],
}
```

#### ✨ Ce qui se met à jour AUTOMATIQUEMENT (aucune action requise) :
- **Génération de la page dédiée :** L'URL `/projects/nom-du-projet` est générée automatiquement grâce à `generateStaticParams()`.
- **Métadonnées SEO :** La fonction `generateMetadata()` dans `src/app/projects/[slug]/page.tsx` extrait automatiquement :
  - Le titre : `Nom Du Projet | Alwin Zawadzki`
  - La description pour Google et les réseaux sociaux
  - L'image Open Graph (la première image du projet est utilisée pour les partages LinkedIn / X / Discord)
  - L'URL canonique
- **Sitemap :** Le fichier [src/app/sitemap.ts](src/app/sitemap.ts) boucle sur les projets et ajoute automatiquement la nouvelle URL dans `sitemap.xml` lors du build.

#### 🤖 Ce qu'il est recommandé de mettre à jour manuellement (pour les IA) :
Pour que les modèles d'IA (ChatGPT, Claude, Perplexity) soient immédiatement au courant de ce projet :
1. **[public/llms-full.txt](public/llms-full.txt) :** Ajoutez une section textuelle décrivant le projet et ses points forts.
2. Si le projet utilise une nouvelle technologie jamais vue auparavant :
   - Ajoutez le SVG dans l'objet `icons` et l'entrée dans `skills` de `src/resources/content.tsx`.
   - *(Optionnel)* Ajoutez le nom de la technologie dans le tableau `knowsAbout` de [src/components/StructuredData.tsx](src/components/StructuredData.tsx) et dans `keywords` de [src/config/site.ts](src/config/site.ts).

---

### B. Ajouter une Expérience Professionnelle

#### 1. Ajouter les images / GIFs
Déposez vos visuels dans `public/images/work/`.

#### 2. Déclarer l'expérience dans `src/resources/content.tsx`
Dans [src/resources/content.tsx](src/resources/content.tsx), ajoutez l'entrée dans le tableau `work.experiences` :

```tsx
{
    company: "Nom de l'Entreprise",
    timeframe: "Mois Année - Mois Année",
    role: "Intitulé du Poste",
    description: "Présentation de l'entreprise et du contexte de la mission...",
    technologies: [skills.php, skills.javascript, skills.mySql],
    achievements: [
        "Accomplissement technique 1...",
        "Accomplissement technique 2...",
    ],
    images: [
        {
            src: "/images/work/dashboard.webp",
            alt: "Aperçu du tableau de bord",
            width: 1730,
            height: 1080,
        },
    ],
}
```

#### ✨ Ce qui se met à jour AUTOMATIQUEMENT :
- La page `/work/nom-de-lentreprise` est créée automatiquement.
- Le titre `Nom de l'Entreprise (Intitulé du Poste) | Alwin Zawadzki` et la description Open Graph sont générés dynamiquement.
- L'URL est ajoutée à `sitemap.xml`.

#### 🤖 Mise à jour recommandée pour les IA :
- Ajoutez un résumé de cette expérience dans [public/llms-full.txt](public/llms-full.txt) sous la section `## 5. Professional Work Experience`.

---

## 🔍 Architecture SEO & Indexation IA

Le site embarque 4 piliers d'indexation :

1. **Métadonnées Natives Next.js ([src/app/layout.tsx](src/app/layout.tsx)) :**
   - Title template (`%s | Alwin Zawadzki`)
   - Description, mots-clés, auteur, directives robots.
   - Balises Open Graph & Twitter Card avec fallback sur votre avatar.

2. **Données Structurées JSON-LD ([src/components/StructuredData.tsx](src/components/StructuredData.tsx)) :**
   - Implémentation du vocabulaire [Schema.org](https://schema.org) (`WebSite`, `ProfilePage`, `Person`).
   - Permet aux moteurs et aux IA de comprendre directement votre identité, diplôme (BUT Informatique), compétences et profils sociaux (`sameAs`).

3. **Plan de site & Robots ([src/app/sitemap.ts](src/app/sitemap.ts) & [src/app/robots.ts](src/app/robots.ts)) :**
   - Génération statique de `sitemap.xml` et `robots.txt`.
   - Autorisation explicite des robots d'exploration IA (`GPTBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, etc.).

4. **Standard `llms.txt` ([public/llms.txt](public/llms.txt) & [public/llms-full.txt](public/llms-full.txt)) :**
   - Standard ouvert [llmstxt.org](https://llmstxt.org).
   - Fournit aux LLMs un texte brut propre, sans balises HTML ni JavaScript à exécuter, pour citer instantanément votre profil lors de recherches.

---

## 🧪 Validation du Build

Après chaque ajout de projet ou d'expérience, validez que l'export statique s'effectue sans encombre :
```bash
npm run build
```
Next.js doit afficher la liste de toutes vos routes statiques (`/`, `/about`, `/projects/...`, `/work/...`, `/robots.txt`, `/sitemap.xml`) avec un indicateur vert `● (SSG)`.
