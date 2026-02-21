set /p token="Enter your Telegram Bot Token: "
set /p url="Enter your Webhook URL: "

curl "https://api.telegram.org/bot%token%/setWebhook \ -d "url=%url%/telegram"
