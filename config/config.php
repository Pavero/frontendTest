<?php

define(ROOT,$_SERVER['DOCUMENT_ROOT']);
define(TMP,ROOT.'/templates');
define(LIB,ROOT.'/libs');
define(INC,ROOT.'/includes');

function requireComponent($path,$type){
  include $type."/".$path.".php";
}

 ?>
