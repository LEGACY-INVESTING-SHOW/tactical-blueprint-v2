# Deployment Notes

This project's canonical production site is `https://class.managemoney101.com/`.

## Source of truth

- GitHub repo: `LEGACY-INVESTING-SHOW/tactical-blueprint-v2`
- Production branch: `main`
- Production Vercel project: `legacy-investing-show/tactical-blueprint-v2`
- Canonical landing page source: `index.html`
- Canonical confirmation page source: `confirmation/index.html`

## Local Vercel linkage

The local `.vercel/project.json` file is intentionally ignored by git and should point to the production Vercel project `tactical-blueprint-v2`.

If the local folder is ever linked to the wrong project, relink it with:

```bash
vercel link --yes --scope legacy-investing-show --project tactical-blueprint-v2
```

## Verification checklist

- `https://class.managemoney101.com/` should match `index.html`
- `https://class.managemoney101.com/confirmation/` should match `confirmation/index.html`
- `vercel inspect class.managemoney101.com` should resolve to project `tactical-blueprint-v2`
