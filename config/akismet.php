<?php

return [
    'api_key' => env('AKISMET_API_KEY'),
    'forms' => [
        'contact' => [
            'handle' => 'contact',
            'name_field' => 'name',
            'first_name_field' => null,
            'last_name_field' => null,
            'email_field' => 'email',
            'content_field' => 'message',
        ],
        'application' => [
            'handle' => 'application',
            'name_field' => 'name',
            'first_name_field' => null,
            'last_name_field' => null,
            'email_field' => 'email',
            'content_field' => 'message',
        ],
    ],
];
