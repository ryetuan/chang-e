---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
draft: true # Change to `false` to publish the page
description: '' # Use to customise the meta description within the head element
slug: '{{ .File.ContentBaseName | urlize }}'
summary: '' # An optional summary of the page content
weight: # Use to order the page within the collection, must be an integer, e.g. 0, 1, 2, etc
params:
  author: '' # Name of the person who wrote the book
  published: '' # Year the book was published
  genre: ['', ''] # How you’d categorise the book, e.g. Fiction, Non-fiction, History, etc
  startdate: '' # Date you started reading the book
  enddate: '' # Date you finished reading the book
  rating: # How you rated the book, must be an integer between 0 and 5
  format: '' # Print, eBook, audiobook
  status: '' # Reading status, e.g reading, read, want-to-read, abandonded
  url: '' # URL for Goodreads, Amazon, Bookshop, etc
---

## Summary
_How would you summarise the book in 3 sentences?_

## Big ideas
_What were the main takeaways?_

## Notes and highlights
_Add any notes or highlights you made here_

## Further reading
_What other books were mentioned? What books are related?_