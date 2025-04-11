<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random seketika</title>
    <!-- Bootstrap CSS from Replit CDN -->
    <link rel="stylesheet" href="https://cdn.replit.com/agent/bootstrap-agent-dark-theme.min.css">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container proposal-container">
        <div id="proposal-content">
            <!-- Initial View -->
            <div id="initial-view" class="text-center">
                <h2 class="mb-4">Hi, ada yang mau aku omongin nihh :v</h2>
                <button id="start-button" class="btn btn-outline-primary">Klik ini untuk melanjutkan</button>
            </div>

            <!-- Main Proposal Content (Initially Hidden) -->
            <div id="main-content" class="text-center d-none">
                <!-- Animation container -->
                <div id="message-container" class="mb-4">
                    <p id="animated-text" class="lead"></p>
                </div>
                
                <!-- Heart SVG (Initially hidden) -->
                <div id="heart-container" class="d-none">
                    <svg id="heart-svg" viewBox="0 0 24 24" width="100" height="100" class="heart-beat">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>

                <!-- Proposal Question (Initially hidden) -->
                <div id="proposal-question" class="d-none">
                    <h1 class="proposal-title">Mau jadi pacarku kann??</h1>
                    <div class="button-container mt-4">
                        <button id="yes-button" class="btn btn-success">iya <i class="fas fa-heart"></i></button>
                        <button id="no-button" class="btn btn-danger">ngga <i class="fas fa-times"></i></button>
                    </div>
                </div>

                <!-- Response for Yes (Initially hidden) -->
                <div id="yes-response" class="d-none">
                    <div class="celebration">
                        <h1 class="mb-4"><i class="fas fa-heart text-danger"></i> makasihh ;) <i class="fas fa-heart text-danger"></i></h1>
                        <p class="lead">aku seneng banget dehh kamu jadi pacar akuuu :v</p>
                        <div class="mt-4 floating-hearts-container">
                            <!-- Hearts will be added by JS -->
                        </div>
                    </div>
                </div>

                <!-- Reset Button (Initially hidden) -->
                <div id="reset-container" class="mt-5 d-none">
                    <button id="reset-button" class="btn btn-secondary">kirim pesan</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JavaScript -->
    <script src="script.js"></script>
</body>
</html>
