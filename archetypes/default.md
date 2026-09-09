---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
draft: true #false = publish page : D
description: ''
slug: '{{ .File.ContentBaseName | urlize }}'
---