
build:
	#temporary fix
	npm run build

deploy: build
	git add -f dist
	git commit -m "Build"
#	# -- https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b
	git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
	git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
	git branch -D gh-pages # delete the local gh-pages because you will need it: ref
	# ----
	git reset --soft HEAD~1
	git rm -r --cached dist --quiet

