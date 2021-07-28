'use strict'
module.exports = function parse_url(req)
	{ let pathname = ''
	let query = ''
	let hash = ''
	let state = 0
	let i = 0
	const len = req.url.length
	for (; i < len && state === 0; i++)
		{ const c = req.url[i]
		switch(c)
			{ case '?':
				state++
				break
			case '#':
				state += 2
				break
			default:
				pathname += c }}
	for (; i < len && state === 1; i++)
		{ const c = req.url[i]
		switch(c)
			{ case '#':
				state++
				break
			default:
				query += c }}
	for (; i < len && state === 2; i++)
		{ hash += req.url[i] }

	req.pathname = decodeURIComponent(pathname)
	req.query = decodeURIComponent(query)
	req.hash = decodeURIComponent(hash) }
