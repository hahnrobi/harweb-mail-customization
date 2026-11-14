# Custom mailcow login (Flowbite layout + background image)

```
custom/
  docker-compose.override.yml      -> merge into mailcow-dockerized/docker-compose.override.yml
  web/templates/user_index.twig    -> replaces the mailbox login template
  web/css/login.css                -> compiled Tailwind (prefix tw-, no preflight)
  web/img/login-bg.svg             -> placeholder; replace with your own (jpg/webp/png/svg)
tailwind/                          -> source to rebuild login.css (npm i && npm run build)
```

## Install
1. Copy `custom/web` to `mailcow-dockerized/data/custom/web`.
2. Merge `custom/docker-compose.override.yml` into `mailcow-dockerized/docker-compose.override.yml`.
3. `docker compose up -d php-fpm-mailcow nginx-mailcow`
4. Hard-refresh the browser (static CSS may be cached).

## Change the background image
Put the file in `data/custom/web/img/` and edit `--mc-login-bg` in `tailwind/input.css`
(default `url('/img/custom/login-bg.svg')`), then `npm run build` and copy `login.css` over.
No rebuild needed if you simply overwrite `login-bg.svg` / keep the same file name.

## Rebrand colors
Edit the `--mc-primary-*` variables in `tailwind/input.css` and rebuild.

## After every mailcow update
Diff upstream `data/web/templates/user_index.twig` against your copy and port any changes
(new login options, security fixes). Mailcow variables / IDs this template relies on:
`login_user`, `pass_user`, `#dark-mode-toggle`, `#fido2-login`, `#fido2-alerts`,
`.main-logo`, `.main-logo-dark`, `.rot-enc`.

## Not covered
`admin_index.twig` and `domainadmin_index.twig` (the /admin and /domainadmin logins) are separate
templates. They can be copied from this one the same way.
