var canvas = document.getElementById("Cv");
        var Obj = canvas.getContext("2d");
        var Radius = canvas.height / 2;
        Obj.translate(Radius,Radius);
        Radius = Radius * 0.90;
        setInterval(SystemTime,1000);

        function SystemTime(){
            drawClock(Obj,Radius);
            drawNumber(Obj,Radius);
            drawTime(Obj,Radius);
        }

        function drawClock(Obj,Radius) {
             Obj.beginPath();
             Obj.arc(0,0,Radius, 0,2*Math.PI);
             Obj.fillStyle = "white";
             Obj.fill();

             Obj.beginPath();
             Obj.arc(0,0,Radius * 0.1,0,2*Math.PI);
             Obj.fillStyle = "black";
             Obj.fill();
        }

        function drawNumber(Obj,Radius){
            var ang;
            var num;
            Obj.font = Radius * 0.15 +"px arial";
            Obj.textBaseline = "middle";
            Obj.textAlign = "center";
            for (var num = 1; num < 13; num++) {
              ang = num * Math.PI/6;

              Obj.rotate(ang);
              Obj.translate(0, -Radius*0.85);
              Obj.rotate(-ang);
              Obj.fillText(num.toString(),0,0);
              Obj.rotate(ang);
              Obj.translate(0, Radius * 0.85);
              Obj.rotate(-ang);
          }

  }
        function drawTime(Obj,Radius){
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();

            //Hour
            hour = hour%12;
            hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
            drawHand(Obj,hour, 90, 12.6);
            //Minute
            minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
            drawHand(Obj,minute,144,12.6);
            //second
            second = (second*Math.PI/30);
            drawHand(Obj,second,162,3,6);
        }

        function drawHand(Obj,pos,length,width){
            Obj.beginPath();
            Obj.lineWidth = width;
            Obj.lineCap = "round";
            Obj.moveTo(0,0);
            Obj.rotate(pos);
            Obj.lineTo(0, -length);
            Obj.stroke();
            Obj.rotate(-pos);
        }
