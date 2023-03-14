<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>BMT ANFA NU</title>

  <meta content="" name="descriptison">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="{{ asset('img/logo-bmt-anfanu.png') }}" rel="icon">
  <link href="{{ asset('img/logo-bmt-anfanu.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet">

  <?php
    $current_url = url()->full();

    if ($current_url) {
      $explode_current_url = explode('/', $current_url);

      if (isset($explode_current_url[3]) && $explode_current_url[3] == 'admstr') {
        ?>
          <!-- Nucleo Icons -->
          @vite('resources/js/admin/assets/css/nucleo-icons.css')
          @vite('resources/js/admin/assets/css/nucleo-svg.css')

          <!-- Font Awesome Icons -->
          <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>

          <!-- CSS Files -->
          @vite('resources/js/admin/assets/css/argon-dashboard.css')

          <!-- Core JS Files -->
          @vite('resources/js/admin/assets/js/core/popper.min.js')
          @vite('resources/js/admin/assets/js/core/bootstrap.min.js')
          @vite('resources/js/admin/assets/js/plugins/perfect-scrollbar.min.js')
          @vite('resources/js/admin/assets/js/plugins/smooth-scrollbar.min.js')
          @vite('resources/js/admin/assets/js/plugins/chartjs.min.js')

          <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
          @vite('resources/js/admin/assets/js/argon-dashboard.min.js')
        <?php
      } else {
        ?>
          <!-- Vendor CSS Files -->
          @vite('resources/js/customer/assets/vendor/bootstrap/css/bootstrap.min.css')
          @vite('resources/js/customer/assets/vendor/icofont/icofont.min.css')
          @vite('resources/js/customer/assets/vendor/remixicon/remixicon.css')
          @vite('resources/js/customer/assets/vendor/boxicons/css/boxicons.min.css')
          @vite('resources/js/customer/assets/vendor/owl.carousel/assets/owl.carousel.min.css')
          @vite('resources/js/customer/assets/vendor/venobox/venobox.css')
          @vite('resources/js/customer/assets/vendor/aos/aos.css')

          <!-- Template Main CSS File -->
          @vite('resources/js/customer/assets/css/style.css')
        <?php
      }
    }
  ?>
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