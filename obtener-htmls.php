#!/usr/bin/php -q
<?php
require'vendor/autoload.php';
use Ivansabik\DomHunter\DomHunter;
use Ivansabik\DomHunter\Tabla;
use Camspiers\JsonPretty\JsonPretty;

$qtipos = array('HORARIOS','MAXIMOS','MINIMOS');
$parametros = array('so2','co','nox','no2','no','o3','pm10','pm2','wsp','wdr','tmp','rh');
$anios = range(2005, 2014);

define('URL_CONSULTA','http://www.aire.df.gob.mx/estadisticas-consultas/concentraciones/respuesta.php');

foreach($qtipos as $qtipo) {
    foreach($parametros as $parametro) {
        foreach($anios as $anio) {
	        $id_consulta = $qtipo .'_'. $parametro .'_'. $anio;
		    print 'Estoy en la consulta '. $id_consulta . PHP_EOL;
		    $curl_target = URL_CONSULTA .'?qtipo='. $qtipo .'&parametro='. $parametro .'&anio='. $anio .'&qmes=';
		    file_put_contents('html/'. $id_consulta .'.html', file_get_contents($curl_target));
        }
    }
}
print 'Listo, checa el dir ./html' . PHP_EOL;
