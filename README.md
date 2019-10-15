# Google Cloud Platform Billing/Budget Notification on Slack
## Stack used
-   Google Cloud Billing
-   Google Cloud Pub/Sub
-   Google Cloud Functions
-   Slack Incoming Webhook

## Steps

### Cloud Functions
-   Go to [Google Cloud Functions](https://console.cloud.google.com/functions/add)
-   Give a name and minimal spec
-   Select Trigger as Pub/Sub
-   Create a new topic
-   Select Inline editor for now
-   Select Runtime Nodejs
-   Paste the `index.js` and `package.json` content on respective text area
-   Enter the corresponding function to execute
-   Expand `More` and give `SLACK_WEBHOOK_URL` environment variable which is slack incoming webhook url
-   Create the function

### Budget
-   Create a budget from [Budgets and alerts](https://console.cloud.google.com/billing) of Google Cloud Console
-   At the bottom on `Manage notifications`, connect to the Pub/Sub topic create above and we are done

It will send the budget amount along with the expenses to slack channel


-----------------------------------------------------------------------------------------------------------------------------

## Stack's usadas
-   Google Cloud Billing
-   Google Cloud Pub/Sub
-   Google Cloud Functions
-   Slack Incoming Webhook

## Passos

### Funções da nuvem
- Acesse [Google Cloud Functions] (https://console.cloud.google.com/functions/add)
- Dê um nome e especificações mínimas
- Selecione Trigger como Pub/Sub
- Crie um new topic
- Selecione Inline editor por enquanto
- Selecione Runtime Nodejs
- Cole o conteúdo `index.js` e` package.json` na respectiva área de texto
- Digite a function  correspondente para executar
- Expanda `More` e forneça a variável de ambiente` SLACK_WEBHOOK_URL`, que é uma URL de webhook de entrada frouxa
- Crie a função

### Despesas
- Crie um orçamento em [Orçamentos e alertas] (https://console.cloud.google.com/billing) do Google Cloud Console
- Na parte inferior de `Gerenciar notificações ', conecte-se ao tópico Pub / Sub criado acima e pronto

Ele enviará o valor do orçamento, juntamente com as despesas, para canalizar
