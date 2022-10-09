start:
	PORT=3001 npm start

lint:
	npx eslint src

fix:
	npx eslint --fix src

test:
	npm test

build:
	npm run build