#!/usr/bin/env bash
set -euo pipefail

# Imports seed/demo content into the configured Sanity project.
#
# This script is safe to run from any working directory; it will `cd` to the repo
# root so the Sanity CLI can pick up `sanity.cli.ts`.

EXPECTED_PROJECT_ID="zxiksswa"
DATASET="production"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../../.." && pwd)"

cd "$REPO_ROOT"

# Validate that `sanity.cli.ts` matches the expected target.
EXPECTED_PROJECT_ID="$EXPECTED_PROJECT_ID" DATASET="$DATASET" node -e "const fs=require('fs'); const s=fs.readFileSync('sanity.cli.ts','utf8'); const ok = s.includes('projectId: \"' + process.env.EXPECTED_PROJECT_ID + '\"') && s.includes('dataset: \"' + process.env.DATASET + '\"'); if(!ok){ console.error('sanity.cli.ts does not match expected project/dataset:', process.env.EXPECTED_PROJECT_ID, process.env.DATASET); process.exit(1); }"

import_file() {
  local filename="$1"
  npx sanity dataset import "${SCRIPT_DIR}/${filename}" "$DATASET" --replace
}

import_file "family-album.ndjson"
import_file "health-resources.ndjson"
import_file "education-resources.ndjson"
import_file "finances-resources.ndjson"
import_file "leadership.ndjson"
import_file "professionals.ndjson"
import_file "sections.ndjson"
import_file "events-upcoming.ndjson"
import_file "events-past.ndjson"
import_file "hero-carousel.ndjson"