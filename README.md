API Calidad del aire DF
===========

API para obtener información histórica de contaminantes en el aire de la Ciudad de México

#### Instalación y requisitos

- Obtener info y guardar en HTML: PHP, Composer para depencencias
- Parsear HTMLs y conversión a JSON: NodeJS requiere ```npm wscraper```

#### Mediciones de concentración por estación (2005-2014)

- http://www.aire.df.gob.mx/estadisticas-consultas/concentraciones/index.php
- Están en el dir. ```html```
- Comprimidas con 7Zip, pesan ~3.5 GB los HTML, ~42 MB ya comprimidos
- Tiene mediciones para so2, co, nox, no2, no, o3, pm10, pm2, wsp, wdr, tmp, rh para todas las estaciones del DF, para todos los meses, días por hora:

#### IMECA en Excel desde 1992

- http://www.aire.df.gob.mx/estadisticas-consultas/consultas/download_imeca.php

#### Otra info

Se puede hacer consulta de todos indicadores, varios años, todas las estaciones:

```
curl -o TODOS.html 'http://www.aire.df.gob.mx/estadisticas-consultas/consultas/resultado_consulta.php'
-H 'Origin: http://www.aire.df.gob.mx'
-H 'Accept-Encoding: gzip,deflate,sdch'
-H 'Accept-Language: en-US,en;q=0.8'
-H 'User-Agent: Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/36.0.1985.125 Chrome/36.0.1985.125 Safari/537.36'
-H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryYgxS80O0X25wrvdP'
H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
-H 'Cache-Control: max-age=0' -H 'Referer: http://www.aire.df.gob.mx/estadisticas-consultas/consultas/index.php'
-H 'Connection: keep-alive' --data-binary $'------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="diai"\r\n\r\n1\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="mesi"\r\n\r\n1\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="anoi"\r\n\r\n1990\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="diaf"\r\n\r\n31\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="mesf"\r\n\r\n12\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="anof"\r\n\r\n2014\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="TC"\r\n\r\non\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="TZ"\r\n\r\non\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="Q"\r\n\r\nhorarios\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="inter"\r\n\r\n\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP\r\nContent-Disposition: form-data; name="consulta"\r\n\r\nConsulta\r\n------WebKitFormBoundaryYgxS80O0X25wrvdP--\r\n' --compressed
```
