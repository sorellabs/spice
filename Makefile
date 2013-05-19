targets		 := spice.umd.js
bin        := $(shell npm bin)
browserify := $(bin)/browserify spice.js

# -- Building --
dist/${targets}: dist
	$(browserify) --standalone spice > $@

dist:
	mkdir dist

bundle: dist/spice.umd.js

clean: dist
	rm -rf dist

# -- Other tasks --
test:
	node ./test/tap.js

.PHONY: test
