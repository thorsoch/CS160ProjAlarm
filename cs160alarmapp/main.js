// Put Skins herelet buttonSkin = new Skin({ fill : "#c4c4c4" });let darkGraySkin = new Skin({ fill: "#202020" });let downSkin = new Skin({ fill : "white" });// Put Styles herelet titleStyle = new Style({ font: "25px", color: "black" });let buttonStyle = new Style({font: '18px', color: 'black'});// Put Images herevar example = new Texture("assets/wheel.png")var exampleSkin = new Skin({  width: 512, height: 512, // The width and height are the pixel size of the image  texture: example,  fill: "white",  aspect: "stretch"})// Pinsimport Pins from "pins";let remotePins;class AppBehavior extends Behavior {    onLaunch(application) {        let discoveryInstance = Pins.discover(            connectionDesc => {                if (connectionDesc.name == "pins-share-led") {                    trace("Connecting to remote pins\n");                    remotePins = Pins.connect(connectionDesc);                }            },             connectionDesc => {                if (connectionDesc.name == "pins-share-led") {                    trace("Disconnected from remote pins\n");                    remotePins = undefined;                }            }        );            }}application.behavior = new AppBehavior();// Useful button Container Templatevar button = Container.template($ => ({  active: true, left: $.left, right: $.right, top: $.top, bottom: $.bottom,   width: $.width, height: $.height,  height: $.height,  skin: $.skin,  behavior: Behavior({    onTouchBegan: function(content){      content.skin = downSkin;    },    onTouchEnded: function(content){      content.skin = buttonSkin;      application.remove(currentScreen);  // Remove the old screen from the application      currentScreen = new $.nextScreen({});  // Make the new screen      application.add(currentScreen);  // Add the new screen to the application    },  }),  contents: [    Label($, { top: 0, bottom: 0, left: 0, right: 0, style: buttonStyle, string: $.string })  ]}));var mainScreen = Container.template($ => ({  left: 0, right: 0, top: 0, bottom: 0,  skin: downSkin,  contents: [    new Container({         top: 0, height: 50, left: 0, right: 0, skin: downSkin,         contents: [          new Line({            left: 0, right: 0, top: 0, bottom: 0,            contents:[              new Picture({width:50, height:50, url: "assets/wheel.png"}),              Label($, {top: 0, bottom: 0, left: 0, right: 0, style: titleStyle, string: "Alert Me" }),              new button({top: 0, bottom: 0, right: 0, width:50, nextScreen: mainScreen, skin: exampleSkin, string: ""}),            ]          })        ]    }),    new Picture({width:300, height:100, top:50, url: "assets/wheel.png"}),    new Container({    	top: 150, height: 50, left: 0, right: 0, skin: downSkin,         contents: [          new Line({            left: 0, right: 0, top: 0, bottom: 0,            contents:[              new Picture({width:50, height:50, url: "assets/wheel.png"}),              new button({top: 0, bottom: 0, left: 0, right: 0, string: "Mac Book"}),              new button({top: 0, bottom: 0, right: 0, width:50, nextScreen: mainScreen, skin: exampleSkin, string: ""}),            ]          })        ]    }),    new Container({    	top: 200, height: 50, left: 0, right: 0, skin: downSkin,         contents: [          new Line({            left: 200, height: 50, right: 0, top: 0, bottom: 0,            contents:[              new Picture({width:50, height:50, url: "assets/wheel.png"}),              new button({top: 0, bottom: 0, left: 0, right: 0, string: "iPad"}),              new button({top: 0, bottom: 0, right: 0, width:50, nextScreen: mainScreen, skin: exampleSkin, string: ""}),            ]          })        ]    }),    new Container({    	top: 250, height: 50, left: 0, right: 0, skin: downSkin,         contents: [          new Line({            left: 0, right: 0, top: 0, bottom: 0,            contents:[              new Picture({width:50, height:50, url: "assets/wheel.png"}),              new button({top: 0, bottom: 0, left: 0, right: 0, string: "TimBuk2"}),              new button({top: 0, bottom: 0, right: 0, width:50, nextScreen: mainScreen, skin: exampleSkin, string: ""}),            ]          })        ]    })  ]}));let currentScreen = new mainScreen({});application.add(currentScreen); 