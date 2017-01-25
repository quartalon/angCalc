namespace angCalc {

    angular.module("angCalc", []);

    class AngularCalc {
        public result: number;
        public numA: number;
        public numB: number;

        public addNums() {
            this.result = this.numA + this.numB;
        }
        public subNums() {
            this.result = this.numA - this.numB;
        }
        public multNums() {
            this.result = this.numA * this.numB;
        }
        public divNums() {
            this.result = this.numA / this.numB;
        }

        public clearInputs() {
            this.numA = null;
            this.numB = null;
            this.result = null;
        }
        // public addOper() {
        //    if 
        // }
    }
 
    angular.module(`angCalc`).controller("AngularCalc", AngularCalc);
    

}
 
