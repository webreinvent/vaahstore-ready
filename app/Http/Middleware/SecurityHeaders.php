<?php

namespace App\Http\Middleware;

use Closure;

class SecurityHeaders
{
    private $unwantedHeaders = ['X-Powered-By', 'server', 'Server'];

    /**
     * @param $request
     * @param  Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if (env('APP_ENV') === 'production'
            || env('APP_ENV') === 'develop'
            || env('APP_ENV') === 'staging' ) {
            $response->headers->set('Referrer-Policy', 'no-referrer-when-downgrade');
            $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
            $response->headers->set('Content-Security-Policy', "default-src 'self'; script-src 'self' https://unpkg.com http://cdn.jsdelivr.net http://localhost:* 'unsafe-inline' 'unsafe-eval'; style-src 'self' https://unpkg.com https://fonts.googleapis.com/ cdn.jsdelivr.net https://bulma.io 'unsafe-inline' ; img-src 'self' * data:; font-src 'self' data:  fonts.gstatic.com https://cdn.jsdelivr.net https://bulma.io; connect-src 'self' plausible.io/api/event https://api.github.com ; media-src 'self'; frame-src 'self' ; object-src 'none'; base-uri 'self';");
            $response->headers->set('Permissions-Policy', 'autoplay=(self), camera=(), encrypted-media=(self), fullscreen=(), geolocation=(self), gyroscope=(self), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=(self), usb=()');
            $response->headers->set('X-Frame-Options', 'SAMEORIGIN');
            $response->headers->set('X-Content-Type-Options', 'nosniff');

            $this->removeUnwantedHeaders($this->unwantedHeaders);
        }

        return $response;
    }

    /**
     * @param $headers
     */
    private function removeUnwantedHeaders($headers): void
    {
        foreach ($headers as $header) {
            header_remove($header);
        }
    }
}
