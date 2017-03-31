console.log('\'Allo \'Allo!');
$('.button-collapse').sideNav();


//settings for fullpage.js
$('#fullpage').fullpage({

menu: '#nav',
anchors: ['a', 'b', 'c', 'd', 'e'],
normalScrollElements: '#nav',
paddingTop: 0,
paddingBottom: 0,
responsiveWidth: 640,
css3: true

});

// PIXI

$(document).ready(function() {
  var renderer = PIXI.autoDetectRenderer(400, 400, { transparent: true });
  $('#addPixi').append(renderer.view);
  var stage = new PIXI.Container();
  var clouds = PIXI.Sprite.fromImage('images/film.jpg');
  clouds.anchor.x = 0.5;
  clouds.anchor.y = 0.5;
  clouds.position.x = 200;
  clouds.position.y = 200;
  stage.addChild(clouds);
  var text = new PIXI.Text('Welcome', {font:'50px Arial', dropShadow: true, fill:'white'});
  text.anchor.x = 0.5;
  text.anchor.y = 0.5;
  text.position.x = 200;
  text.position.y = -25;
  stage.addChild(text);
  render();
  var count = 0;
  function render() {
    var colorMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
    ];
    var filter = new PIXI.filters.ColorMatrixFilter();
    filter.matrix = colorMatrix;
    var newValSat = 0 + Math.sin(count);
    filter.saturate(newValSat, false);
    stage.filters = [filter];
    count += .001;
  requestAnimationFrame(render);
    clouds.rotation += .001;
    if (text.position.y < 350) {
      text.position.y += 1;
    }
    renderer.render(stage);
  }
});
