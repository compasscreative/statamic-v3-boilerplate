<?php

// Dynamic caching based off of https://github.com/studio1902/statamic-peak/blob/main/app/Http/Controllers/DynamicToken.php
// Another reference: https://statamic.com/addons/aerni/dynamic-cache

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DynamicToken extends Controller
{
     /**
     * Get refreshed CSRF token.
     *
     * @return string
     */
    public function getRefresh(Request $request)
    {
        // Determine if the request is actually coming from our own website on non local enviroments.
        if (config('app.env') != 'local')
        {
            $referer = request()->headers->get('referer');
            $contains = str_contains($referer, request()->getHttpHost());
            if (empty($referer) || !$contains) {
                abort(404);
            }
        }

        return response()->json([
            'csrf_token' => csrf_token()
        ]);
    }
}