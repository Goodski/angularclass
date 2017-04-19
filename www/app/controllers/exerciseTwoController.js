(function(angular){
  angular
    .module("application")
    .controller("exerciseTwoController",function($routeParams, es){
      console.log($routeParams);
      this.routeParams = $routeParams;
      this.es = es;

        const originalButtonText = "Button Text";
        this._possibleColors=[
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
        this._getRandomColorFromCollectgion = () => {
          const randomColor = this._possibleColors[Math.floor(Math.random()*this._possibleColors.length)];
            return randomColor;
        } ;
        this._createObject = () => {
          const returnObject = {
            name:"Obj" + (this.objectArray.length + 1),
            clickCount: 0,
            color: this._getRandomColorFromCollectgion().color
          };
          console.log(returnObject)
          return returnObject;
        }
        this.objectArray = [];
        this.controllerInitObject =this._createObject();
        this.objectArray.push(this.controllerInitObject);

        this.addNewObject = () => {
          this.objectArray.push(this._createObject());
        }

        this.colorFilterChanged = () => {
          if(!this.filter.color) delete this.filter.color;
        }




    });
}(window.angular));
