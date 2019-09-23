<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpressdemo');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'c%d+8qV,4jxex6z4[jo.V<//$glrF6yy5NN4b[Y|say)XG>^}u|UOb@/B.mp`2IT');
define('SECURE_AUTH_KEY',  'TV@.l*{r).Og$2&K?wDbmh7W[@nW0Rk}p|o(DysaQ?`-BD1,1 vRIaH<zRp9P8(V');
define('LOGGED_IN_KEY',    ';#duiL!?:$R >Hjox~QrG>XFQMAv/%Bj|nSTrRmy4,UoeE2_]implD3NslFN.y4|');
define('NONCE_KEY',        'D9AyY}|T7c~_ 0/KLr<+I}SVJa[0ifo^7K!lQ^A3qi:VFv*m+>ocK`],@{T5Pr-j');
define('AUTH_SALT',        '{>;Z,1tb)#K~)=Xbz(I3v|&AqF,fArN.faiG(Z{Q#g8y!%#(Y&PDyDC{~|777j(W');
define('SECURE_AUTH_SALT', 'iL8K+u4rtFCD>n]/F;0CEULcyd*[`EHX/bT~Rzlv;Ta3iB.V5:7s~43*7(Xpj)xC');
define('LOGGED_IN_SALT',   '%y7C?k8x}e|FbRJPJ`;qg59x8AuA>v@`=>,{6WHWs.16&FN$#RY/wafw6nl/u@zs');
define('NONCE_SALT',       'ZJ![UI`#i4`-xV=.DzQDVe/(e$0>$~8Sz=,,m]uF#E%::8FrNSyCA6(NmUe#^,a>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
