/*! For license information please see main.0ac64718f1f61d3401af.bundle.js.LICENSE.txt */
(()=>{var e,t={432:(e,t,i)=>{"use strict";i(260);class s extends Phaser.GameObjects.Text{constructor(e){super(e,10,10,"",{color:"black",fontSize:"42px"}),e.add.existing(this),this.setOrigin(0),this.score=0}update(){this.setText(`Score: ${this.score}`)}increaseScore(){this.score+=1,this.update()}getScore(){return this.score}}class a extends Phaser.GameObjects.Image{constructor(e){super(e.scene,e.x,e.y,e.key),e.scene.physics.world.enableBody(this),e.scene.add.existing(this),this.body.setCollideWorldBounds(!0,0,0,!0)}create(e){}delete(){}}class r extends a{constructor(e,t,i){return super(e),this.setScale(e.scale),this.scene=e.scene,this.block_group=e.scene.add.group(),this.block_speed=t,this.scale=e.scale,this.create(i),this}create(e){let t=this.scale,i=522*t,s=e;this.body.setVelocityX(-this.block_speed),this.body.setAllowGravity(!1),this.x=this.scene.cameras.main.width-i/2;for(var a=2;a<=s;a++){let e=p[Math.floor(Math.random()*p.length)];var r=this.scene.physics.add.image(window.innerWidth-i/2,this.scene.ground.y-this.scene.ground.height/2-522*t*a+522*t/2,e).setScale(t);r.body.setAllowGravity(!1),this.block_group.add(r),r.body.setVelocityX(-this.block_speed)}this.block_group}destroy(){this.block_group.clear(),super.destroy()}updateSpeed(e){this.block_speed=e}collide(){}}function n(e,t,i=0){if(0==i)document.cookie=e+"="+t+";path=/";else{const s=new Date;s.setTime(s.getTime()+24*i*60*60*1e3);let a="expires="+s.toUTCString();document.cookie=e+"="+t+";"+a+";path=/"}}function o(e){let t=e+"=",i=decodeURIComponent(document.cookie).split(";");for(let e=0;e<i.length;e++){let s=i[e];for(;" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}const h=parseInt(o("player_scale"));class c{static create(e,t,i){if("vacay_hat"===i)return e.add.sprite(t.x,t.y-t.height-9*h,i).setScale(parseInt(o("player_scale")));throw new Error("Error retrieving hat "+i+" Check availability")}static refresh(e,t){e.setPosition(t.x,t.y-t.height-9*h)}}c.key="vacayHat";class d extends Phaser.GameObjects.Sprite{constructor(e){super(e.scene,e.x,e.y,e.key),this.setScale(e.scale),e.scene.physics.world.enable(this),e.scene.add.existing(this),this.inAir=!1,this.jump_lock=!1,this.scene=e.scene,this.key=e.key,this.double_jump=!1,this.finger_down=!1,this.character_clothing={hat:""},this.body.setSize(22,47,!0),this.checkItemsOnCreation()}checkItemsOnCreation(){let e=o("hat");if(""!=e){let t=c.create(this.scene,this,e);this.equip(t,"hat")}}jump(e){this.refreshItems();let t=this;e.isDown&&(0==this.inAir&&0==this.jump_lock?(this.finger_down=!0,this.body.setVelocityY(-690),this.inAir=!0,this.play("jump",!0),this.double_jump=!0,t.scene.time.delayedCall(400,(function(){t.jump_lock=!0,t.double_jump=!0}))):0==this.jump_lock?this.body.setVelocityY(-690):1==this.double_jump&&0==this.finger_down&&(this.body.setVelocityY(-650),this.double_jump=!1,this.play("jump_transition",!0),this.scene.time.delayedCall(100,(()=>this.play("double_jump",!0))))),e.isDown||1!=this.inAir||(this.jump_lock=!0,this.finger_down=!1)}onGround(){this.play("walk",!0),this.inAir=!1,this.jump_lock=!1,this.double_jump=!1}equip(e,t){""==this.character_clothing[t]?this.character_clothing[t]=e:(this.remove_item(this.character_clothing[t],t),this.character_clothing[t]="",this.equip(e,t))}remove_item(e,t){this.character_clothing[t]="",e.destroy()}refreshItems(){let e=this.character_clothing.hat;""!=e&&c.refresh(e,this)}}class l{constructor(e){this.scene=e}playAgain(e,t,i){void 0===i&&(i=1);var s=this.scene.add.sprite(e,t,"play_again_default").setScale(i).setInteractive().on("pointerup",(()=>{s.setTexture("play_again_default"),this.scene.scene.restart()})).on("pointerdown",(()=>s.setTexture("play_again_clicked")))}play(e,t,i){void 0===i&&(i=1);var s=this.scene.add.sprite(e,t,"play_default").setScale(i).setInteractive().on("pointerup",(()=>{s.setTexture("play_default");let e=o("first_time");""==e||"true"==e?this.firstPlay():this.scene.scene.start("MainScene")})).on("pointerdown",(()=>s.setTexture("play_clicked")))}firstPlay(){let e=this.scene.add.text(0,0,"",{backgroundColor:"black",fixedWidth:window.innerWidth,fixedHeight:window.innerHeight}),t=this.scene.add.text(25,window.innerHeight/3,"Welcome to baggage run!\nThe goal of the game is to avoid bags by jumping over them        \n\n\nPress or hold to jump.\nThe longer you hold the higher you jump.        \n\nTo double jump press the screen again after letting go.",{color:"white",align:"center",fontSize:"54px",fontFamily:"roboto",wordWrap:{width:window.innerWidth,useAdvancedWrap:!0}});e.on("pointerup",(()=>{t.destroy(),e.destroy(),n("first_time","false"),this.scene.scene.start("MainScene")}),this),e.alpha=.7,e.setInteractive()}leaderboard(e,t,i){void 0===i&&(i=1);var s=this.scene.add.sprite(e,t,"leaderboard_default").setScale(i).setInteractive().on("pointerup",(()=>{s.setTexture("leaderboard_default")})).on("pointerdown",(()=>s.setTexture("leaderboard_clicked")))}quit(e,t,i){void 0===i&&(i=1);var s=this.scene.add.sprite(e,t,"quit_default").setScale(i).setInteractive().on("pointerup",(()=>{s.setTexture("quit_default"),this.scene.scene.start("StartScene")})).on("pointerdown",(()=>s.setTexture("quit_clicked")))}}const p=new Array("block_1","block_2","block_3","block_4");class u extends Phaser.Scene{constructor(){super({key:"MainScene"})}create(){this.start_sequence=!0,this.game_over=!1,this.spawn_time=3e3,this.block_speed=275,this.facing_correct=!1,this.obstacle_array=new Array,this.buttons=new l(this),this.add.tileSprite(window.innerWidth/2,0,window.innerWidth,window.innerHeight,"background_tile"),this.score_text=new s(this),this.score_text.update();var e=this.add.container(window.innerWidth/2,window.innerHeight/2).setSize(window.innerWidth,window.innerHeight),t=this.add.tileSprite(0,0,window.innerWidth,window.innerHeight/2,"brick_tile");t.y=t.height/2,e.add(t),this.ground=this.physics.add.image(.5*window.innerWidth,.5*window.innerHeight+16,"platform"),this.ground.body.setAllowGravity(!1),this.ground.setImmovable(!0);const i={scene:this,x:.15*window.innerWidth,y:this.ground.y-4*this.ground.height,key:"player",scale:4};this.OBSTACLE_CONFIG={key:"block_1",x:window.innerWidth,y:this.ground.y-this.ground.height/2-52.2,scene:this,scale:.2},this.physics.world.on("worldbounds",this.onWorldBounds,this),this.spawn_timer=this.time.addEvent(this.timer_config),this.player_character=new d(i),this.player_character.play("jump"),this.physics.add.collider(this.player_character,this.ground,this.onGround,void 0,this),this.last_spawn=this.time.now}update(){if(this.time.now-this.last_spawn>this.spawn_time&&0==this.game_over){let t=this.start_sequence?2:Phaser.Math.Between(2,3);this.last_spawn=this.time.now,this.OBSTACLE_CONFIG.key=p[Math.floor(Math.random()*p.length)];var e=new r(this.OBSTACLE_CONFIG,this.block_speed,t);this.physics.add.collider(this.player_character,e.block_group,this.gameOver,void 0,this),this.obstacle_array.push(e)}this.player_character.jump(this.input.activePointer)}onWorldBounds(){this.score_text.increaseScore();let e=this.score_text.getScore();e%10==0&&(this.block_speed+=100,this.spawn_time-=300),e>2&&(this.start_sequence=!1);let t=this.obstacle_array.shift();t.body.setCollideWorldBounds(!1).setVelocityX(-t.block_speed),this.time.delayedCall(300,(function(){t.destroy()}),[],this)}onGround(){this.player_character.onGround()}gameOver(){this.game_over=!0,this.player_character.setTint("0xFF0000"),this.physics.pause(),this.spawn_timer.remove(),this.player_character.play("jump",!0),this.buttons.playAgain(window.innerWidth/2,6*window.innerHeight/9,.7),this.buttons.leaderboard(window.innerWidth/2,7*window.innerHeight/9,.7),this.buttons.quit(window.innerWidth/2,8*window.innerHeight/9,.7)}}class g extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){this.load.image("platform","assets/img/platform.png"),this.load.image("block_1","assets/img/block_1.png"),this.load.image("block_2","assets/img/block_2.png"),this.load.image("block_3","assets/img/block_3.png"),this.load.image("block_4","assets/img/block_4.png"),this.load.spritesheet("player","assets/img/stefan_sprite.png",{frameWidth:32,frameHeight:48}),this.load.image("brick_tile","assets/img/BrickTiles.png"),this.load.image("background_tile","assets/img/background_tile.png"),this.load.image("play_again_default","assets/img/button_default.png"),this.load.image("play_again_clicked","assets/img/button_clicked.png"),this.load.image("play_default","assets/img/play_default.png"),this.load.image("play_clicked","assets/img/play_clicked.png"),this.load.image("leaderboard_default","assets/img/leaderboard_default.png"),this.load.image("leaderboard_clicked","assets/img/leaderboard_clicked.png"),this.load.image("quit_default","assets/img/quit_default.png"),this.load.image("quit_clicked","assets/img/quit_clicked.png"),this.load.image("vacay_hat","assets/img/vacay_hat.png"),n("player_scale","4")}create(){this.anims.create({key:"walk",frameRate:5,frames:this.anims.generateFrameNumbers("player",{start:5,end:8}),repeat:-1}),this.anims.create({key:"jump",frameRate:1,frames:[{key:"player",frame:5}]}),this.anims.create({key:"jump_transition",duration:500,frames:[{key:"player",frame:6}]}),this.anims.create({key:"double_jump",frameRate:1,frames:[{key:"player",frame:7}]}),this.scene.start("StartScene")}}class _ extends Phaser.Scene{constructor(){super({key:"GameoverScene"})}create(){var e=this.add.sprite(this.cameras.main.width/2,this.cameras.main.height/3,"play_again_default").setInteractive().on("pointerup",(()=>{console.log("button works"),e.setTexture("play_again_default")})).on("pointerdown",(()=>e.setTexture("play_again_clicked")))}}class m extends Phaser.Scene{constructor(){super({key:"StartScene"})}create(){this.add.tileSprite(window.innerWidth/2,0,window.innerWidth,window.innerHeight,"background_tile");var e=this.add.container(window.innerWidth/2,window.innerHeight/2).setSize(window.innerWidth,window.innerHeight),t=this.add.tileSprite(0,0,window.innerWidth,window.innerHeight/2,"brick_tile");t.y=t.height/2,e.add(t);var i=this.add.image(.5*window.innerWidth,.5*window.innerHeight+16,"platform");const s={scene:this,x:.15*window.innerWidth,y:i.y-4*i.height,key:"player",scale:parseInt(o("player_scale"))};n("hat","vacay_hat"),new d(s).setFlipX(!0),this.physics.pause();var a=new l(this);a.play(window.innerWidth/2,6*window.innerHeight/9,.7),a.leaderboard(window.innerWidth/2,7*window.innerHeight/9,.7),a.quit(window.innerWidth/2,8*window.innerHeight/9,.7)}}const w={type:Phaser.AUTO,backgroundColor:"#ffffff",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:window.innerWidth,height:window.innerHeight,resolution:window.devicePixelRatio},scene:[g,u,_,m],physics:{default:"arcade",arcade:{debug:!0,gravity:{y:1800}}}};window.addEventListener("load",(()=>{new Phaser.Game(w)}))},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},i={};function s(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return t[e].call(r.exports,r,r.exports,s),r.exports}s.m=t,e=[],s.O=(t,i,a,r)=>{if(!i){var n=1/0;for(d=0;d<e.length;d++){for(var[i,a,r]=e[d],o=!0,h=0;h<i.length;h++)(!1&r||n>=r)&&Object.keys(s.O).every((e=>s.O[e](i[h])))?i.splice(h--,1):(o=!1,r<n&&(n=r));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,a,r]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var a,r,[n,o,h]=i,c=0;if(n.some((t=>0!==e[t]))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(h)var d=h(s)}for(t&&t(i);c<n.length;c++)r=n[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},i=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),s.O(void 0,[216],(()=>s(432)));var a=s.O(void 0,[216],(()=>s(204)));a=s.O(a)})();