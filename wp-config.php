<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wordpress' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OSd<UR#KtL%8xPV!hQCjJCXzV)q/D-*R9#FKeD_/Z#2U5Yvi-y8lgGiHyx;nw+Or' );
define( 'SECURE_AUTH_KEY',  'Uzl,1j}gY:CTDtE*gbF;wa84m.~B*Bd}S Z_wbhH^OjQHPE1uC1cyMFeEI=2nLhe' );
define( 'LOGGED_IN_KEY',    '^a8(k{WAtH22m~4sm}f#%{G(-m-/O&3E4W~RX`?uzHjY>,N8&&yS_IK,z*nM/=D7' );
define( 'NONCE_KEY',        ';]7=p3J5LI*56GP&(%k$<Qky #>69e=Q#l;|9ntzpf6}F5@cip~z*kZ+RGe0c#@I' );
define( 'AUTH_SALT',        '!#,Quh<mKqE;bdhisz6Hw$[ Q_*0R+  DrwP5D5PeESK;C~9abuhNa-8nTl>=4#-' );
define( 'SECURE_AUTH_SALT', 'Z0Y HbNlMm sMxdLhh?/OYp]HmBK@R-E$8,zu^)c>g9@X(MIV-FYl8PRRXm0;nv-' );
define( 'LOGGED_IN_SALT',   'PTxN=B{}StPn|CF:*FB>[23qv}15|I}(u+F6dbY#bh$U@g3tDG;POjQs*mS[*-[m' );
define( 'NONCE_SALT',       'MzfTf&U_U9FOpuB*`I{D-B|)}]W1=Tkm]37&6e-oEw8E?w:-@RWcw`vkFs8i?L3S' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
