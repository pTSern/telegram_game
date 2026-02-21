# Setup State

### 1. Install Wrangler:
```bash
npm install -g wrangler
```
### 2. Login to Cloudflare:
```bash
wrangler login
```
### 3. Deploy worker:
```bash
npm run deploy
```
### 4. Set webhook to your telegram bot to your deployed worker url:
```bash
curl "https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook \ -d "url=<YOUR_URL>/telegram"
```

# Setup Env
### 1. Set bot token:
```bash
wrangler secret put PTS_FINANCER_BOT_TOKEN
```
> Paste bot token and press enter
### 2. Set kv
```bash
wrangler kv namespace create PTS_FINANCER_BOT_KV
```
> Replace the `id` in wrangler.toml to the created namespace id

#Other
+ Watch logs
```bash
wrangler tail
```
