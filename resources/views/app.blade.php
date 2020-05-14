<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ideas-to.dev</title>

    <meta name="description" content="Des idées de projets à concevoir pour apprendre le développement !">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <script defer src="{{ asset('js/app.js') }}"></script>
</head>

<body>
    <div id="app"></div>
</body>

</html>