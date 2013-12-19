
test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec \
		--bail \
		api/*/test.js

.PHONY: test