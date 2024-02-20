<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/garage' => [
            [['_route' => 'app_api_garage_new', '_controller' => 'App\\Controller\\GarageController::new'], null, ['POST' => 0], null, false, false, null],
            [['_route' => 'app_api_garage_edit', '_controller' => 'App\\Controller\\GarageController::edit'], null, ['PUT' => 0], null, true, false, null],
            [['_route' => 'app_api_garage_delete', '_controller' => 'App\\Controller\\GarageController::delete'], null, ['DELETE' => 0], null, true, false, null],
        ],
        '/api/temoignages' => [
            [['_route' => 'app_api_temoignages_new', '_controller' => 'App\\Controller\\TemoignagesController::new'], null, ['POST' => 0], null, false, false, null],
            [['_route' => 'app_api_temoignages_show', '_controller' => 'App\\Controller\\TemoignagesController::show'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'app_api_temoignages_update', '_controller' => 'App\\Controller\\TemoignagesController::update'], null, ['PUT' => 0], null, false, false, null],
            [['_route' => 'app_api_temoignages_delete', '_controller' => 'App\\Controller\\TemoignagesController::delete'], null, ['DELETE' => 0], null, false, false, null],
        ],
        '/api/users' => [
            [['_route' => 'app_api_users_new', '_controller' => 'App\\Controller\\UserController::add'], null, ['POST' => 0], null, false, false, null],
            [['_route' => 'app_api_users_show', '_controller' => 'App\\Controller\\UserController::show'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'app_api_users_update', '_controller' => 'App\\Controller\\UserController::update'], null, ['PUT' => 0], null, false, false, null],
            [['_route' => 'app_api_users_delete', '_controller' => 'App\\Controller\\UserController::delete'], null, ['DELETE' => 0], null, false, false, null],
        ],
        '/api/users/connexion' => [[['_route' => 'app_api_users_login', '_controller' => 'App\\Controller\\UserController::login'], null, ['POST' => 0], null, false, false, null]],
        '/api/vehicules' => [
            [['_route' => 'app_api_vehicules_new', '_controller' => 'App\\Controller\\VehiculesController::addVehicule'], null, ['POST' => 0], null, false, false, null],
            [['_route' => 'app_api_vehicules_show', '_controller' => 'App\\Controller\\VehiculesController::showVehicule'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'app_api_vehicules_delete', '_controller' => 'App\\Controller\\VehiculesController::deleteVehicule'], null, ['DELETE' => 0], null, false, false, null],
            [['_route' => 'app_api_vehicules_update', '_controller' => 'App\\Controller\\VehiculesController::edit'], null, ['PUT' => 0], null, false, false, null],
        ],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api/garage/([^/]++)(*:62)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        62 => [
            [['_route' => 'app_api_garage_show', '_controller' => 'App\\Controller\\GarageController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
