<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.5/tailwind.min.css">
        <title>Laravel</title>
        <style>
            html, body { height: 100vh; }

            body {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .tooltip {
                background: black;
                color: white;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <h3>Option #1</h3>
            <p>
                Hallo allemaal, <span data-tooltip="Boo!">hover eens over mij?</span>
            </p>

            <h3>Option #2</h3>
            <p>
                Bonjour, <span v-tooltip:right="'A 2nd way to display a tooltip'">hover pour moi</span>
            </p>

            <h3>Option #3</h3>
            <p>
                Hello Everyone, <span data-tooltip-name="third-sample-tooltip">give me a hover, wouldya?</span>
            </p>

            <tooltip name="third-sample-tooltip">
                <h1>Thank you!</h1>
                <p>
                    You're getting good at this hovering thing, my friend :)
                </p>
            </tooltip>

        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
