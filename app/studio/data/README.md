# Sanity seed/import data

This folder contains `.ndjson` data exports and an import helper script.

## What it’s for

These files are **not used by the Next.js app at runtime**. They exist to quickly
seed/import content into Sanity.

## How to import

Run the import script from the repo root (recommended):

- Using Git Bash / WSL:
  - `bash app/studio/data/import.sh`

The script imports into:

- **Project**: `zxiksswa`
- **Dataset**: `production`

It uses `sanity.cli.ts` in the repo root to determine the Sanity project.

> Note: The script uses `--replace`, so documents with the same `_id` will be overwritten.
