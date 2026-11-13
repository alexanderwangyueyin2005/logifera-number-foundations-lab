# Deployment note

This repository contains the full source and QA materials.

For Netlify Git-based deployment, use:
- Build command: leave blank
- Publish directory: `site`

The `site/` directory contains only the static runtime files required by the public website. The root-level `qa/`, `tests/`, and Markdown reports are kept in the GitHub repository but are not included in the public Netlify deployment.

No framework build step, environment variables, API keys, or server are required.
