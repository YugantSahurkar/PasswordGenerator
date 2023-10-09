  function passwordgenerate() {
        var pass = "";
        var pw =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
          "1234567890" +
          "abcdefghijklmnopqrstuvwxyz0123456789@#$" +
          "~!#$% ";

        for (let i = 1; i <= 12; i++) {
          var char = Math.floor(Math.random() * pw.length + 1);

          pass += pw.charAt(char);
        }

        return pass;
      }
      function run() {
          document.getElementById("pass").innerHTML = passwordgenerate();
          
      }