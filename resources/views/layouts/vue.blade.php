<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title>ANFA NU</title>

  <meta content="" name="descriptison">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="{{ asset('resources/assets/img/favicon.png') }}" rel="icon">
  <link href="{{ asset('resources/assets/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <!-- Vendor CSS Files -->
  @vite('resources/assets/vendor/bootstrap/css/bootstrap.min.css')
  @vite('resources/assets/vendor/icofont/icofont.min.css')
  @vite('resources/assets/vendor/remixicon/remixicon.css')
  @vite('resources/assets/vendor/boxicons/css/boxicons.min.css')
  @vite('resources/assets/vendor/owl.carousel/assets/owl.carousel.min.css')
  @vite('resources/assets/vendor/venobox/venobox.css')
  @vite('resources/assets/vendor/aos/aos.css')

  <!-- Template Main CSS File -->
  @vite('resources/assets/css/style.css')
</head>

<body>
  <noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong>
  </noscript>
  <div id="app"></div>
  @vite('resources/js/app.js')
  <!-- built files will be auto injected -->
</body>

</html>