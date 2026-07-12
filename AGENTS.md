### Translation Instructions

Whenever adding, editing, or removing user-facing text, ensure the change is applied consistently across all supported languages:

- English
- Portuguese (Brazil)
- Spanish
- Deutsch (German)
- Irish (Gaeilge)

Never update only one language. Keep all translations and translation keys consistent.


### GitIgnore Instructions

Whenever creating, generating, or adding new files or folders:

- Check whether each item should be committed to Git or added to .gitignore.
- Commit source code, configuration templates, required assets, and project documentation.
- Ignore generated files, build output, dependencies, caches, logs, temporary files, local environment files, editor settings, and files containing secrets.
- Never commit .env files, API keys, credentials, tokens, or other sensitive information.
- Update .gitignore when introducing a new tool, framework, build process, or generated directory.
- Do not add files to .gitignore without confirming they are unnecessary for building or running the project.
- Do not ignore files that are already tracked without clearly reporting it, because adding them to .gitignore will not automatically stop Git from tracking them.
- Avoid duplicate, overly broad, or unnecessary .gitignore rules.