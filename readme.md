# Setup State

### 1. Install Wrangler:
```bash
npm install -g wrangler
```
### 2. Login to Cloudflare:
```bash
wrangler login
```
### 3. Setup worker:
```bash
npx wrangler setup
```
### 4. Deploy worker:
```bash
npm run deploy
```
### 5. Set webhook to your telegram bot to your deployed worker url:
```bash
curl "https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook \ -d "url=<YOUR_URL>/telegram/<GAME_ROUTER>"
```



# Setup Env
### 1. Set bot token:
```bash
wrangler secret put PTS_TOKEN
```
> Paste bot token and press enter
### 2. Set kv
```bash
wrangler kv namespace create PTS_KV
```
> Replace the `id` in wrangler.toml to the created namespace id

#Other
+ Watch logs
```bash
wrangler tail
```
+ Drop pending updates url:
```
https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook?url=<YOUR_URL>/telegram/<GAME_ROUTER>/&drop_pending_updates=True
```
