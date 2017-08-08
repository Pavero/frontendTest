<?php
require $_SERVER['DOCUMENT_ROOT']."/config/config.php";

requireComponent("lessphp/lessc.inc",LIB);
$less = new lessc;
try{
  $less->checkedCompile(ROOT."/css/style.less", ROOT."/css/style.css");
} catch (exception $e) {
  echo "fatal error: " . $e->getMessage();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.20/jquery.fancybox.min.css">
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" charset="utf-8"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.20/jquery.fancybox.min.js" charset="utf-8"></script>
  <script src="/js/script.js" charset="utf-8"></script>
  <title>MarketDrive Test</title>
</head>
<body>
  <main>
    <section class="title">
      <span class="title__text">
          <b>Цифровые</b> автомобильные весы НПП "МЕТРА" на 100%<br>
          защищают вашу прибыль от потерь
      </span>
    </section>
    <section class="tabs" id="tabs">

      <div class="tabs__nav">
        <a>Технические характеристики</a>
        <a>Весь модельный ряд</a>
        <a>Комплектность поставки</a>
        <a>Сертификация</a>
      </div>

      <div class="tabs__container">
        <div class="tabs__arrow prev" id="prev"></div>
        <div class="tabs__arrow next" id="next"></div>
        <div class="tabs__block"></div>
      </div>

      <div class="tabs__content">
        <div data-tab="0">
          <div class="truck">
              <div class="tip i-1" data-icon="road">
                <div class="tip__icon"></div>
                <div class="tip__content">Ждет тебя дорога дальняя.</div>
              </div>
              <div class="tip i-2" data-icon="arrow">
                <div class="tip__icon"></div>
                <div class="tip__content">Налево пойдешь, дорогу найдешь.</div>
              </div>
              <div class="tip i-3" data-icon="transport">
                <div class="tip__icon"></div>
                <div class="tip__content">Общественный транспорт опасен.</div>
              </div>
              <div class="tip i-4" data-icon="delivery">
                <div class="tip__icon"></div>
                <div class="tip__content">
                  <span class="grey-text">Максимальная нагрузка</span>
                  <b><span class="blue-text"> - от 15 до 40 т</span></b>
                </div>
              </div>
              <div class="tip i-5" data-icon="cross">
                <div class="tip__icon"></div>
                <div class="tip__content">Кажется это аптечка.</div>
              </div>
              <div class="tip i-6" data-icon="clock">
                <div class="tip__icon"></div>
                <div class="tip__content invert">Нет времени объяснять, но я объясню!</div>
              </div>
              <div class="tip i-7" data-icon="arrow2">
                <div class="tip__icon"></div>
                <div class="tip__content invert">По наклонной к небесам!</div>
              </div>
              <img src="/img/truck.png" alt="">
          </div>
        </div>
        <div data-tab="1">
          <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. </p>
        </div>
        <div data-tab="2">
          <p>Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.</p>
        </div>
        <div data-tab="3">
          <p>Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.</p>
        </div>
      </div>
    </section>
    <section class="properties">
      <div class="properties__property">
        <div class="properties__property-image assembly">
        </div>
        <div class="properties__property-desc">
          <span>Монтаж<br>осуществляеться<br>в течении 1 дня</span>
        </div>
      </div>
      <div class="properties__property">
        <div class="properties__property-image temp">
        </div>
        <div class="properties__property-desc">
          <span>Работа при температурах<br>от -30 до + 40<br>градусов по цельсию</span>
        </div>
      </div>
      <div class="properties__property">
        <div class="properties__property-image protect">
        </div>
        <div class="properties__property-desc">
          <span>Каждый датчик<br>имеет специальную плату<br>обеспечивающий грозозащиту</span>
        </div>
      </div>
    </section>
    <section class="calculate">
      <div class="calculate__button">Получить рассчет</div>
    </section>
    <div id="msg" style="display: none">
      <div class="message">
      </div>
    </div>
  </main>
</body>
</html>
