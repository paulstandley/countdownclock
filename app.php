<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/style.css">
  <title>Count Down</title>
</head>
<body>
  <header>
    <h1>Count Down</h1>
  </header>
  <main>
    <h2>Todays Date</h2>
    <section>
      <p id="clockId"></p>
    </section>
    <h3 id="targetTitle"></h3>
    <h3 id="targetDate"></h3>
  </main>
  <form action="./app.php" target="_blank">
    <p>New Title:</p>
    <input id="newTitle" type="text" name="newtitle">
    <p>New Date:<p>
    <input id="newDate" type="date" name="newdate"><br>
    <input type="submit" value="Submit">
  </form>
  <footer>
    <p>Paul Standley</p>
  </footer>
  <script src="js/app.js"></script>
</body>
</html>