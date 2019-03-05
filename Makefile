OUT_DIR_SERVER := build

WEBPACK = node_modules/.bin/webpack
TSLINT = node_modules/.bin/tslint
STYLELINT = node_modules/.bin/stylelint
TSC = node_modules/.bin/tsc
SUPERVISOR = node_modules/.bin/supervisor

.PHONY: deps
deps:
	npm i

.PHONY: server.run.dev
server.run.dev:
	NODE_PATH=$(OUT_DIR_SERVER) \
	$(SUPERVISOR) \
		--non-interactive \
		--quiet \
		--no-restart-on exit \
		--watch build/server \
		-- build/server/app.js

.PHONY: server.run.prod
server.run.prod:
	NODE_PATH=$(OUT_DIR_SERVER) \
	NODE_ENVIRONMENT=production \
	node ./build/server/app.js

.PHONY: client.build.dev
client.build.dev:
	$(WEBPACK) -w

.PHONY: client.build.prod
client.build.prod:
	NODE_ENVIRONMENT=production $(WEBPACK)

.PHONY: server.build.dev
server.build.dev:
	$(TSC) -p src/server/tsconfig.json --watch

.PHONY: server.build.prod
server.build.prod:
	$(TSC) -p src/server/tsconfig.json

.PHONY: copy.res
copy.res:
	cp -r ./client/resourses build/

.PHONY: lint
lint:
	make lint.server && \
	make lint.client

.PHONY: lint.server
lint.server:
	$(TSLINT) -p src/server/tsconfig.json src/server/**/*.ts

.PHONY: lint.client
lint.client:
	$(TSLINT) -p src/client/tsconfig.json src/client/**/*.{ts,tsx} && \
	$(STYLELINT) src/client/**/*.scss
