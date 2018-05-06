#!/usr/bin/env python3

import os, math, cgi, random


print("Content-type: text/html")
print()


print("""
<html>
""")

signLetters = os.listdir("ASL")

def generateQuestion():
	link = ""
	random.shuffle(signLetters)
	lth = len(signLetters)
	for i in range(lth):
		l = signLetters[i]
		letter = l[4:5]
		path = "ASL/" + l
		link += """
		<div>
		<h3> Question {}</h3>
		<img src={}>
		What letter is this the sign? <input type='text' name='q{}a'>
		</div>""".format(i+1, path, i+1)
	return link

print("""
<head>
</head>
<body>
	""")

print(generateQuestion())

print("""
</body>
</html>
	""")