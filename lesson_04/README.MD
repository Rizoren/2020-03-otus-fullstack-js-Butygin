Описание:
-
Локальный веб сервер `server`, отвечает на запросы каждые 100ms.

Скрипт `request` для тестирования веб сервера, принимающий на вход:
- количество запросов `N`
- тип запросов - параллельный или последовательный

Для старта сервера используйте команду:
-
`npm run start`

Для запуска тестирования сервера используйте команды:
-
- `npm run send_p` (или `node requests.js 5 p`) - отправляет 5 параллельных запросов 
- `npm run send_c` (или `node requests.js 5 c`) - отправляет 5 последовательных запросов