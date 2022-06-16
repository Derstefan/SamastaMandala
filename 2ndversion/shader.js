<html>
   <head>
      <title>PixiJS Shaders</title>
   </head>
   <body>
      <script type="text/javascript" src="https://pixijs.download/release/pixi.js"></script>
      <script> 
      // Create the application helper and add its render target to the page
      let app = new PIXI.Application({ width: 640, height: 360 });
      document.body.appendChild(app.view);

      // Create the sprite and add it to the stage
      let sprite = PIXI.Sprite.from("http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png");
      app.stage.addChild(sprite);

      // Add a ticker callback to move the sprite back and forth
      let elapsed = 0.0;
      app.ticker.add((delta) => {
        elapsed += delta;
        sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
      });
      </script>
   </body>
</html>