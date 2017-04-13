(function(angular){
  angular
    .module("application")
    .controller("exerciseTwoController",function(){

        const originalButtonText = "Button Text";
        const _possibleColors=[
          {
            name:"Blue",
            color:"1000ff"
          },
          {
            name:"Red",
            color: "ff0000"
          },
          {
            name: "green",
            color: "05ff05"
          }

        ]


        this.buttonText = originalButtonText
        this.buttonMouseEnter = function(){

          this.buttonText = "rolled over"
        }
        this.buttonResetClick = function(){
          this.buttonText= originalButtonText;

        }
        this.controllerInitObject =_createObject();

      this.objectArray = [
        this.controllerInitObject,
      ];
      this.addNewObject = function(){
        this.objectArray.push(_createObject());
        
      }

      function _createObject(){
        const returnObject = {
          name:"Obj",
          clickCount: 0,
          color: _getRandomColorFromCollectgion()
        };
        return returnObject;
      }

      function _getRandomColorFromCollectgion(){
        const randomColor = _possibleColors[Math.floor(Math.random()*_possibleColors.length)];
          return randomColor;
      } ;

    });
}(window.angular));
